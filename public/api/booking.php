<?php
// T GOLD — nhận form Đặt lịch tư vấn trên hosting PHP (Hostinger Web/Shared hosting).
// Được gọi qua /api/booking (xem .htaccess). Lưu vào /api/_storage/ và gửi email bằng mail().
// ⚙️ Đổi địa chỉ nhận thông báo ở đây:
const BOOKING_TO = ''; // ví dụ 'booking@tgoldluxury.vn' — để trống: chỉ lưu file, không gửi email
const BOOKING_FROM = ''; // ví dụ 'no-reply@tgoldluxury.vn' (email thuộc tên miền của bạn)

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function out($code, $arr) { http_response_code($code); echo json_encode($arr); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false]);
if (!empty($_POST['website'])) out(200, ['ok' => true]); // bẫy spam

$dir = __DIR__ . '/_storage';
if (!is_dir($dir)) { mkdir($dir, 0750, true); file_put_contents("$dir/.htaccess", "Require all denied\nDeny from all\n"); }

// Giới hạn tần suất: 5 lần / 10 phút / IP
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$rl = "$dir/rl-" . md5($ip);
$hits = array_filter(explode(',', @file_get_contents($rl) ?: ''), fn($t) => $t && time() - (int)$t < 600);
if (count($hits) >= 5) out(429, ['ok' => false, 'error' => 'rate_limited']);
$hits[] = time(); file_put_contents($rl, implode(',', $hits));

$s = fn($k, $n) => mb_substr(trim((string)($_POST[$k] ?? '')), 0, $n);
$phone = $s('phone', 20);
$norm = preg_replace('/[\s.\-()]/', '', $phone);
$phoneOk = preg_match('/^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/', $norm) || preg_match('/^(?:\+?84|0)2\d{9}$/', $norm) || preg_match('/^\+(?!84)\d{8,15}$/', $norm);
$b = [
  'id' => bin2hex(random_bytes(8)), 'at' => date('c'), 'lang' => $s('lang', 2),
  'name' => $s('name', 80), 'phone' => $phone,
  'interest' => array_slice(array_map('strval', (array)($_POST['interest'] ?? [])), 0, 10),
  'date' => $s('date', 10), 'slot' => $s('slot', 20), 'note' => $s('note', 1500), 'source' => $s('source', 200),
  'consent' => ($_POST['consent'] ?? '') === 'yes', 'files' => [],
];
if (mb_strlen($b['name']) < 2 || !$phoneOk || !$b['consent']) out(422, ['ok' => false, 'error' => 'invalid']);

// Ảnh ý tưởng (≤ 3 ảnh, ≤ 5 MB)
if (!empty($_FILES['files']['name'][0])) {
  @mkdir("$dir/uploads", 0750, true);
  foreach ($_FILES['files']['tmp_name'] as $i => $tmp) {
    if ($i >= 3 || !is_uploaded_file($tmp) || $_FILES['files']['size'][$i] > 5 * 1048576) continue;
    $mime = mime_content_type($tmp);
    if (strpos($mime, 'image/') !== 0) continue;
    $ext = strtolower(pathinfo($_FILES['files']['name'][$i], PATHINFO_EXTENSION)) ?: 'jpg';
    $name = $b['id'] . '-' . ($i + 1) . '.' . preg_replace('/[^a-z0-9]/', '', $ext);
    if (move_uploaded_file($tmp, "$dir/uploads/$name")) $b['files'][] = $name;
  }
}
file_put_contents("$dir/bookings.jsonl", json_encode($b, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

if (BOOKING_TO) {
  $rows = ['Họ tên' => $b['name'], 'Điện thoại / Zalo' => $b['phone'], 'Quan tâm' => implode(', ', $b['interest']),
    'Ngày' => $b['date'], 'Buổi' => $b['slot'], 'Ghi chú' => $b['note'], 'Ảnh đính kèm' => implode(', ', $b['files']), 'Nguồn' => $b['source']];
  $body = ''; foreach ($rows as $k => $v) $body .= "$k: " . ($v !== '' ? $v : '—') . "\n";
  $subject = '=?UTF-8?B?' . base64_encode("[T Gold] Lịch tư vấn mới — {$b['name']} · {$b['phone']}") . '?=';
  $headers = "Content-Type: text/plain; charset=UTF-8\r\n" . (BOOKING_FROM ? 'From: ' . BOOKING_FROM . "\r\n" : '');
  @mail(BOOKING_TO, $subject, $body, $headers);
}
out(200, ['ok' => true]);

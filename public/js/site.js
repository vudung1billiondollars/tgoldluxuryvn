/* T GOLD — site.js (không phụ thuộc thư viện) */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const CFG = JSON.parse($('#tg-config')?.textContent || '{}');
  const I18N = CFG.i18n || {};
  const LANG = CFG.lang || 'vi';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* bộ nhớ bị chặn */ } },
  };
  const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');

  /* ── Toast ── */
  const toastEl = $('[data-toast]');
  let toastTimer;
  function toast(html, ms = 2600) {
    if (!toastEl) return;
    toastEl.innerHTML = html;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    if (ms) toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
  }

  /* ── Header: trong suốt trên hero → nền tối + blur.
     Điện thoại (ảnh ở trên, chữ ở dưới): chuyển ngay khi phần chữ của hero chạm đáy thanh menu.
     Máy tính: chuyển khi đã cuộn qua hết hero. ── */
  const head = $('[data-head]');
  const hero = $('.hero');
  const heroText = hero && $('[data-slides]', hero);
  const stacked = matchMedia('(max-width: 1023px)');
  const chat = $('[data-chat]');
  function onScroll() {
    const y = scrollY;
    const limit = !hero ? 0 : heroText && stacked.matches ? heroText.getBoundingClientRect().top + y - head.offsetHeight - 8 : hero.offsetHeight - head.offsetHeight - 1;
    head.classList.toggle('solid', !hero || y > limit);
    if (chat) chat.classList.toggle('on', y > innerHeight * 0.6 || document.body.classList.contains('no-hero'));
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('load', onScroll);
  document.fonts?.ready.then(onScroll);
  onScroll();

  /* ── Dialog: menu mobile, tìm kiếm, món đã lưu ── */
  const dialogs = { menu: $('#dlg-menu'), search: $('#dlg-search'), saved: $('#dlg-saved') };
  const burger = $('.burger');
  function openDlg(name) {
    const d = dialogs[name];
    if (!d || d.open) return;
    Object.values(dialogs).forEach((x) => x?.open && x.close());
    d.showModal();
    document.documentElement.style.overflow = 'hidden';
    if (name === 'menu') burger?.setAttribute('aria-expanded', 'true');
    if (name === 'search') { loadSearch(); setTimeout(() => $('[data-search-input]')?.focus(), 30); }
    if (name === 'saved') renderSaved();
  }
  Object.values(dialogs).forEach((d) => {
    if (!d) return;
    d.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      if (d === dialogs.menu) burger?.setAttribute('aria-expanded', 'false');
    });
    d.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) return d.close();
      if (e.target.closest('a[href]')) return d.close();
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
      }
    });
  });
  $$('[data-open]').forEach((b) => b.addEventListener('click', () => openDlg(b.dataset.open)));
  addEventListener('keydown', (e) => {
    if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) {
      e.preventDefault(); openDlg('search');
    }
  });

  /* ── Hiện dần khi cuộn ── */
  const rv = $$('.rv');
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('in'));

  /* ── Hero trang chủ: slide tự lướt theo thanh tiến trình ──
     Luôn tự lướt (kể cả máy bật Giảm chuyển động — đã có nút tạm dừng). Chỉ dừng khi khách chủ động: nút tạm dừng, bấm số slide (01–04),
     bấm vào vùng ảnh (máy tính), hoặc ấn giữ trên điện thoại (thả ra → chạy tiếp). Mũi tên chỉ chuyển slide. Rê chuột / focus không làm dừng. Ngầm dừng khi hero ra khỏi màn hình hoặc tab bị ẩn (khách không nhận thấy).
     Ảnh slide 2+ chỉ tải sau khi trang đã hiện xong để không tranh băng thông với ảnh slide 1 (LCP). */
  $$('[data-slider]').forEach((hero) => {
    const slides = $$('.hm-sl', hero), photos = $$('.hm-p', hero), tabs = $$('.hm-tab', hero);
    if (slides.length < 2) return;
    const pauseBtn = $('[data-pause]', hero), live = $('[data-slides]', hero);
    let cur = 0, userPaused = false, held = false, off = false, lastTouch = 0, rested = false, restT = 0, hovering = false, forcePlay = false;
    const dur = parseFloat(getComputedStyle(hero).getPropertyValue('--dur')) || 7000;
    const REST = Math.max(10000, dur * 2); // tạm dừng sau khi khách tự chuyển slide, rồi tự chạy lại
    const canHover = matchMedia('(hover: hover) and (pointer: fine)');
    const loadImg = (k) => {
      if (!photos[k]) return;
      $$('img[data-src]', photos[k]).forEach((im) => {
        if (im.dataset.srcset) { im.srcset = im.dataset.srcset; im.removeAttribute('data-srcset'); }
        im.src = im.dataset.src; im.removeAttribute('data-src');
      });
    };
    const loadAll = () => photos.forEach((_, k) => loadImg(k));
    if (document.readyState === 'complete') setTimeout(loadAll, 600);
    else addEventListener('load', () => ('requestIdleCallback' in window ? requestIdleCallback(loadAll, { timeout: 2500 }) : setTimeout(loadAll, 1200)));
    function state() {
      const stopped = userPaused || rested; // chế độ phát: khách bấm dừng, hoặc vừa tự chuyển slide và đang tạm dừng để đọc
      const paused = stopped || held || (hovering && !forcePlay) || off || document.hidden; // thanh tiến trình đứng yên
      hero.classList.toggle('paused', paused);
      hero.classList.toggle('stopped', stopped);
      hero.classList.add('playing');
      if (pauseBtn) { // biểu tượng & nhãn nút theo chế độ phát (rê chuột chỉ giữ tạm, không đổi nút dưới con trỏ)
        pauseBtn.setAttribute('aria-label', stopped ? pauseBtn.dataset.lPlay : pauseBtn.dataset.lPause);
        pauseBtn.setAttribute('aria-pressed', String(stopped));
      }
      live?.setAttribute('aria-live', paused ? 'polite' : 'off');
    }
    function go(i) {
      cur = (i + slides.length) % slides.length;
      loadImg(cur);
      slides.forEach((sl, k) => { sl.classList.toggle('on', k === cur); sl.inert = k !== cur; });
      photos.forEach((p, k) => p.classList.toggle('on', k === cur));
      tabs.forEach((tb, k) => {
        tb.classList.remove('on'); tb.classList.toggle('done', k < cur);
        if (k === cur) { void tb.offsetWidth; tb.classList.add('on'); tb.setAttribute('aria-current', 'true'); } else tb.removeAttribute('aria-current');
      });
      state();
    }
    hero.addEventListener('animationend', (e) => { if (e.animationName === 'hmFill' && e.target.closest('.hm-tab.on')) go(cur + 1); });
    // Khách tự chuyển slide (số 01–04, mũi tên, phím, vuốt) → chuyển ngay, tạm dừng để đọc, sau đó tự chạy lại
    const rest = () => { rested = true; clearTimeout(restT); restT = setTimeout(() => { rested = false; state(); }, REST); };
    const nav = (i) => { rest(); go(i); };
    // Nút dừng / chạy: đang dừng (vì bất kỳ lý do nào) → chạy ngay; đang chạy → dừng hẳn tới khi bấm lại
    const toggle = () => {
      if (userPaused || rested) { userPaused = false; rested = false; clearTimeout(restT); forcePlay = hovering; }
      else userPaused = true;
      state();
      return !(userPaused || rested);
    };
    tabs.forEach((tb, k) => tb.addEventListener('click', () => nav(k)));
    pauseBtn?.addEventListener('click', toggle);
    $('[data-prev]', hero)?.addEventListener('click', () => nav(cur - 1));
    $('[data-next]', hero)?.addEventListener('click', () => nav(cur + 1));
    // Máy tính: rê chuột vào khối chữ / thanh điều khiển của hero (lúc đang đọc) = tạm dừng, rời chuột = chạy tiếp.
    // Không tính vùng ảnh: hero chiếm gần trọn màn hình đầu, tính cả ảnh thì slide gần như không bao giờ tự chạy trên máy tính.
    [$('[data-slides]', hero), $('.hm-nav', hero)].filter(Boolean).forEach((el) => {
      el.addEventListener('mouseenter', () => { if (canHover.matches) { hovering = true; forcePlay = false; state(); } });
      el.addEventListener('mouseleave', () => { hovering = false; forcePlay = false; state(); });
    });
    // Máy tính: bấm vào vùng ảnh = tạm dừng / tiếp tục, biểu tượng phản hồi hiện ở giữa ảnh
    const ph = $('.hm-ph', hero), flash = $('.hm-flash', hero);
    ph?.addEventListener('click', () => {
      if (Date.now() - lastTouch < 800) return; // điện thoại dùng ấn giữ
      const playing = toggle(); // bấm ảnh = như nút dừng / chạy
      if (!flash) return;
      flash.classList.toggle('is-paused', !playing);
      flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
    });
    document.addEventListener('visibilitychange', state);
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { off = !en.isIntersecting; state(); }, { threshold: 0.25 }).observe(hero);
    hero.addEventListener('keydown', (e) => { if (e.target.closest('.hm-tab')) return; if (e.key === 'ArrowRight') nav(cur + 1); if (e.key === 'ArrowLeft') nav(cur - 1); });
    // Điện thoại: ấn giữ = dừng để đọc, thả ra = chạy tiếp · vuốt ngang = chuyển slide
    let sx = null;
    hero.addEventListener('touchstart', (e) => { lastTouch = Date.now(); if (e.target.closest('button, a')) return; sx = e.touches[0].clientX; held = true; state(); }, { passive: true });
    hero.addEventListener('touchend', (e) => {
      lastTouch = Date.now(); held = false;
      const d = sx === null ? 0 : e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(d) > 45) nav(cur + (d < 0 ? 1 : -1)); else state();
    });
    hero.addEventListener('touchcancel', () => { held = false; sx = null; state(); });
    // Không bật menu “Tải ảnh / Lưu ảnh” khi ấn giữ trên hero
    hero.addEventListener('contextmenu', (e) => { if (Date.now() - lastTouch < 1500 || e.target.closest('.hm-ph')) e.preventDefault(); });
    go(0);
  });

  /* ── Năm bản quyền ở footer: theo đồng hồ của khách (trang được dựng sẵn, nên năm trong HTML có thể cũ sau Tết) ── */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ── Dải cam kết (dưới hero): chữ dài hơn ô (vd. bản tiếng Anh trên điện thoại) → thu nhỏ vừa đủ để hiện trọn 1 dòng, không bị cắt “…” ── */
  const fitTrust = () => $$('.hm-trust b, .hm-trust span').forEach((el) => {
    el.style.fontSize = '';
    const base = parseFloat(getComputedStyle(el).fontSize); let fs = base;
    while (el.scrollWidth > el.clientWidth + 0.5 && fs > base * 0.8) { fs -= 0.25; el.style.fontSize = fs + 'px'; }
  });
  if ($('.hm-trust')) { fitTrust(); document.fonts?.ready.then(fitTrust); let ft; addEventListener('resize', () => { clearTimeout(ft); ft = setTimeout(fitTrust, 150); }); }

  /* ── Dải danh mục trang chủ: 2 mũi tên cuộn theo trang; mờ ở đầu / cuối, ẩn nếu không cần cuộn ── */
  $$('[data-rail]').forEach((rail) => {
    const list = $('.hm-cats', rail), prev = $('[data-rail-prev]', rail), next = $('[data-rail-next]', rail);
    if (!list) return;
    const sync = () => {
      const max = list.scrollWidth - list.clientWidth;
      rail.classList.toggle('no-scroll', max < 4);
      if (prev) prev.disabled = list.scrollLeft < 4;
      if (next) next.disabled = list.scrollLeft > max - 4;
    };
    const page = (dir) => list.scrollBy({ left: dir * (list.clientWidth + parseFloat(getComputedStyle(list).columnGap || 0)), behavior: reduced ? 'auto' : 'smooth' });
    prev?.addEventListener('click', () => page(-1));
    next?.addEventListener('click', () => page(1));
    list.addEventListener('scroll', sync, { passive: true });
    addEventListener('resize', sync, { passive: true });
    sync();
  });

  /* ── Món đã lưu (localStorage, không cần tài khoản) ── */
  const SAVED_KEY = 'tg-saved';
  const getSaved = () => store.get(SAVED_KEY, []);
  function setSaved(list) { store.set(SAVED_KEY, list); syncSaved(); }
  function syncSaved() {
    const list = getSaved();
    $$('[data-saved-count]').forEach((el) => { el.textContent = list.length; el.hidden = !list.length; });
    $$('[data-save]').forEach((b) => {
      const on = list.some((x) => x.id === b.dataset.save);
      b.setAttribute('aria-pressed', String(on));
      b.setAttribute('aria-label', `${on ? I18N.unsaveThis : I18N.saveThis}: ${b.dataset.name}`);
      const tx = $('[data-save-text]', b);
      if (tx) tx.textContent = on ? tx.dataset.on : tx.dataset.off;
    });
  }
  function toggleSaved(item) {
    const list = getSaved();
    const i = list.findIndex((x) => x.id === item.id);
    if (i >= 0) { list.splice(i, 1); toast(I18N.unsavedToast); } else { list.unshift(item); toast(I18N.savedToast); }
    setSaved(list);
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-save]');
    if (!b) return;
    e.preventDefault();
    const card = b.closest('.prod');
    toggleSaved({ id: b.dataset.save, name: b.dataset.name, cfg: b.dataset.cfg, href: b.dataset.href || card?.querySelector('.stretch')?.getAttribute('href') || '' });
  });
  async function renderSaved() {
    const ul = $('[data-saved-list]');
    if (!ul) return;
    await loadSearch();
    // Món có sẵn: lấy tên & đường dẫn theo ngôn ngữ đang xem
    const list = getSaved().map((x) => {
      const p = searchData?.products.find((y) => y.id === x.id);
      return p ? { ...x, name: p.t, cfg: p.s, href: p.u } : x.id.startsWith('cfg-') ? { ...x, name: I18N.configItem } : x;
    });
    ul.innerHTML = '';
    list.forEach((x) => {
      const li = document.createElement('li');
      const a = document.createElement(x.href ? 'a' : 'span');
      if (x.href) a.href = x.href;
      a.className = 'nm';
      a.textContent = x.name;
      const cfg = document.createElement('span'); cfg.className = 'cfg'; cfg.textContent = x.cfg || '';
      const rm = document.createElement('button'); rm.type = 'button'; rm.textContent = I18N.remove;
      rm.addEventListener('click', () => { setSaved(getSaved().filter((y) => y.id !== x.id)); renderSaved(); });
      li.append(a, rm, cfg);
      ul.append(li);
    });
    $('[data-saved-empty]').hidden = list.length > 0;
    $('[data-saved-foot]').hidden = list.length === 0;
    const send = $('[data-saved-send]');
    if (send) send.href = send.href.split('?')[0].split('#')[0] + '?from=saved#dat-lich';
  }
  syncSaved();
  addEventListener('storage', (e) => e.key === SAVED_KEY && syncSaved());

  /* ── Chọn cấu hình (trang sản phẩm) ── */
  $$('[data-conf-form]').forEach((conf) => {
    const dataEl = $('[data-conf-data]', conf);
    const models = dataEl ? JSON.parse(dataEl.textContent) : [];
    const sizeOpts = $('[data-size-opts]', conf);
    const out = (k) => $(`[data-out="${k}"]`, conf);
    const val = (n) => $(`input[name="${n}"]:checked`, conf);
    const summary = () => {
      const color = val('color')?.dataset.label, karat = val('karat')?.value;
      const gold = karat ? (LANG === 'vi' ? `${color || 'Vàng'} ${karat}` : `${karat} ${(color || 'gold').toLowerCase()}`) : color;
      return [val('model')?.dataset.label || conf.dataset.model, gold, val('gem')?.dataset.label, val('size')?.value].filter(Boolean).join(' · ');
    };
    function update(e) {
      if (e?.target?.name === 'model' && sizeOpts) {
        const m = models.find((x) => x.slug === e.target.value);
        $('[data-size-label]', conf).textContent = m.sizeLabel;
        sizeOpts.innerHTML = '';
        m.sizes.forEach((sz) => {
          const l = document.createElement('label'); l.className = 'o';
          const i = document.createElement('input'); Object.assign(i, { type: 'radio', name: 'size', value: sz, checked: sz === m.def }); i.dataset.label = sz;
          const sp = document.createElement('span'); sp.textContent = sz;
          l.append(i, sp); sizeOpts.append(l);
        });
      }
      ['model', 'karat', 'color', 'gem', 'size'].forEach((k) => { const v = val(k); if (v && out(k)) out(k).textContent = v.dataset.label; });
      const s = summary();
      $('[data-conf-summary]', conf).textContent = s;
      const send = $('[data-conf-send]', conf);
      const base = send.dataset.base || send.getAttribute('href').split('#')[0];
      send.href = `${base}${base.includes('?') ? '&' : '?'}config=${encodeURIComponent(s)}#dat-lich`;
    }
    conf.addEventListener('change', update);
    conf.addEventListener('submit', (e) => e.preventDefault());
    $('[data-conf-save]', conf)?.addEventListener('click', () => {
      const s = summary();
      const list = getSaved();
      const id = 'cfg-' + norm(s).replace(/[^a-z0-9]+/g, '-');
      if (!list.some((x) => x.id === id)) { list.unshift({ id, name: I18N.configItem, cfg: s, href: '' }); setSaved(list); }
      toast(I18N.savedToast);
    });
    update();
  });

  /* ── Thư viện ảnh trang sản phẩm ── */
  $$('[data-gallery]').forEach((g) => {
    const slides = $$('[data-slide]', g), thumbs = $$('[data-thumb]', g);
    const show = (n) => {
      slides.forEach((s, i) => { s.hidden = i !== n; if (i !== n) $('video', s)?.pause(); });
      thumbs.forEach((t, i) => t.setAttribute('aria-pressed', String(i === n)));
    };
    thumbs.forEach((t, i) => t.addEventListener('click', () => show(i)));
    g.addEventListener('keydown', (e) => {
      if (!e.target.closest('[data-thumb]') || !/Arrow(Left|Right)/.test(e.key)) return;
      const cur = thumbs.indexOf(e.target.closest('[data-thumb]'));
      const n = (cur + (e.key === 'ArrowRight' ? 1 : -1) + thumbs.length) % thumbs.length;
      thumbs[n].focus(); show(n);
    });
  });

  /* ── Bộ sưu tập: lọc + sắp xếp (đồng bộ với URL để chia sẻ được) ── */
  const cat = $('[data-catalog]');
  if (cat) {
    const cards = $$('.prod', cat);
    const form = $('[data-filter-form]', cat);
    const panel = $('[data-filters]', cat);
    const openBtn = $('[data-filters-open]', cat);
    const sortSel = $('[data-sort]', cat);
    const catBtns = $$('[data-cat-btn]', cat);
    const empty = $('[data-filter-empty]', cat);
    const showBtn = $('.filters-foot [data-filters-close]', cat);
    let curCat = '';
    const checked = (n) => $$(`input[name="${n}"]:checked`, form).map((i) => i.value);
    const has = (card, attr, vals) => !vals.length || vals.some((v) => card.dataset[attr].split(' ').includes(v));
    function apply(push = true) {
      const k = checked('k'), g = checked('g'), c = checked('c'), custom = form.elements.custom?.checked;
      const list = cards.filter((x) => (!curCat || x.dataset.cat === curCat) && has(x, 'k', k) && has(x, 'g', g) && has(x, 'c', c) && (!custom || x.dataset.custom === '1'));
      const sorted = sortSel.value === 'new'
        ? [...list].sort((a, b) => (a.dataset.created < b.dataset.created ? 1 : -1))
        : [...list].sort((a, b) => a.dataset.featured - b.dataset.featured);
      cards.forEach((x) => { x.hidden = !list.includes(x); x.style.order = sorted.indexOf(x); });
      $$('[data-count]', cat).forEach((el) => { el.textContent = list.length; });
      if (showBtn) showBtn.textContent = showBtn.dataset.showLabel.replace('{n}', list.length);
      empty.hidden = list.length > 0;
      catBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.catBtn === curCat)));
      const nf = k.length + g.length + c.length + (custom ? 1 : 0);
      const fc = $('[data-filter-count]', cat); fc.hidden = !nf; fc.textContent = nf;
      if (push) {
        const q = new URLSearchParams();
        if (curCat) q.set('loai', curCat);
        if (k.length) q.set('tuoi', k.join(','));
        if (g.length) q.set('da', g.join(','));
        if (c.length) q.set('mau', c.join(','));
        if (custom) q.set('custom', '1');
        if (sortSel.value !== 'featured') q.set('sx', sortSel.value);
        history.replaceState(null, '', location.pathname + (q.toString() ? `?${q}` : ''));
      }
    }
    // Khôi phục từ URL (?loai=…&tuoi=…) hoặc #nhan-nam (link ở chân trang)
    const qs = new URLSearchParams(location.search);
    curCat = qs.get('loai') || decodeURIComponent(location.hash.slice(1)) || '';
    if (!catBtns.some((b) => b.dataset.catBtn === curCat)) curCat = '';
    [['tuoi', 'k'], ['da', 'g'], ['mau', 'c']].forEach(([q, n]) => (qs.get(q) || '').split(',').forEach((v) => { const i = $(`input[name="${n}"][value="${CSS.escape(v)}"]`, form); if (i) i.checked = true; }));
    if (qs.get('custom') === '1' && form.elements.custom) form.elements.custom.checked = true;
    if (qs.get('sx') === 'new') sortSel.value = 'new';
    apply(false);

    form.addEventListener('change', () => apply());
    sortSel.addEventListener('change', () => apply());
    catBtns.forEach((b) => b.addEventListener('click', () => { curCat = b.dataset.catBtn; apply(); }));
    $$('[data-filter-reset]', cat).forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); form.reset(); curCat = ''; apply(); }));
    addEventListener('hashchange', () => { const h = decodeURIComponent(location.hash.slice(1)); if (catBtns.some((b) => b.dataset.catBtn === h)) { curCat = h; apply(); } });

    // Bộ lọc dạng tấm trượt trên mobile / tablet
    const setPanel = (open) => {
      panel.classList.toggle('open', open);
      openBtn.setAttribute('aria-expanded', String(open));
      document.documentElement.style.overflow = open ? 'hidden' : '';
      if (open) setTimeout(() => $('input', panel)?.focus(), 60); else openBtn.focus();
    };
    openBtn.addEventListener('click', () => setPanel(true));
    $$('[data-filters-close]', panel).forEach((b) => b.addEventListener('click', () => setPanel(false)));
    panel.addEventListener('keydown', (e) => {
      if (!panel.classList.contains('open')) return;
      if (e.key === 'Escape') return setPanel(false);
      if (e.key !== 'Tab') return;
      const f = $$('button, input, select, a[href]', panel).filter((x) => x.offsetParent !== null);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  }

  /* ── Tìm kiếm ── */
  let searchData = null;
  async function loadSearch() {
    if (searchData) return;
    try { searchData = await (await fetch(`/data/search-${LANG}.json`)).json(); runSearch(); } catch { searchData = { products: [], pages: [] }; }
  }
  const sInput = $('[data-search-input]');
  const sRes = $('[data-search-results]');
  function runSearch() {
    if (!sInput || !searchData) return;
    const q = norm(sInput.value.trim());
    sRes.innerHTML = '';
    if (!q) return;
    const words = q.split(/\s+/);
    const hit = (x) => words.every((w) => norm(`${x.t} ${x.s || ''} ${x.k || ''}`).includes(w));
    const prods = searchData.products.filter(hit).slice(0, 8);
    const pages = searchData.pages.filter(hit).slice(0, 5);
    const group = (title, arr) => {
      if (!arr.length) return;
      const h = document.createElement('h3'); h.className = 'kick'; h.textContent = title; sRes.append(h);
      arr.forEach((x) => {
        const a = document.createElement('a'); a.className = 'res'; a.href = x.u;
        const b = document.createElement('b'); b.textContent = x.t;
        const s = document.createElement('span'); s.textContent = x.s || '';
        a.append(b, s); sRes.append(a);
      });
    };
    group(I18N.searchProducts, prods);
    group(I18N.searchPages, pages);
    if (!prods.length && !pages.length) sRes.append($('#tpl-search-empty').content.cloneNode(true));
  }
  sInput?.addEventListener('input', runSearch);
  $('[data-search-form]')?.addEventListener('submit', (e) => { e.preventDefault(); $('.search-res a.res')?.click(); });
  $$('[data-q]').forEach((b) => b.addEventListener('click', () => { sInput.value = b.dataset.q; runSearch(); sInput.focus(); }));

  /* ── Chat nổi ── */
  const chatBtn = $('[data-chat-btn]');
  const chatPanel = $('#chat-panel');
  if (chatBtn) {
    const setChat = (open) => { chatPanel.hidden = !open; chatBtn.setAttribute('aria-expanded', String(open)); };
    chatBtn.addEventListener('click', () => setChat(chatPanel.hidden));
    document.addEventListener('click', (e) => { if (!chatPanel.hidden && !e.target.closest('[data-chat]')) setChat(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !chatPanel.hidden) { setChat(false); chatBtn.focus(); } });
  }

  /* ── Ngôn ngữ: ghi nhớ lựa chọn + gợi ý nhẹ nhàng (không tự chuyển trang) ── */
  $$('[data-lang-link]').forEach((a) => a.addEventListener('click', () => store.set('tg-lang', a.dataset.langLink)));
  (() => {
    if (store.get('tg-lang', null) || !CFG.other) return;
    try { if (sessionStorage.getItem('tg-lang-hint')) return; sessionStorage.setItem('tg-lang-hint', '1'); } catch { return; }
    const pref = (navigator.languages || [navigator.language || '']).map((l) => l.toLowerCase());
    const wantsVi = pref[0]?.startsWith('vi');
    const suggest = (LANG === 'vi' && !wantsVi && pref.some((l) => l.startsWith('en'))) || (LANG === 'en' && wantsVi);
    if (!suggest) return;
    setTimeout(() => {
      toast(`<span lang="${CFG.other.lang}">${I18N.otherToast}</span><a href="${CFG.other.href}" lang="${CFG.other.lang}" data-lang-link="${CFG.other.lang}">${I18N.otherGo}</a><button type="button" class="x" aria-label="${I18N.close}"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>`, 0);
      toastEl.querySelector('a').addEventListener('click', () => store.set('tg-lang', CFG.other.lang));
      toastEl.querySelector('.x').addEventListener('click', () => { store.set('tg-lang', LANG); toastEl.classList.remove('show'); });
    }, 1600);
  })();

  /* ── Form Đặt lịch tư vấn ── */
  // ── Bài viết: tiêu đề mục xuống dòng → giãn nhẹ khoảng cách chữ của các dòng trên cho đầy chiều ngang (dòng cuối giữ nguyên) ──
  // Dòng cuối luôn có ít nhất 2 chữ (hai chữ cuối được dính bằng &nbsp; lúc dựng trang) nên dòng trên có thể hụt.
  // Giãn có giới hạn (LS, WS) để chữ không bị loãng; dòng hụt nhiều chỉ giãn tới giới hạn, không ép kín.
  const fitHeads = $$('.prose h2, .prose h3').map((el) => [el, el.innerHTML]);
  if (fitHeads.length) {
    const LS = 0.028, WS = 0.22; // em — tối đa giữa các chữ cái · giữa các từ
    const tops = (els) => els.map((w) => Math.round(w.getBoundingClientRect().top));
    const fit = () => fitHeads.forEach(([h, html]) => {
      h.innerHTML = html;
      const texts = []; const tw = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
      for (let n = tw.nextNode(); n; n = tw.nextNode()) texts.push(n);
      // chữ cuối đủ dài (từ 9 chữ cái, vd. “circumference”) đứng một mình ở dòng cuối vẫn cân → bỏ dính với chữ trước để dòng trên không bị hụt nhiều
      const tail = h.textContent.match(/\u00a0([^\s\u00a0]+)\s*$/);
      if (tail && tail[1].replace(/[^\p{L}\p{N}]/gu, '').length >= 9) {
        const tn = [...texts].reverse().find((x) => x.textContent.includes('\u00a0'));
        const i = tn.textContent.lastIndexOf('\u00a0');
        tn.textContent = `${tn.textContent.slice(0, i)} ${tn.textContent.slice(i + 1)}`;
      }
      texts.forEach((node) => { // tách từng từ (hw) và khoảng trắng (hs) thành span để đo và giãn theo dòng
        const frag = document.createDocumentFragment();
        node.textContent.split(/([ \t\n]+)/).filter(Boolean).forEach((part) => {
          const s = document.createElement('span');
          s.className = /^[ \t\n]+$/.test(part) ? 'hs' : 'hw';
          s.textContent = part;
          frag.append(s);
        });
        node.replaceWith(frag);
      });
      const all = $$('.hw,.hs', h); const words = all.filter((s) => s.className === 'hw');
      const lines = [];
      words.forEach((w, i) => { const top = tops([w])[0]; const l = lines.at(-1); if (l && Math.abs(l.top - top) < 4) l.words.push(w); else lines.push({ top, words: [w] }); });
      if (lines.length < 2) { h.innerHTML = html; return; }
      const cw = h.getBoundingClientRect().width; const fs = parseFloat(getComputedStyle(h).fontSize);
      lines.slice(0, -1).forEach((l) => {
        const first = l.words[0], last = l.words.at(-1);
        const need = cw - (last.getBoundingClientRect().right - first.getBoundingClientRect().left) - 1.5;
        const els = all.slice(all.indexOf(first), all.indexOf(last) + 1);
        const chars = l.words.reduce((n, w) => n + w.textContent.length, 0);
        const gaps = els.filter((s) => s.className === 'hs').length + l.words.reduce((n, w) => n + (w.textContent.match(/ /g) || []).length, 0);
        if (need > 0.5) {
          const t = Math.min(1, need / ((LS * chars + WS * gaps) * fs));
          els.forEach((s) => { s.style.wordSpacing = `${(t * WS).toFixed(4)}em`; if (s.className === 'hw') s.style.letterSpacing = `${(t * LS).toFixed(4)}em`; });
        }
        last.after(document.createElement('br')); // khoá chỗ xuống dòng đã đo
      });
      if (new Set(tops(words)).size > lines.length) h.innerHTML = html; // giãn làm rớt thêm dòng → trả về như cũ
    });
    // Đo lại khi phông chữ thật tải xong (lúc đầu trang còn hiện phông dự phòng, bề rộng chữ khác đi) và khi đổi bề rộng màn hình
    let fitW = 0, fitT;
    const refit = (force) => { if (force || innerWidth !== fitW) { fitW = innerWidth; fit(); } };
    const soon = () => { clearTimeout(fitT); fitT = setTimeout(() => refit(true), 60); };
    if (document.fonts) { document.fonts.ready.then(soon); document.fonts.addEventListener('loadingdone', soon); }
    addEventListener('load', soon);
    addEventListener('resize', () => { clearTimeout(fitT); fitT = setTimeout(() => refit(false), 150); });
  }

  // ── Video trang Xưởng: tự chạy (không tiếng) khi vào khung nhìn, dừng khi ra khỏi; nút tạm dừng / phát ──
  // Giảm chuyển động hoặc Tiết kiệm dữ liệu → không tự chạy (hiện ảnh bìa + nút phát).
  $$('[data-film]').forEach((box) => {
    const v = $('video', box);
    const btn = $('[data-film-toggle]', box);
    if (!v) return;
    let userPaused = reduced || !!navigator.connection?.saveData;
    const sync = () => {
      box.classList.toggle('playing', !v.paused);
      btn?.setAttribute('aria-label', v.paused ? btn.dataset.play : btn.dataset.pause);
    };
    const play = () => v.play().catch(() => { /* trình duyệt chặn tự phát (tiết kiệm pin…) — khách bấm nút */ });
    v.addEventListener('playing', () => box.classList.add('on'));
    ['play', 'pause'].forEach((e) => v.addEventListener(e, sync));
    btn?.addEventListener('click', () => { userPaused = !v.paused; if (v.paused) play(); else v.pause(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { if (e.isIntersecting && !userPaused) play(); else if (!e.isIntersecting) v.pause(); }, { threshold: 0.35 }).observe(box);
    } else if (!userPaused) play();
  });

  const form = $('[data-booking]');
  if (form) {
    const ok = $('[data-booking-ok]');
    const submit = $('[data-submit]', form);
    const submitText = submit.textContent;
    const fileInput = $('#bf-files');
    const fileList = $('[data-file-list]');
    const formErr = $('[data-form-err]', form);
    const maxFiles = CFG.maxFiles || 3, maxMB = CFG.maxFileMB || 5;
    const idea = form.dataset.kind === 'idea'; // form “Gửi ý tưởng” (trang Custom): ảnh mẫu + mô tả, không số điện thoại, gửi xong mở Zalo
    let picked = []; // ảnh đã chọn ở form ý tưởng (chọn thêm dần, bỏ từng ảnh)
    const date = $('#bf-date');
    if (date) date.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    // Điền sẵn từ đường dẫn: ?piece= · ?config= · ?interest= · ?from=saved
    const qs = new URLSearchParams(location.search);
    const note = $('#bf-note');
    const lines = [];
    const piece = qs.get('piece');
    const pieceLine = (p) => `${form.dataset.lblPiece}: ${p ? `${p.t} (${p.s})` : piece}`;
    if (piece) lines.push(pieceLine(null));
    if (qs.get('config')) lines.push(`${form.dataset.lblConfig}: ${qs.get('config').slice(0, 900)}`);
    if (qs.get('from') === 'saved') {
      const list = getSaved();
      if (list.length) lines.push(`${form.dataset.lblSaved}:\n${list.map((x) => `– ${x.name}${x.cfg ? ` (${x.cfg})` : ''}`).join('\n')}`);
    }
    if (lines.length) note.value = lines.join('\n') + '\n';
    if (piece) loadSearch().then(() => {
      const p = searchData?.products.find((x) => x.id === piece);
      if (p) note.value = note.value.replace(pieceLine(null), pieceLine(p));
    });
    (qs.get('interest') || '').split(',').forEach((v) => { const c = $(`input[name="interest"][value="${CSS.escape(v)}"]`, form); if (c) c.checked = true; });
    form.elements.source.value = [piece && `piece:${piece}`, qs.get('config') && 'configurator', qs.get('from')].filter(Boolean).join(',') || document.referrer.replace(location.origin, '') || 'direct';
    if (location.hash === '#dat-lich' && lines.length) setTimeout(() => $('#bf-name').focus({ preventScroll: true }), 400);

    const phoneOk = (v) => {
      const s = v.replace(/[\s.\-()]/g, '');
      return /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/.test(s) || /^(?:\+?84|0)2\d{9}$/.test(s) || /^\+(?!84)\d{8,15}$/.test(s);
    };
    const show = (el, errId, bad) => {
      el.setAttribute('aria-invalid', String(bad));
      $('#' + errId).hidden = !bad;
      return !bad;
    };
    function validate() {
      const el = form.elements; // form ý tưởng không có ô số điện thoại / ô đồng ý
      const a = show(el.name, 'bf-name-err', el.name.value.trim().length < 2);
      const b = !el.phone || show(el.phone, 'bf-phone-err', !phoneOk(el.phone.value));
      const c = !el.consent || show(el.consent, 'bf-consent-err', !el.consent.checked);
      const d = checkFiles();
      const e = !idea || show(note, 'bf-note-err', !picked.length && note.value.trim().length < 3); // cần ít nhất 1 ảnh mẫu hoặc vài dòng mô tả
      const firstBad = [!e && note, !a && el.name, !b && el.phone, !c && el.consent, !d && fileInput].find(Boolean);
      firstBad?.focus();
      return a && b && c && d && e;
    }
    function checkFiles() {
      if (idea) return true; // form ý tưởng kiểm ảnh ngay lúc chọn (addPicked)
      const files = [...(fileInput?.files || [])];
      fileList.innerHTML = '';
      files.forEach((f) => {
        const li = document.createElement('li');
        li.innerHTML = '<span></span><span></span>';
        li.firstChild.textContent = f.name;
        li.lastChild.textContent = `${(f.size / 1048576).toFixed(1)} MB`;
        fileList.append(li);
      });
      const bad = files.length > maxFiles || files.some((f) => !/^image\//.test(f.type)); // ảnh quá nặng không phải lỗi — tự nén khi gửi (fitImage)
      const err = $('#bf-files-err');
      err.textContent = form.dataset.msgFile;
      err.hidden = !bad;
      return !bad;
    }
    // Form ý tưởng: ảnh xem trước dạng ô vuông, chọn thêm nhiều lần, bỏ từng ảnh
    function drawThumbs() {
      $$('img', fileList).forEach((im) => URL.revokeObjectURL(im.src));
      fileList.innerHTML = '';
      picked.forEach((f) => {
        const li = document.createElement('li');
        const im = new Image();
        im.alt = f.name;
        im.onerror = () => { im.remove(); li.dataset.name = f.name; }; // định dạng trình duyệt không xem trước được (HEIC…)
        im.src = URL.createObjectURL(f);
        const x = document.createElement('button');
        x.type = 'button';
        x.setAttribute('aria-label', `${form.dataset.msgRemove}: ${f.name}`);
        x.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';
        x.addEventListener('click', () => { picked = picked.filter((p) => p !== f); drawThumbs(); $('#bf-files-err').hidden = true; });
        li.append(im, x);
        fileList.append(li);
      });
    }
    function addPicked() {
      const key = (f) => `${f.name}|${f.size}|${f.lastModified}`;
      let bad = false;
      [...fileInput.files].forEach((f) => {
        if (picked.some((p) => key(p) === key(f))) return;
        if (!/^image\//.test(f.type) || picked.length >= maxFiles) { bad = true; return; }
        picked.push(f);
      });
      fileInput.value = ''; // danh sách thật nằm ở picked — cho phép chọn lại đúng tệp vừa bỏ
      drawThumbs();
      const err = $('#bf-files-err');
      err.textContent = form.dataset.msgFile;
      err.hidden = !bad;
      if (picked.length) show(note, 'bf-note-err', false);
    }
    if (idea) note.addEventListener('input', () => { if (note.value.trim().length >= 3) show(note, 'bf-note-err', false); });

    // Form ý tưởng: lưu xong thì soạn sẵn tin nhắn (tên, mô tả, mã ý tưởng) để khách dán vào Zalo T Gold.
    // Link zalo.me không nhận sẵn nội dung hay ảnh — ảnh + mô tả nằm trong /admin → Lịch hẹn theo mã.
    const ideaL = idea ? JSON.parse(ok.dataset.idea || '{}') : {};
    let ideaMsg = '';
    function ideaSummary(code) {
      const kinds = $$('input[name="interest"]:checked', form).map((c) => c.dataset.label).join(', ');
      const text = note.value.trim();
      const rows = [ideaL.head, code && `${ideaL.code}: ${code}`, `${ideaL.name}: ${form.elements.name.value.trim()}`, kinds && `${ideaL.kind}: ${kinds}`, text && `${ideaL.desc}: ${text}`, picked.length && ideaL.photos.replace('{n}', picked.length)];
      return { code: code || '', msg: rows.filter(Boolean).join('\n').replace(/ /g, ' ') };
    }
    function copyNow(text) { // đồng bộ — gọi ngay trong lúc khách vừa bấm (Safari chỉ cho sao chép khi có thao tác)
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.readOnly = true;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.append(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      let done = false;
      try { done = document.execCommand('copy'); } catch { /* trình duyệt không hỗ trợ */ }
      ta.remove();
      return done;
    }
    const copyText = async (text) => { try { await navigator.clipboard.writeText(text); return true; } catch { return copyNow(text); } };
    const ideaStatus = (done) => { const s = $('[data-idea-status]', ok); if (s) s.textContent = done ? ideaL.copied : ideaL.copyFail; };
    async function ideaDone({ code, msg }) {
      ideaMsg = msg;
      $('[data-idea-code-row]', ok).hidden = !code;
      $('[data-idea-code]', ok).textContent = code;
      const pre = $('[data-idea-msg]', ok);
      const go = $('[data-idea-zalo]', ok);
      if (!pre || !go) return; // chưa cấu hình Zalo: chỉ hiện mã ý tưởng
      pre.textContent = msg;
      const done = await copyText(msg);
      ideaStatus(done);
      // Tự mở Zalo khi trình duyệt còn cho phép (ngay sau thao tác bấm gửi); bị chặn thì khách bấm nút “Mở Zalo”
      if (done) { const w = window.open(go.href, '_blank'); if (w) w.opener = null; }
    }
    $('[data-idea-zalo]', ok)?.addEventListener('click', () => {
      if (!ideaMsg) return;
      if (copyNow(ideaMsg)) ideaStatus(true); else copyText(ideaMsg).then(ideaStatus);
    });
    $('[data-idea-copy]', ok)?.addEventListener('click', async () => ideaStatus(await copyText(ideaMsg)));

    // Ảnh nặng hơn giới hạn: tự thu nhỏ + nén JPEG ngay trước khi gửi, không báo gì cho khách.
    // Trình duyệt không đọc được định dạng (HEIC trên Chrome…) → gửi nguyên bản, máy chủ nén tiếp.
    async function fitImage(f) {
      const limit = maxMB * 1048576;
      if (f.size <= limit) return f;
      const src = URL.createObjectURL(f);
      try {
        const im = new Image();
        im.src = src;
        await im.decode();
        const long = Math.max(im.naturalWidth, im.naturalHeight);
        for (const [edge, q] of [[2560, 0.86], [2048, 0.82], [1600, 0.78], [1280, 0.72]]) {
          const k = Math.min(1, edge / long);
          const c = document.createElement('canvas');
          c.width = Math.round(im.naturalWidth * k);
          c.height = Math.round(im.naturalHeight * k);
          const g = c.getContext('2d');
          g.fillStyle = '#fff'; // PNG nền trong suốt → nền trắng khi chuyển sang JPEG
          g.fillRect(0, 0, c.width, c.height);
          g.drawImage(im, 0, 0, c.width, c.height);
          const blob = await new Promise((r) => c.toBlob(r, 'image/jpeg', q));
          if (blob && blob.size <= limit) return new File([blob], f.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg', lastModified: f.lastModified });
        }
      } catch { /* không giải mã được ảnh */ } finally { URL.revokeObjectURL(src); }
      return f;
    }

    fileInput?.addEventListener('change', idea ? addPicked : checkFiles);
    ['name', 'phone'].forEach((n) => form.elements[n]?.addEventListener('blur', () => {
      if (form.elements[n].getAttribute('aria-invalid') === 'true') validate();
    }));
    form.elements.consent?.addEventListener('change', () => form.elements.consent.checked && show(form.elements.consent, 'bf-consent-err', false));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      formErr.hidden = true;
      if (!validate()) return;
      if (form.elements.website.value) return; // bẫy spam
      submit.disabled = true;
      submit.textContent = form.dataset.msgSending;
      let saved = {};
      try {
        if (CFG.endpoint) {
          const body = new FormData(form);
          body.delete('files');
          for (const f of (idea ? picked : [...(fileInput?.files || [])])) { const g = await fitImage(f); body.append('files', g, g.name); }
          const res = await fetch(CFG.endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error(String(res.status));
          saved = await res.json().catch(() => ({}));
        } else {
          await new Promise((r) => setTimeout(r, 700)); // chưa cấu hình endpoint: giả lập gửi thành công (demo)
          console.info('[T Gold] form.endpoint trống — đang giả lập gửi thành công.');
        }
        const sent = idea && ideaSummary(saved.code);
        form.hidden = true;
        ok.hidden = false;
        ok.focus();
        form.reset();
        fileList.innerHTML = '';
        picked = [];
        if (sent) ideaDone(sent);
      } catch {
        formErr.textContent = form.dataset.msgErr;
        formErr.hidden = false;
      } finally {
        submit.disabled = false;
        submit.textContent = submitText;
      }
    });
    $('[data-booking-again]')?.addEventListener('click', () => { ok.hidden = true; form.hidden = false; (idea ? fileInput : form.elements.name).focus(); });
  }
})();

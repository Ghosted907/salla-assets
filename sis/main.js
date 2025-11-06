
(() => {
  // الهدف والحشو
  const TARGET = 'section.s-block.s-block--fixed-banner.wide-placeholder';
  const IMAGE_URL = 'https://ghosted907.github.io/salla-assets/sis/1.png';
  const WA_PHONE  = '9665XXXXXXXXX'; // بدون +
  const WA_TEXT   = encodeURIComponent('أرغب بإضافة رأيي حول المنتج');
  const GALLERY = [
    'https://ghosted907.github.io/salla-assets/sis/review-0.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-1.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-2.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-3.jpg',
  ];

  // نمط
  const style = document.createElement('style');
  style.textContent = `
    ${TARGET}{ position:relative; }
    .jf-container{ position:relative; display:block; width:100%; max-width:100%; margin:0 auto; }
    .jf-img{ display:block; width:100%; height:auto; border-radius:40px; }

    .pin{
      position:absolute; transform:translate(-50%,-50%);
      width:75px; height:50px; background:transparent!important; border:0; box-shadow:none!important;
      border-radius:9999px; display:block; cursor:pointer; z-index:3; appearance:none; -webkit-appearance:none;
      padding:0; margin:0;
    }
    /* حرّك المواضع بحسب صورتك */
    .pin-add{ top:70.5%; left:4.8%; }     /* واتساب أسفل-يسار */
    .pin-gallery{ top:25.5%; left:4.8%; } /* معرض أعلى-يسار */

    dialog.gallery-modal{ border:0; padding:0; background:transparent; }
    dialog.gallery-modal::backdrop{ background:rgba(0,0,0,.5); }
    .gal-card{ width:min(96vw,860px); background:#efeae2; border-radius:20px; padding:12px; box-shadow:0 12px 40px rgba(0,0,0,.25); }
    .gal-head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
    .gal-close{ background:none; border:0; font-size:20px; cursor:pointer; }
    .gal-viewport{ position:relative; overflow:hidden; border-radius:14px; }
    .gal-viewport img{ display:block; width:100%; height:auto; }
    .gal-nav{ display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:8px; }
    .gal-btn{ background:#8d6a39; color:#111; border:0; border-radius:12px; padding:10px 14px; cursor:pointer; }
    .gal-dots{ display:flex; gap:6px; justify-content:center; align-items:center; margin-top:6px; flex-wrap:wrap; }
    .gal-dot{ width:10px; height:10px; border-radius:9999px; background:#bfb7ae; border:0; }
    .gal-dot[aria-current="true"]{ background:#8d6a39; }
  `;
  document.head.appendChild(style);

  // بناء الحاوية داخل نفس السكشن
  function mount(){
    const sec = document.querySelector(TARGET);
    if(!sec) return false;
    if (sec.querySelector('.jf-container')) return true;

    const box = document.createElement('div');
    box.className = 'jf-container';

    const img = document.createElement('img');
    img.className = 'jf-img';
    img.src = IMAGE_URL;
    img.alt = 'آراء العملاء';
    box.appendChild(img);

    const add = document.createElement('a');
    add.className = 'pin pin-add';
    add.href = `https://wa.me/${WA_PHONE}?text=${WA_TEXT}`;
    add.target = '_blank'; add.rel = 'noopener';
    add.setAttribute('aria-label','فتح محادثة واتساب لإضافة رأي');
    box.appendChild(add);

    const galBtn = document.createElement('button');
    galBtn.type = 'button';
    galBtn.className = 'pin pin-gallery';
    galBtn.setAttribute('aria-label','استعراض تجارب العملاء');
    galBtn.addEventListener('click', openGallery);
    box.appendChild(galBtn);

    sec.appendChild(box);

    // مودال المعرض مرة واحدة
    if (!document.getElementById('gallery-modal')){
      const dlg = document.createElement('dialog');
      dlg.id = 'gallery-modal'; dlg.className = 'gallery-modal';
      dlg.innerHTML = `
        <div class="gal-card" dir="rtl">
          <div class="gal-head">
            <strong>تجارب العملاء</strong>
            <button class="gal-close" type="button" aria-label="إغلاق">✕</button>
          </div>
          <div class="gal-viewport">
            <img id="gal-img" src="" alt="صورة تجربة عميل">
          </div>
          <div class="gal-nav">
            <button id="gal-prev" class="gal-btn" type="button">السابق ‹</button>
            <div class="gal-dots" id="gal-dots"></div>
            <button id="gal-next" class="gal-btn" type="button">› التالي</button>
          </div>
        </div>`;
      document.body.appendChild(dlg);
      dlg.addEventListener('click', e => { if(e.target===dlg) dlg.close(); });
      dlg.querySelector('.gal-close').addEventListener('click', ()=> dlg.close());
      dlg.addEventListener('keydown', e => {
        if(e.key==='ArrowRight') document.getElementById('gal-next')?.click();
        if(e.key==='ArrowLeft')  document.getElementById('gal-prev')?.click();
      });
      wireGalleryNav();
    }
    return true;
  }

  // منطق المعرض
  let galIndex = 0;
  function renderDots(){
    const dotsWrap = document.getElementById('gal-dots'); if(!dotsWrap) return;
    dotsWrap.innerHTML = '';
    GALLERY.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'gal-dot'; b.type = 'button';
      if(i===galIndex) b.setAttribute('aria-current','true');
      b.addEventListener('click', ()=>{ galIndex=i; showSlide(); });
      dotsWrap.appendChild(b);
    });
  }
  function showSlide(){
    const el = document.getElementById('gal-img'); if(!el) return;
    el.src = GALLERY[galIndex] || '';
    renderDots();
  }
  function openGallery(){
    if(!GALLERY.length) return;
    galIndex = 0; showSlide();
    document.getElementById('gallery-modal').showModal();
  }
  function wireGalleryNav(){
    const prev = document.getElementById('gal-prev');
    const next = document.getElementById('gal-next');
    if(!prev || !next) return;
    prev.addEventListener('click', ()=>{ galIndex = (galIndex - 1 + GALLERY.length) % GALLERY.length; showSlide(); });
    next.addEventListener('click', ()=>{ galIndex = (galIndex + 1) % GALLERY.length; showSlide(); });
  }

  // انتظار توفّر السكشن
  function tryMount(t=0){
    if (mount()) return;
    if (t<20) setTimeout(()=>tryMount(t+1),300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryMount);
  else tryMount();
})();

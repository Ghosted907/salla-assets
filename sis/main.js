
(() => {
 
  const IMAGE_URL = 'https://ghosted907.github.io/salla-assets/sis/1.png';
  const WA_PHONE  = '966557042544'; 
  const WA_TEXT   = encodeURIComponent('أرغب بإضافة رأيي حول المنتج');
  const GALLERY = [
    'https://ghosted907.github.io/salla-assets/sis/review-0.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-1.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-2.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-3.jpg',
  ];

  // CSS
  const css = `
    .jf-container{position:relative;display:block;width:100%;max-width:1200px;margin:12px auto;}
    .jf-img{display:block;width:100%;height:auto;border-radius:40px}
    .pin{position:absolute;transform:translate(-50%,-50%);width:75px;height:50px;
         background:transparent!important;border:0;box-shadow:none!important;border-radius:9999px;
         display:block;cursor:pointer;z-index:3;appearance:none;-webkit-appearance:none;padding:0;margin:0}

    .pin-add{top:70.5%;left:4.8%}
    .pin-gallery{top:25.5%;left:4.8%}

    /* Modal */
    dialog.gallery-modal{ border:0; padding:0; background:transparent; }
    dialog.gallery-modal[open]{ display:flex; align-items:center; justify-content:center; }
    dialog.gallery-modal::backdrop{ background:rgba(0,0,0,.6); }

    /* البطاقة تملأ الشاشة على الجوال وتقيد على الديسكتوب */
    .gal-card{
      width:clamp(320px, 96vw, 860px);
      max-height:92vh;
      background:#efeae2;
      border-radius:20px;
      padding:12px;
      box-shadow:0 12px 40px rgba(0,0,0,.25);
      display:flex;
      flex-direction:column;
    }
    @media (max-width:640px){
      .gal-card{
        width:100vw;
        height:100dvh;
        max-height:none;
        border-radius:0;
        padding:12px;
      }
    }

    .gal-head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
    .gal-close{ background:none; border:0; font-size:20px; cursor:pointer; }

    /* مساحة العرض تتمدد وتقص الزائد بدون تشويه */
    .gal-viewport{
      position:relative;
      flex:1;
      min-height:0;
      overflow:hidden;
      border-radius:14px;
    }
    .gal-viewport img{
      width:100%;
      height:100%;
      object-fit:contain;
    }

    /* أزرار وتنقيط */
    .gal-nav{ display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:8px; }
    .gal-btn{ background:#8d6a39; color:#111; border:0; border-radius:12px; padding:10px 14px; cursor:pointer; }
    .gal-dots{ display:flex; gap:6px; justify-content:center; align-items:center; margin-top:6px; flex-wrap:wrap; }
    .gal-dot{ width:10px; height:10px; border-radius:9999px; background:#bfb7ae; border:0; }
    .gal-dot[aria-current="true"]{ background:#8d6a39; }
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

 
  function buildBox(){
    const box = document.createElement('div');
    box.className = 'jf-container';
    box.innerHTML = `
      <img class="jf-img" src="${IMAGE_URL}" alt="آراء العملاء">
      <a class="pin pin-add" href="https://wa.me/${WA_PHONE}?text=${WA_TEXT}" target="_blank" rel="noopener" aria-label="واتساب لإضافة رأي"></a>
      <button class="pin pin-gallery" type="button" aria-label="استعراض تجارب العملاء"></button>
    `;
    box.querySelector('.pin-gallery').addEventListener('click', openGallery);
    return box;
  }


  function mount(){
    // Prefer mounting after the fixed banner with the given target URL
    const banner = Array.from(document.querySelectorAll('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden'))
      .find(a => {
        const href = a.getAttribute('href') || a.href || '';
        return href.includes('jejetallow.com/redirect/products/1879463664');
      });
    if (banner){
      if (document.querySelector('.jf-container')) return true;
      banner.insertAdjacentElement('afterend', buildBox());
      ensureGalleryModal();
      return true;
    }

    // Fallback: before footer if banner is not present
    const footer = document.querySelector('footer.store-footer');
    if (!footer) return false;
    if (document.querySelector('.jf-container')) return true;
    footer.parentNode.insertBefore(buildBox(), footer);
    ensureGalleryModal();
    return true;
  }

  
  function ensureGalleryModal(){
    if (document.getElementById('gallery-modal')) return;
    const dlg = document.createElement('dialog');
    dlg.id = 'gallery-modal'; dlg.className = 'gallery-modal';
    dlg.innerHTML = `
      <div class="gal-card" dir="rtl">
        <div class="gal-head">
          <strong>تجارب العملاء</strong>
          <button class="gal-close" type="button" aria-label="إغلاق">✕</button>
        </div>
        <div class="gal-viewport"><img id="gal-img" src="" alt="صورة تجربة عميل"></div>
        <div class="gal-nav">
          <button id="gal-prev" class="gal-btn" type="button">السابق ‹</button>
          <div class="gal-dots" id="gal-dots"></div>
          <button id="gal-next" class="gal-btn" type="button">› التالي</button>
        </div>
      </div>`;
    document.body.appendChild(dlg);
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.querySelector('.gal-close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') document.getElementById('gal-next')?.click();
      if (e.key === 'ArrowLeft')  document.getElementById('gal-prev')?.click();
    });
    // unlock on close/cancel
    dlg.addEventListener('close', unlockScroll);
    dlg.addEventListener('cancel', unlockScroll);
    wireGalleryNav();
  }

  let galIndex = 0;
  function renderDots(){
    const wrap = document.getElementById('gal-dots'); if(!wrap) return;
    wrap.innerHTML = '';
    GALLERY.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'gal-dot'; b.type = 'button';
      if (i === galIndex) b.setAttribute('aria-current','true');
      b.addEventListener('click', () => { galIndex = i; showSlide(); });
      wrap.appendChild(b);
    });
  }
  function showSlide(){
    const img = document.getElementById('gal-img'); if(!img) return;
    img.src = GALLERY[galIndex] || '';
    renderDots();
  }
  // Scroll lock helpers
  function lockScroll(){
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll(){
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
  function openGallery(){
    if (!GALLERY.length) return;
    galIndex = 0; showSlide();
    const dlg = document.getElementById('gallery-modal');
    if (!dlg) return;
    dlg.showModal();
    lockScroll();
  }
  function wireGalleryNav(){
    const prev = document.getElementById('gal-prev');
    const next = document.getElementById('gal-next');
    if(!prev || !next) return;
    prev.addEventListener('click', () => { galIndex = (galIndex - 1 + GALLERY.length) % GALLERY.length; showSlide(); });
    next.addEventListener('click', () => { galIndex = (galIndex + 1) % GALLERY.length; showSlide(); });
  }

  
  function tryMount(t=0){ if(mount()) return; if(t<20) setTimeout(()=>tryMount(t+1),300); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryMount);
  else tryMount();
})();

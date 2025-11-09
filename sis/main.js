(() => {
  // === إعدادات
  const IMAGE_URL = 'https://ghosted907.github.io/salla-assets/sis/5.png';
  const WA_PHONE  = '966557042544';
  const WA_TEXT   = encodeURIComponent('أرغب بإضافة رأيي حول المنتج');
  const REVIEWS_TEXT = [
    'وصلت الطلبيه اليوم الكريم بعطر الما يجنننننن ما قد سمعت احد يمدحه بس صراحه روعه 🙏🏼',
    'والله انتي الذوق وربي عطر الما خرافي يجنن يسلم ذوقك…',
    'يا حبيبي على الذوق 🤦🏻‍♀❤',
    'يعطيك العافيه ومن اعلى لأعلى 🤍',
    'السلام عليكم متى يتوفر الفانيليا؟',
    'الكريم رهيب، لاحظت فرق واضح 👌',
    'قوامه سهل ويعطي نضارة ويشد البشرة',
    'ترطيب عميق ويستمر',
    'وصلت الطلبية والترطيب يبرد القلب',
    'أكيد أكرر الطلب بإذن الله',
    'شكراً على العينة ❤️',
  ];

  // === CSS
  const css = `
  .jf-container{position:relative;display:block;width:100%;max-width:1200px;margin:12px auto;}

  /* صورة الهيرو 428×510 */
  .jf-hero{
    position:relative;display:block;width:100%;
    border-radius:40px; overflow:hidden; /* نعيده لاخفاء حواف الصورة فقط */
    aspect-ratio: 428 / 510;
  }
  .jf-img{display:block;width:100%;height:auto}

  /* أزرار */
  .pin{
    position:absolute;transform:translate(-50%,-50%);
    width:clamp(48px,7vw,75px);height:clamp(32px,4.6vw,50px);
    background:transparent!important;border:0;box-shadow:none!important;border-radius:9999px;
    display:block;cursor:pointer;z-index:3;appearance:none;-webkit-appearance:none;padding:0;margin:0
  }
  .pin-add{top:91.5%;left:93.8%}
  .pin-gallery{top:91.5%;left:4.8%}

  /* ===== التريكر خارج الهيرو لتفادي القص ===== */
  .jf-ticker{
    --ticker-rise: clamp(40px, 9vw, 95px);   /* مقدار السحب للأعلى */
    position:relative;
    z-index:10;
    left:50%; transform:translateX(-50%);
    width:min(92%,1000px);
    height:clamp(80px,22vw,150px);
    margin-top: calc(-1 * var(--ticker-rise)); /* اسحب للأعلى فوق أسفل الصورة */
    background:rgba(239,234,226,.80);
    border-radius:16px;
    padding:8px 10px;
    overflow:hidden;
    display:flex; align-items:stretch;
  }
  .jf-track{
    display:flex; flex-direction:column; gap:10px;
    animation-name:jf-marquee-up;
    animation-duration:var(--jf-duration, 10s);
    animation-timing-function:linear;
    animation-iteration-count:infinite;
    will-change:transform;
  }
  .jf-item{
    background:#fff;border:1px solid #ddd;border-radius:12px;
    padding:10px 12px;color:#19191a;box-shadow:0 2px 6px rgba(0,0,0,.05);
  }
  .jf-ticker:hover .jf-track{animation-play-state:paused;}

  @keyframes jf-marquee-up{
    0%{transform:translateY(0);}
    100%{transform:translateY(var(--jf-distance, -600px));} /* px فقط */
  }

  @media (prefers-reduced-motion: reduce){
    .jf-track{animation-duration:calc(var(--jf-duration,10s)*1.6)!important;}
  }`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // === بناء الهيرو + حقن بعده التريكر
  function buildHero(){
    const wrap = document.createElement('div');
    wrap.className = 'jf-container';
    wrap.innerHTML = `
      <div class="jf-hero">
        <img class="jf-img" src="${IMAGE_URL}" alt="Jeje Beef Tallow">
        <a class="pin pin-add" href="https://wa.me/${WA_PHONE}?text=${WA_TEXT}" target="_blank" rel="noopener" aria-label="واتساب لإضافة رأي"></a>
        <button class="pin pin-gallery" type="button" aria-label="استعراض تجارب العملاء"></button>
      </div>
    `;
    return wrap;
  }

  function injectTicker(container){
    const ticker = document.createElement('div');
    ticker.className = 'jf-ticker';
    ticker.dir = 'rtl';
    ticker.setAttribute('aria-label','آراء العملاء');
    const track = document.createElement('div');
    track.id = 'jf-track'; track.className = 'jf-track'; track.setAttribute('aria-hidden','true');
    ticker.appendChild(track);
    container.appendChild(ticker); // خارج .jf-hero
  }

  function initTicker(){
    const track = document.getElementById('jf-track');
    if (!track || track.dataset.ready === '1') return;

    const makeItem = t => `<div class="jf-item">${t}</div>`;
    track.innerHTML = REVIEWS_TEXT.map(makeItem).join('') + REVIEWS_TEXT.map(makeItem).join('');

    requestAnimationFrame(() => {
      const distance = Math.ceil(track.scrollHeight / 2); // px
      const isMobile = matchMedia('(max-width: 640px)').matches;
      const reduce   = matchMedia('(prefers-reduced-motion: reduce)').matches;
      let speed = isMobile ? 60 : 120;        // px/sec
      if (reduce) speed *= 0.6;
      const duration = Math.max(distance / speed, 5);

      track.style.setProperty('--jf-distance', `-${distance}px`);
      track.style.setProperty('--jf-duration', `${duration}s`);
      track.style.animationName = 'jf-marquee-up';
      track.style.animationDuration = `${duration}s`;
      track.style.animationTimingFunction = 'linear';
      track.style.animationIterationCount = 'infinite';
      track.dataset.ready = '1';
    });
  }

  // تركيب في الصفحة
  function mount(){
    // نقطة إدراج مناسبة
    const afterBanner = document.querySelector('section.s-block.s-block--fixed-banner.wide-placeholder')
                     || document.querySelector('main') || document.body;
    if (!afterBanner) return false;

    if (!document.querySelector('.jf-container')){
      const heroWrap = buildHero();
      afterBanner.parentNode.insertBefore(heroWrap, afterBanner.nextSibling);
      injectTicker(heroWrap);      // خارج الهيرو
      initTicker();
    }
    return true;
  }

  // إعادة حساب عند تغيير المقاس
  let rid = 0;
  window.addEventListener('resize', () => {
    clearTimeout(rid);
    rid = setTimeout(() => {
      const t = document.getElementById('jf-track');
      if (!t) return;
      t.dataset.ready = '0'; t.style.animationName = 'none'; void t.offsetHeight; initTicker();
    }, 250);
  }, {passive:true});

  function tryMount(t=0){ if(mount()) return; if(t<20) setTimeout(()=>tryMount(t+1),300); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryMount);
  else tryMount();
})();

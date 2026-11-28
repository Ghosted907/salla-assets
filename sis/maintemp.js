/* Selected TikTok videos: mobile-first, homepage only. */
(() => {
  const VIDEOS = [
    { id: '7524202200965385480', account: 'jejebeeftallow', title: 'الكريم الأصلي' },
    { id: '7568388454351097108', account: 'jeje.beeftallow', title: 'كريم ألما' },
    { id: '7532539034170608903', account: 'jejebeeftallow', title: 'مجموعة جيجي' },
    { id: '7523385446366252296', account: 'jejebeeftallow', title: 'روتين العناية' },
    { id: '7710651350643789063', account: 'mayooskh', title: 'صديقة المتجر ميوس ♥️', nativePoster: true },
    { id: '7711113098895084808', account: 'mayooskh', title: 'صديقة المتجر ميوس ♥️', nativePoster: true }
  ];
  const COVER_BASE = 'https://ghosted907.github.io/salla-assets/sis/tiktok/';
  const css = `
    #jf-tiktok-gallery, #jf-tiktok-gallery *, #jf-tiktok-dialog, #jf-tiktok-dialog * { box-sizing: border-box; }
    #jf-tiktok-gallery { width: calc(100% - 24px); max-width: 1180px; min-width: 0; margin: 28px auto; padding: 24px 0 16px; background: #faf6ee; border: 1px solid #e9ddca; border-radius: 24px; color: #382b1c; direction: rtl; }
    .jf-tiktok-heading { padding: 0 20px 16px; }
    .jf-tiktok-eyebrow { margin: 0 0 6px; color: #937647; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
    #jf-tiktok-title { margin: 0; font-size: 22px; font-weight: 700; line-height: 1.6; color: #6d5021; }
    .jf-tiktok-subtitle { margin: 6px 0 0; font-size: 13px; line-height: 1.8; }
    .jf-tiktok-track { display: flex; gap: 14px; overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; scroll-padding-inline: 16px; padding: 4px 16px 14px; scrollbar-width: none; }
    .jf-tiktok-track::-webkit-scrollbar { display: none; }
    #jf-tiktok-gallery .jf-tiktok-card { appearance: none; flex: 0 0 72%; max-width: 264px; min-width: 0; padding: 0; overflow: hidden; border: 1px solid #e3d5bf; border-radius: 18px; background: #fff; color: inherit; cursor: pointer; font: inherit; text-align: right; scroll-snap-align: start; scroll-snap-stop: always; }
    .jf-tiktok-cover { position: relative; display: block; width: 100%; aspect-ratio: 9 / 16; overflow: hidden; background: #eddfc8; }
    .jf-tiktok-cover img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .jf-tiktok-cover .jf-tiktok-poster { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #eddfc8; pointer-events: none; }
    .jf-tiktok-cover::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,.18), transparent 35%, rgba(0,0,0,.22)); }
    .jf-tiktok-badge { position: absolute; top: 12px; right: 12px; z-index: 1; border-radius: 99px; padding: 5px 10px; background: rgba(0,0,0,.58); color: #fff; font-size: 11px; line-height: 1.4; }
    .jf-tiktok-play { position: absolute; top: 50%; left: 50%; z-index: 1; display: grid; place-items: center; width: 58px; height: 58px; transform: translate(-50%,-50%); border: 1px solid rgba(255,255,255,.8); border-radius: 50%; background: rgba(0,0,0,.5); color: #fff; font-size: 24px; padding-left: 3px; }
    .jf-tiktok-caption { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 14px 12px; font-size: 14px; font-weight: 700; }
    .jf-tiktok-caption small { color: #937647; font-size: 11px; white-space: nowrap; font-weight: 600; }
    .jf-tiktok-navigation { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 0 16px; }
    #jf-tiktok-gallery .jf-tiktok-arrow, #jf-tiktok-dialog button { display: inline-grid; place-items: center; width: 44px; min-height: 44px; padding: 0; border: 1px solid #dfcfb4; border-radius: 50%; background: #fff; color: #6d5021; font: inherit; font-size: 28px; line-height: 1; cursor: pointer; }
    #jf-tiktok-gallery button:focus-visible, #jf-tiktok-dialog button:focus-visible, #jf-tiktok-dialog a:focus-visible { outline: 3px solid #b99c6d; outline-offset: 3px; }
    #jf-tiktok-gallery button:disabled, #jf-tiktok-dialog button:disabled { opacity: .35; cursor: default; }
    .jf-tiktok-dots { display: flex; align-items: center; gap: 0; }
    #jf-tiktok-gallery .jf-tiktok-dot { display: grid; place-items: center; width: 24px; height: 44px; padding: 0; border: 0; background: transparent; cursor: pointer; }
    .jf-tiktok-dot::after { content: ''; width: 7px; height: 7px; border-radius: 99px; background: #d9c9ae; transition: width .15s ease; }
    .jf-tiktok-dot[aria-current='true']::after { width: 20px; background: #937647; }
    #jf-tiktok-dialog { width: min(420px, calc(100vw - 16px)); max-width: none; max-height: calc(100vh - 16px); max-height: calc(100dvh - 16px); margin: auto; padding: 12px; overflow: hidden; border: 0; border-radius: 20px; background: #1d1914; color: #fff; direction: rtl; font-family: inherit; }
    #jf-tiktok-dialog[open] { display: flex; flex-direction: column; gap: 10px; }
    #jf-tiktok-dialog::backdrop { background: rgba(0,0,0,.8); }
    .jf-tiktok-modal-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    #jf-tiktok-dialog-title { margin: 0; font-size: 15px; font-weight: 700; line-height: 1.6; color: #fff; }
    #jf-tiktok-dialog button { flex: 0 0 44px; border-color: #5e5140; background: #30281e; color: #fff; }
    .jf-tiktok-player { position: relative; width: min(100%, calc((100vh - 180px) * .5625)); width: min(100%, calc((100dvh - 180px) * .5625)); aspect-ratio: 9 / 16; margin: 0 auto; background: #000; overflow: hidden; border-radius: 10px; }
    .jf-tiktok-player iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    .jf-tiktok-modal-footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    #jf-tiktok-dialog a { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 10px; color: #fff; font-size: 12px; text-decoration: underline; text-underline-offset: 4px; }
    .jf-tiktok-counter { font-size: 12px; color: #e1cfaf; white-space: nowrap; }
    body.jf-tiktok-open { overflow: hidden; }
    @media (min-width: 900px) { #jf-tiktok-gallery { padding-top: 28px; } .jf-tiktok-heading { padding-inline: 24px; } #jf-tiktok-gallery .jf-tiktok-card { flex-basis: calc((100% - 42px) / 4); max-width: none; } .jf-tiktok-navigation { display: none; } #jf-tiktok-gallery.jf-tiktok-has-more .jf-tiktok-navigation { display: flex; } }
    @media (max-width: 359px) { #jf-tiktok-title { font-size: 20px; } .jf-tiktok-caption { flex-direction: column; align-items: flex-start; gap: 4px; } }
    @media (prefers-reduced-motion: reduce) { .jf-tiktok-dot::after { transition: none; } }
  `;

  function jfMountTikTok() {
    if (!document.body.classList.contains('index')) return true;
    if (document.getElementById('jf-tiktok-gallery')) return true;
    const main = document.querySelector('main');
    if (!main) return false;

    const style = document.createElement('style');
    style.id = 'jf-tiktok-gallery-style';
    style.textContent = css;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.id = 'jf-tiktok-gallery';
    if (VIDEOS.length > 4) section.classList.add('jf-tiktok-has-more');
    section.setAttribute('aria-labelledby', 'jf-tiktok-title');
    section.innerHTML = `
      <div class="jf-tiktok-heading">
        <p class="jf-tiktok-eyebrow" lang="en">JEJE · TIKTOK</p>
        <h2 id="jf-tiktok-title">جيجي على تيك توك</h2>
        <p class="jf-tiktok-subtitle">شاهدي منتجاتنا عن قرب، واسحبي لاكتشاف المزيد</p>
      </div>
      <div class="jf-tiktok-track" role="group" aria-label="مقاطع جيجي على تيك توك">
        ${VIDEOS.map((video, index) => `
          <button type="button" class="jf-tiktok-card" data-video="${index}" aria-label="شغلي مقطع ${video.title}" aria-haspopup="dialog">
            <span class="jf-tiktok-cover">
              ${video.nativePoster
                ? `<iframe class="jf-tiktok-poster" title="معاينة ${video.title}" src="https://www.tiktok.com/player/v1/${video.id}?autoplay=0&controls=0&music_info=0&description=0&rel=0&timestamp=0&fullscreen_button=0" loading="lazy" aria-hidden="true" tabindex="-1"></iframe>`
                : `<img src="${COVER_BASE}${video.id}.jpg" width="360" height="640" alt="" loading="lazy" decoding="async">`}
              <span class="jf-tiktok-badge" lang="en">TikTok</span>
              <span class="jf-tiktok-play" aria-hidden="true">▶</span>
            </span>
            <span class="jf-tiktok-caption"><span>${video.title}</span><small>شاهدي المقطع</small></span>
          </button>
        `).join('')}
      </div>
      <div class="jf-tiktok-navigation">
        <button type="button" class="jf-tiktok-arrow" data-rail-prev aria-label="المقطع السابق">›</button>
        <div class="jf-tiktok-dots">
          ${VIDEOS.map((video, index) => `<button type="button" class="jf-tiktok-dot" data-slide="${index}" aria-label="اعرضي مقطع ${video.title}" aria-current="${index === 0}"></button>`).join('')}
        </div>
        <button type="button" class="jf-tiktok-arrow" data-rail-next aria-label="المقطع التالي">‹</button>
      </div>
    `;
    const anchor = main.querySelector('[data-testid="store-home-fixed-products"]');
    if (anchor) anchor.insertAdjacentElement('afterend', section);
    else main.appendChild(section);

    const track = section.querySelector('.jf-tiktok-track');
    const cards = Array.from(section.querySelectorAll('.jf-tiktok-card'));
    const dots = Array.from(section.querySelectorAll('.jf-tiktok-dot'));
    const railPrev = section.querySelector('[data-rail-prev]');
    const railNext = section.querySelector('[data-rail-next]');
    let railIndex = 0;
    let scrollFrame = 0;

    function jfUpdateRail() {
      const edge = track.getBoundingClientRect().right - 16;
      let closest = Infinity;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().right - edge);
        if (distance < closest) { closest = distance; railIndex = index; }
      });
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 1 && Math.abs(track.scrollLeft) >= maxScroll - 2) railIndex = cards.length - 1;
      dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === railIndex)));
      railPrev.disabled = railIndex === 0;
      railNext.disabled = railIndex === cards.length - 1;
      scrollFrame = 0;
    }

    function jfGoToCard(index) {
      const card = cards[Math.max(0, Math.min(index, cards.length - 1))];
      card.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'start' });
    }
    track.addEventListener('scroll', () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(jfUpdateRail);
    }, { passive: true });
    dots.forEach((dot, index) => dot.addEventListener('click', () => jfGoToCard(index)));
    railPrev.addEventListener('click', () => jfGoToCard(railIndex - 1));
    railNext.addEventListener('click', () => jfGoToCard(railIndex + 1));
    window.addEventListener('resize', jfUpdateRail);
    jfUpdateRail();

    let dialog;
    let activeIndex = 0;
    let opener;

    function jfShowVideo(index) {
      activeIndex = index;
      const video = VIDEOS[index];
      dialog.querySelector('#jf-tiktok-dialog-title').textContent = video.title;
      dialog.querySelector('.jf-tiktok-counter').textContent = `${(index + 1).toLocaleString('ar-SA')} / ${VIDEOS.length.toLocaleString('ar-SA')}`;
      dialog.querySelector('a').href = `https://www.tiktok.com/@${video.account}/video/${video.id}`;
      dialog.querySelector('[data-video-prev]').disabled = index === 0;
      dialog.querySelector('[data-video-next]').disabled = index === VIDEOS.length - 1;
      const frame = document.createElement('iframe');
      frame.title = `مقطع ${video.title} على تيك توك`;
      frame.src = `https://www.tiktok.com/player/v1/${video.id}?autoplay=1&controls=1&rel=0&music_info=0&description=0`;
      frame.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      dialog.querySelector('.jf-tiktok-player').replaceChildren(frame);
    }

    function jfOpenVideo(index, button) {
      if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'jf-tiktok-dialog';
        dialog.setAttribute('aria-labelledby', 'jf-tiktok-dialog-title');
        dialog.innerHTML = `
          <div class="jf-tiktok-modal-header">
            <h2 id="jf-tiktok-dialog-title"></h2>
            <button type="button" data-video-close aria-label="إغلاق المقطع" autofocus>×</button>
          </div>
          <div class="jf-tiktok-player"></div>
          <div class="jf-tiktok-modal-footer">
            <button type="button" data-video-prev aria-label="تشغيل المقطع السابق">›</button>
            <span class="jf-tiktok-counter" aria-live="polite"></span>
            <a target="_blank" rel="noopener noreferrer">افتحيه في تيك توك ↗</a>
            <button type="button" data-video-next aria-label="تشغيل المقطع التالي">‹</button>
          </div>
        `;
        document.body.appendChild(dialog);
        dialog.querySelector('[data-video-close]').addEventListener('click', () => dialog.close());
        dialog.querySelector('[data-video-prev]').addEventListener('click', () => jfShowVideo(activeIndex - 1));
        dialog.querySelector('[data-video-next]').addEventListener('click', () => jfShowVideo(activeIndex + 1));
        dialog.addEventListener('close', () => {
          dialog.querySelector('.jf-tiktok-player').replaceChildren();
          document.body.classList.remove('jf-tiktok-open');
          if (opener) opener.focus({ preventScroll: true });
        });
        dialog.addEventListener('click', event => {
          if (event.target !== dialog) return;
          const bounds = dialog.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
        });
      }
      opener = button;
      jfShowVideo(index);
      dialog.showModal();
      document.body.classList.add('jf-tiktok-open');
    }

    cards.forEach((card, index) => card.addEventListener('click', () => jfOpenVideo(index, card)));
    return true;
  }

  function jfTryTikTok(attempt = 0) {
    if (!jfMountTikTok() && attempt < 20) setTimeout(() => jfTryTikTok(attempt + 1), 300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => jfTryTikTok(), { once: true });
  else jfTryTikTok();
})();


(() => {

  const REVIEWS_TEXT = [
   'وصلت الطلبيه اليوم الكريم بعطر الما يجننننن ما قد سمعت احد يمدحه بس صراحه روعه 🙏🏼',
   'والله انتي ذوق وربي عطر الما خرافي يجنن يسلم ذوقك من حطيته الزبدة على يدي والملمس زي الحرير شكرا من اعماق القلب على المنتج الاكثر من رائع واكيد عميلة دائمة باذن الله 🙏🏼❤❤❤',
   'يا حبيبي على الذوق 🤦🏻‍♀❤',
   'يعطيك الف عافيه وداعمه لك تستاهلين كل خير ❤❤❤',
   'السلام عليكم متى ممكن يتوفر اللي بالفانيليا و اذا في مجال ادفع دحين قبل يخلص العرض ووقت مايتوفر ينشحن عادي',
   'الكريم رهيب\n لاحظت الفرق بصراحه في بشرتي وأتمنى لك النجاح والتوفيق',
   'مساء الخير \nعجبني قوامه وسهل فرده على الجلد ويعطي نضاره للوجه ويشدها ، ويوحد اللون مع الاستمرار  وترطيبه عميق للجسم',
   'وصلت الطلبية ولما جربت حطيته بيدي أعجبني الترطيب ماشاءالله حسيت بترطيب داخلي مو سطحي\n هل راح اكرر الطلبية بعد ما تخلص راح اكرر الطلب بإذن الله 😘😘\n وشكرا على عينه فانيليا حبيتها',
   'ولله العظيم بدون مجاملة على كثر ما اشتري مرطبات وباسعار غالية فرنسية كورية تعطي ترطيب عميق إلا كم ساعه ويختفي ترطيبها\n إلا بيف تالو حطيتها على يد جاف واعطاني ترطيب رهيب 😍😍\nكانه يد بيبي',
   'شكرا على منتجكم الرهيب 🫶🏻🫶🏻\nألما اعتقد اسمه الاحمر جمممييييلل زين اني عرفته\n الله ينفع فيه',
   'الحمدالله وصلت ✨🎀',
   'وصلتني المنتجات وشكرا" على العينات مرا حبيت اللي بالقهوه',
   'انا طلبت 3 كريم شحم البقر الاصلي',
   'بأذن الله حيكون التعامل بيننا مستمر',
   'السلام عليكم كيفك، وصلتني الشحنه قبل اسبوع شكرا على العينه 💗💗\n اقترح عليك تسوين لاين للشفايف يكون فيه تنت لان مره حلو للشفايف يرطبها، و كمان للشعر  من نفس المنتج ( شحم البقر) معروف انه مره مفيد للشعر',
   'السلام عليكم وصلني طلبي ☺\n مشكورة ياعسل على العينة اللطيفة اللي ارفقتيها مع الطلب 🥰',
   'الان لو حفظت العبوة الكبيرة في الثلاجة  وبعدها اخذ منها كمية استعمال كم يوم وتركت الكمية هذة برى الثلاجة',
   'قبل كل شي صراحه انا شفت الحساب وانبسطت لاني متعمقه فيه\n انا اعرف انه صعب وانبسطت ان فيه حساب سعودي مسويه لاني اعرف بناتنا نظيفات ومنصحات من قلب\n الله يعطيك الصحه والعافيه ويرزقك من واسع فضله\n وماحبيت اطلبه من امازون او من براخفت \n ابيه لنفسي ولعيالي الصغار فيهم اكزيما',
   'تدرين مشروعك لك اجر فيه لان بيريحنا وبيعالجنا علاج يعتبر يعني تجمعين بين الاجر وفضل اكتساب الرزق وانتي تصنعينه احتسبي الاجر',
   'وانا متاكده انك لما شفتيه جربتي تسوينه وتشجعتي تبيعينه من النتيجه مادري ليش جاني هالشعور',
   'واذا جربته وعجبني بنصح كل اهلنا بقطر والامارات فيه لان ندور صراحه,  ان شاءالله الله يكبر حظك ويوسع رزقك',
   'ماجاتني عينات بس ان شاءالله الطلبيه الجايه مابتقصرين معي وبيكون متوفر وبتسوين لي بعد نكهة جديده سبشل بالورد 🌸🌸🤝🏼 \n بخلصها في اسبوعين 😂',
   'يعطيك العافيه على هالجوده المرتبه والتغليف والشغل النظيف',
   'انا ماجربت من قبل بس عجبني\n المره الجايه ابيه بزيت ورد طبيعي',
   'اول ماوصلني اشتهيت اسوي حمام مغربي واتدهن فيه يفتتتح النفس',
   'احب ريحة المسك و الورد مره \n قاعده افكر احط مع الي عندي مسك وورد شرايك كيف اقدر اسويه',
   'باذن الله انا خلاص بطلب منكم انا وخالتي \n بس ياليت تسوي كميات اكبر \n لاصحاب الاكزيما في الجسم والاسعار تكون في متناول الجميع \n وشكرت جهودك🌹',
   'السلام عليكم \n وصلت اليوم طلبيتي يعطيك العافية حبيبتي على المنتج الرائع وعلى العينه 🤍',
   'جربته الترطيب يبرد القلببب لقيت سلاحي مع جفاف بشرتي والاكزيما، الريحة شوي مقبوله أنا حسيت ك اول استخدام طولت معي الريحه بس بجرب اخلطه مع كريم ثاني عشان اخففها \n وان شاءالله مو اخر تجرررربه بالتوفيق 💕💕💕💕',
   'يعطيكي العافية، الكبير بعطر الما جداااً رائع وقوامه حلو والريحة ممتازة، موزونةومهي قوية \n الصراحة مرررة كنت خايفة من العطر، حتى كلمتك اني ابدل، كنت حاخذ السادة \n بس الحمدلله جاني كويس',
   'بالعكس، ان الريحة هذي طلعت دليل ان جودة الشحم كويسة، يعني ما طلع ريحة تعفن',
   'الله يوفقك ويوسع برزقك، من زمان نفسي اجرب التالو وكنت مترددة اطلبه عشان لا يخرب مع الشحن، والحمدلله لقيت مشروع ف بلدنا بدأه 🫶 اتمنالك كل خير \n طلبت الاصلي لي ولاهلي ان شاءالله تكون تجربه حلوه ✨ \n متحمسه وفخوره انه اخيرًا توفر شحم بقري انتاج سعودي 🇸🇦🥹',
   'السلام عليكم \n صباح الخير \n حاليا انا قاعده اجرب الشحم البقري على مناطق غير جسمي وودي انقل لك تجربتي المتواضعه لعله تكون سبب فايدة لك يارب ✨\n شاريه المنتج ترطيب جسمي صراحه لكن حبيت اعطيه فرصه على مناطق اخرى زي الوجه والابطين والمنطقه الحساسه لسى انا قيد الاختبار على هذي المناطق … لكن اللي فرق معاي بشكل كبير وملحوظ الابط استخدمه قبل النوم بعد ماانظف المنطقه زين او بعد الشور على طول بالبدايه خايفه اطلع فيه برا لانه انا اعرق واجد ومرات يطلع ريحه فمااجازف ابد … اما الصدمه انه بنفس اليوم سويت جهد بدني كبير وتمارين وفعلا عرقت ولكن ما فيه ريحة مره انبسطت رغم اني ابيه كتبيض وانصدمت بنتيجه احلى ✨✨ الله يوفقك يارب على هالكريم الجميل 🤲🏻🥹❤❤❤❤ \n اقولك الصراحه انا وحده مايضبط معاها اي ديودرنت عانيت كثير اجرب واجد لدرجه اني رجعت استخدم الليمون 💔 لما لقيت من براند فيتشي يناسبن واستانست اكثرر على كريمك خيااال وخيار آمن الحمدلله 🫶🏻 \n يا زينك كل التوفيق لك يارب ومن اعلى لاعلى والله يفتح لك ابواب الرزق بطريقك ✨💕🤲🏻',
   'السلام عليكم كيفك \n اليوم وصلني الطلب \n و جربته على طول يجننن ماشالله \n حبيته الصدق \n وان شاءالله اكون عميلة دائمة \n و هاليومين ب اطلب بعد بإذن الله \n قبل لا تخلص العروض 🙂‍↕',
   'بسألك ياروحي اللي ب الفانيلا عادي استخدمها للوجه؟',
   'اللهم امين يارب حبيبتي عيوني وش هالأسلوب العسل 💞💞 بإذن الله أطلب منكم من جديد',
   'عيوني انتي و تفيد لحبوب الوجه ؟ لا عاد من ناحيه زبونه أنا زبونه دائمه ان شاءالله عندكم وبإذن الله 🫂',
   'يابعد عمري انتي اخجلتيني بلطفك وكلامك الله يسعدك ويوفقك يارب وإن شاءالله الاقي النتيجة الحلوه من ناحية وجهي و جسمي مايحتاج خلاص معروفة 🙂‍↕🤎🤎',
   'ياعمري انتي اممم خلاص احبكم ترى 😔😂🤎🤎🤎🫂',
   'استمرو استمرو وان شاءالله توصلون للعالمية يارب و الكل يعرفكم 🫂🤎🤎',
   'السلام عليكم عمري كيفك ، بسألك عيوني يمدي أضيف على طلبي كريم القهوة ؟',
   'خساره',
   'قلت بستغل العروض مره وحده دام صار عندي مبلغ بعد',
   'بس والله حبيت أنا مو بس زبونه دائمه أنا بكون زبونه للأبد إن شاءالله',
   'عيوني انتي تستاهلو كل الخير والسعاده والله و والله وجهي انصدمت اكثر شي منه كيف هجد لي الحبوب و خففها لي معنى ما خليت شي ما سويته طول هالسنين تروح وترجع ف اقل من اسبوع واتوقع بعد هذا من دعوتش الحلوه 🥹💞💞💞',
   'و بشرتي بعد حلوه الترطيب عاجبني مررره امس رطبت ف الليل وللحين الترطيب',
   'احبكم 🥹🫂🫂🫂',
   'عيوني انتي أحلى عيله والله وأفتخر اني صرت جزء من عيلتكم اللطيفة و عقبال ما أشوفكم ف كل مكان يارب ياعمري انتي على الدعوات الجميلة واللي تبرد القلب زي منتجاتكم و كلامش العسل',
   'اي مره واضح والحمدلله اني لاحظت فرق جميل ومعنى كنت متخوفة من انه يكون ثقيل على وجهي ويزيد الحبوب بس وثقت ف كلامش وحطيته والحمدلله اني وثقت و الاثنين حلوين على الوجه اللي ب الفانيلا و العادي بس أنا استهوا قلبي اللي ب الفانيلا للوجه اكثر حسيته خفيففف مره مره على الوجه يعني حتى هذا خفيف بس اتمنى فهمتي 🥹😂',
   'اي والله الحمدلله عليكم اول شي والحمدلله على منتجاتكم والحمدلله اني لقيت فرق و الحمدلله على الحب المتبادل بينا والواضح وهذا ان دل دل على جوده منتجاتكم و حبكم للمنتجات والعميل',
   'طبعاً مادري وش قاعده اقول بس هذا من حبي لكم 😔😂',
   'عيوني لمتى بتظل العروض لأن ابغى اطلب بعد اللي ب القهوة و الفانيلا زيادة ]n إن شاءالله الحق عليها عاد 🥹💞💞',
   'السلام عليكم عيوني كيفك ياروحي \n وصل الطلب وماتدرين كيف قلبي طاررر \n وياعمري الله يسعدك عبيتي لي العينه فل 🥹🤎🤎🤎',
   'ياعمري انتو الغالين والله حبيبه عمري انتي منتجاتكم فاقت الحب و الثقة من زمان أنا وصلت مرحلة غرام',
   'امين ياروحي امين ويسعدك ياعيوني \n والله من الحماس والسعاده توترت لما وصلت 🥹😂',
   'ياعمري انتي واضح الشغل اللي من القلب أصلاً و الأسلوب العسل يدل على الشغل بحب',
   'ياعيوني انتي الموضوع صار حب مو اعجاب اي والله زعلت و صار خاطري اطلب اكثر من علبه لدرجة قمت احسب كم بيصير 😔🤣 ان شاءالله ننتظرها بكل حب بعد 🫂',
   'عيوني انتي ان شاءالله دوم الفرحه ياعمري و إن شاءالله 🥹🫂',
   '+ ودي اسأل بس مستحية شوي العروض بترجع نفسها ولا',
   'أنا كنت أعاني من آثار حبوب وخطوط ابتسامة واضحة، وبشرتي باهتة وتعبانة بشكل ما تتخيلينه \n بس والله من أول أسبوع مع كريمك حسيت فرق مو عادي \n البشرة صارت صحية والآثار خفت والخطوط حوالين الفم تقريبًا اختفت حتى خدودي صارت ورديه😭😭 \n وحتى جربت احطه على شفايفي قبل النوم زي الماسك ولاحضت مع الوقت اغلب الخطوط بشفايفي اختفت \n شي خيياال وربي مو مبالغه لو اتكلم من اليوم لبكرا مارح اوفيه حقه \n وان شاء الله مو اخر مره اتعامل معاك، الله يوفقك ويسعدك ويبارك في رزقك 🤍🤍'
  ];

  
  const css = `
    .jf-reviews-container{
      width:100%;
      max-width:1200px;
      margin:16px auto;
      padding:0 12px;
    }
    .jf-reviews-inner{
      background:#eddfc8;
      border-radius:24px;
      border:2px solid #937647;
      padding:16px 18px;
      box-sizing:border-box;
    }
    .jf-reviews-title-wrap{
      display:inline-block;
      background:#937647;
      border-radius:999px;
      padding:4px 18px;
      margin-bottom:10px;
    }
    .jf-reviews-title{
      margin:0;
      font-size:1rem;
      font-weight:600;
      color:#ffffff;
    }
    .jf-reviews-viewport{
      max-height:280px;
      overflow-y:auto;
      position:relative;
    }
    .jf-reviews-track{
      display:flex;
      flex-direction:column;
      gap:8px;
      will-change:transform;
      animation-timing-function:linear;
      animation-iteration-count:infinite;
      animation-name:jf-marquee-up;
      animation-duration:var(--jf-duration,60s);
    }
    .jf-review-item{
      font-size:0.9rem;
      line-height:1.7;
      color:#2b2115;
      border-bottom:1.5px solid #937647;
      padding-bottom:6px;
	  white-space: pre-line;
    }
    .jf-review-item:last-child{
      border-bottom:none;
      padding-bottom:0;
    }
    @keyframes jf-marquee-up{
      0%   { transform: translateY(0); }
      100% { transform: translateY(var(--jf-distance, -50%)); }
    }
    @media (max-width:640px){
      .jf-reviews-inner{
        border-radius:18px;
        padding:14px 14px;
      }
      .jf-reviews-viewport{
        max-height:320px;
      }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

 
  function initTicker(track){
    if (!track) return;
    if (track.dataset.ready === '1') return;
    track.dataset.ready = '1';

    const makeItem = t => `<div class="jf-review-item">${t}</div>`;
  
    track.innerHTML = REVIEWS_TEXT.map(makeItem).join('') + REVIEWS_TEXT.map(makeItem).join('');

    requestAnimationFrame(() => {
      const halfHeight = track.scrollHeight / 2;
      const distance = Math.ceil(halfHeight);
      const isMobile = window.innerWidth <= 768;
      const minDur = 40;
      const speed = isMobile ? 55 : 110; 
      const duration = Math.max(distance / speed, minDur);

      track.style.setProperty('--jf-distance', `-${distance}px`);
      track.style.setProperty('--jf-duration', `${duration}s`);
      track.style.animationDuration = `${duration}s`;
      track.style.animationPlayState = 'running';
    });

    
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
    
    let resumeTimeout = null;
    track.parentElement.addEventListener('wheel', () => {
      track.style.animationPlayState = 'paused';
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        track.style.animationPlayState = 'running';
      }, 3000);
    });
  }

 
  function buildBox(){
    const box = document.createElement('section');
    box.className = 'jf-reviews-container';
    box.dir = 'rtl';

    box.innerHTML = `
      <div class="jf-reviews-inner">
        <div class="jf-reviews-title-wrap">
          <h2 class="jf-reviews-title">آراء الجميلات💕</h2>
        </div>
        <div class="jf-reviews-viewport">
          <div class="jf-reviews-track" id="jf-reviews-track"></div>
        </div>
      </div>
    `;

    const track = box.querySelector('#jf-reviews-track');
    initTicker(track);
    return box;
  }

  
  function mount(){
    if (document.body.classList.contains('index')) {
      const tikTokSection = document.getElementById('jf-tiktok-gallery');
      if (!tikTokSection) return false;
      const reviewsBox = document.querySelector('.jf-reviews-container') || buildBox();
      if (tikTokSection.nextElementSibling !== reviewsBox) {
        tikTokSection.insertAdjacentElement('afterend', reviewsBox);
      }
      return true;
    }

    const targetSection = Array.from(
      document.querySelectorAll('section.s-block.s-block--fixed-banner.wide-placeholder')
    ).find(sec => {
      const a = sec.querySelector('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden');
      if (!a) return false;
      const href = a.getAttribute('href') || a.href || '';
      return href.includes('jejetallow.com/redirect/categories/2058495926');
    });

    if (targetSection){
      if (document.querySelector('.jf-reviews-container')) return true;
      targetSection.insertAdjacentElement('afterend', buildBox());
      return true;
    }

    const catBanner = Array.from(
      document.querySelectorAll('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden')
    ).find(a => {
      const href = a.getAttribute('href') || a.href || '';
      return href.includes('jejetallow.com/redirect/categories/2058495926');
    });
    if (catBanner){
      if (document.querySelector('.jf-reviews-container')) return true;
      catBanner.insertAdjacentElement('afterend', buildBox());
      return true;
    }

    const prodBanner = Array.from(
      document.querySelectorAll('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden')
    ).find(a => {
      const href = a.getAttribute('href') || a.href || '';
      return href.includes('jejetallow.com/redirect/products/1879463664');
    });
    if (prodBanner){
      if (document.querySelector('.jf-reviews-container')) return true;
      prodBanner.insertAdjacentElement('afterend', buildBox());
      return true;
    }

    const footer = document.querySelector('footer.store-footer');
    if (!footer) return false;
    if (document.querySelector('.jf-reviews-container')) return true;
    footer.parentNode.insertBefore(buildBox(), footer);
    return true;
  }

  const GALLERY_BASE_URL = 'https://ghosted907.github.io/salla-assets/sis/pictures/';
  const GALLERY_IMAGES = [
    'IMG-20251114-WA0001.jpg',
    'IMG-20251114-WA0002.jpg',
    'IMG-20251114-WA0003.jpg',
    'IMG-20251114-WA0004.jpg',
    'IMG-20251114-WA0001.jpg',
    'IMG-20251114-WA0006.jpg',
    'IMG-20251114-WA0007.jpg'
  ];

  function jfStyleButton(btn){
    if (!btn) return;
    btn.type = 'button';
    btn.style.border = 'none';
    btn.style.background = '#937647';
    btn.style.color = '#ffffff';
    btn.style.borderRadius = '999px';
    btn.style.padding = '6px 16px';
    btn.style.fontSize = '0.9rem';
    btn.style.fontWeight = '600';
    btn.style.cursor = 'pointer';
    btn.style.display = 'inline-flex';
    btn.style.alignItems = 'center';
    btn.style.gap = '6px';
  }

  function jfOpenGallery(){
    let overlay = document.querySelector('.jf-gallery-overlay');
    if (!overlay){
      overlay = document.createElement('div');
      overlay.className = 'jf-gallery-overlay';
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.background = 'rgba(0,0,0,0.7)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.padding = '16px';

      const box = document.createElement('div');
      box.className = 'jf-gallery-box';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.style.background = '#eddfc8';
      box.style.width = 'auto';
      box.style.height = 'auto';
      box.style.maxWidth = 'calc(100vw - 32px)';
      box.style.maxHeight = '87vh';
      box.style.overflow = 'hidden';
      box.style.borderRadius = '16px';
      box.style.padding = '12px';
      box.style.boxSizing = 'border-box';
      box.style.position = 'relative';

      const closeBtn = document.createElement('button');
      closeBtn.textContent = '×';
      closeBtn.type = 'button';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '8px';
      closeBtn.style.left = '8px';
      closeBtn.style.width = '32px';
      closeBtn.style.height = '32px';
      closeBtn.style.borderRadius = '999px';
      closeBtn.style.border = 'none';
      closeBtn.style.background = 'rgba(0,0,0,0.6)';
      closeBtn.style.color = '#ffffff';
      closeBtn.style.display = 'flex';
      closeBtn.style.alignItems = 'center';
      closeBtn.style.justifyContent = 'center';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.fontSize = '20px';

      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (overlay && overlay.parentNode){
          overlay.parentNode.removeChild(overlay);
        }
      });

      const grid = document.createElement('div');
      grid.className = 'jf-gallery-grid';
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(120px,1fr))';
      grid.style.gap = '8px';

      GALLERY_IMAGES.forEach(name => {
        const img = document.createElement('img');
        img.src = GALLERY_BASE_URL + name;
        img.alt = 'صورة من آراء الجميلات';
        img.loading = 'lazy';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '12px';
        img.style.display = 'block';
        grid.appendChild(img);
      });

      box.appendChild(grid);
      box.appendChild(closeBtn);
      overlay.appendChild(box);

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay && overlay.parentNode){
          overlay.parentNode.removeChild(overlay);
        }
      });

      document.addEventListener('keydown', function onKey(e){
        if (e.key === 'Escape'){
          if (overlay && overlay.parentNode){
            overlay.parentNode.removeChild(overlay);
          }
          document.removeEventListener('keydown', onKey);
        }
      });

      document.body.appendChild(overlay);

      const imgs = overlay.querySelectorAll('.jf-gallery-grid img');
      imgs.forEach(el => {
        el.alt = '\u0635\u0648\u0631\u0629 \u0645\u0646 \u0622\u0631\u0627\u0621 \u0627\u0644\u062c\u0645\u064a\u0644\u0627\u062a';
      });

      jfInitGalleryCarousel();
    }
  }

  function jfEnsureActions(){
    const inner = document.querySelector('.jf-reviews-inner');
    if (!inner) return;
    if (inner.querySelector('.jf-reviews-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'jf-reviews-actions';
    actions.style.marginTop = '12px';
    actions.style.display = 'grid';
    actions.style.gridTemplateColumns = '1fr 1fr';
    actions.style.alignItems = 'center';
    actions.style.columnGap = '16px';
    actions.style.width = '100%';

    const whatsappBtn = document.createElement('button');
    whatsappBtn.className = 'jf-reviews-btn jf-btn-whatsapp';
    whatsappBtn.textContent = 'شاركينا رأيك';
    jfStyleButton(whatsappBtn);

    const galleryBtn = document.createElement('button');
    galleryBtn.className = 'jf-reviews-btn jf-btn-gallery';
    jfStyleButton(galleryBtn);

    const iconSpan = document.createElement('span');
    iconSpan.textContent = '📷';
    iconSpan.style.fontSize = '1rem';
    iconSpan.style.lineHeight = '1';

    const textSpan = document.createElement('span');
    textSpan.textContent = 'ألبوم الصور';

    galleryBtn.appendChild(iconSpan);
    galleryBtn.appendChild(textSpan);

    actions.appendChild(galleryBtn);
    actions.appendChild(whatsappBtn);
    galleryBtn.style.justifySelf = 'start';
    whatsappBtn.style.justifySelf = 'end';
    inner.appendChild(actions);

    whatsappBtn.addEventListener('click', () => {
      const url = 'https://wa.me/966557042544';
      window.open(url, '_blank');
    });

    galleryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      jfOpenGallery();
    });

    whatsappBtn.textContent = '+ \uD83D\uDC8C \u0634\u0627\u0631\u0643\u064a\u0646\u0627 \u0631\u0623\u064a\u0643';
    iconSpan.textContent = '\uD83D\uDCF7';
    textSpan.textContent = '\u0623\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631';
  }

  function tryMount(t = 0){
    if (mount()){
      jfEnsureActions();
      return;
    }
    if (t < 20) setTimeout(() => tryMount(t + 1), 300);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', tryMount);
  } else {
    tryMount();
  }

  function jfInitGalleryCarousel(){
    const overlay = document.querySelector('.jf-gallery-overlay');
    if (!overlay || overlay.dataset.jfReady === '1') return false;
    const box = overlay.querySelector('.jf-gallery-box');
    if (!box) return false;
    const grid = box.querySelector('.jf-gallery-grid');
    if (!grid) return false;
    const imgs = Array.from(grid.querySelectorAll('img'));
    if (!imgs.length) return false;

    overlay.dataset.jfReady = '1';

    let index = 0;
    imgs.forEach((el, idx) => {
      el.style.display = idx === index ? 'block' : 'none';
      el.alt = 'صورة من آراء الجميلات';
    });

    const controls = document.createElement('div');
    controls.className = 'jf-gallery-controls';
    controls.style.marginTop = '12px';
    controls.style.display = 'flex';
    controls.style.gap = '12px';
    controls.style.justifyContent = 'center';

    const btnPrev = document.createElement('button');
    const btnNext = document.createElement('button');
    jfStyleButton(btnPrev);
    jfStyleButton(btnNext);
    btnPrev.textContent = '◀️';
    btnNext.textContent = '▶';

    controls.appendChild(btnPrev);
    controls.appendChild(btnNext);
    box.appendChild(controls);

    function show(newIndex){
      if (!imgs.length) return;
      index = (newIndex + imgs.length) % imgs.length;
      imgs.forEach((el, idx) => {
        el.style.display = idx === index ? 'block' : 'none';
      });
    }

    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      show(index - 1);
    });

    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      show(index + 1);
    });

    btnPrev.textContent = '▶';
    btnNext.textContent = '◀';

    return true;
  }

  const jfGalleryInterval = setInterval(() => {
    if (jfInitGalleryCarousel()){
      clearInterval(jfGalleryInterval);
    }
  }, 250);

  const jfGallerySizeInterval = setInterval(() => {
    const overlay = document.querySelector('.jf-gallery-overlay');
    if (!overlay) return;
    const grid = overlay.querySelector('.jf-gallery-grid');
    if (!grid) return;
    const imgs = Array.from(grid.querySelectorAll('img'));
    if (!imgs.length) return;

    grid.style.display = 'flex';
    grid.style.alignItems = 'center';
    grid.style.justifyContent = 'center';
    grid.style.margin = '0 auto';
    grid.style.overflow = 'hidden';

    imgs.forEach(el => {
      el.style.maxWidth = 'calc(100vw - 32px)';
      el.style.maxHeight = 'calc(87vh - 80px)';
      el.style.width = 'auto';
      el.style.height = 'auto';
      el.style.objectFit = 'contain';
    });
  }, 250);
})();




Salla.onReady(function () {
  if (!document.querySelector('.custom-sbc-column')) {
    const appsIcons = document.querySelector('salla-apps-icons');
    if (appsIcons && appsIcons.parentNode) {
      const el = document.createElement('div');
      el.className = 'flex flex-col justify-start items-end text-right custom-sbc-column';

      el.innerHTML = `


        <div class="sbc-title">موثق لدى</div>
        <div class="custom-sbc-logo">
          <a href="https://eauthenticate.saudibusiness.gov.sa/certificate-details/0000168389" target="_blank" rel="noopener">
            <img src="https://cdn.saudibusiness.gov.sa/v2/dist//images/headerIcons/Logo.svg" alt="SBC Logo">
          </a>
        </div>


      `;

      appsIcons.parentNode.insertBefore(el, appsIcons);
    }
  }
});

/* Label the footer WhatsApp contacts and remove the repeated phone entry. */
(() => {
  const ENQUIRIES_PHONE = '+966557042544';
  const SUPPORT_PHONE = '+966557893866';

  function jfLabelWhatsAppContact(link, icon, labelText, phoneNumber) {
    if (link.querySelector('.jf-contact-details')) return;

    link.href = 'https://wa.me/' + phoneNumber.slice(1);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', labelText + ' عبر واتساب: ' + phoneNumber);
    link.title = labelText + ' عبر واتساب';
    link.style.minHeight = '44px';

    const contactIcon = icon.cloneNode(true);
    contactIcon.setAttribute('aria-hidden', 'true');
    const details = document.createElement('span');
    details.className = 'jf-contact-details';
    details.style.display = 'flex';
    details.style.flexDirection = 'column';
    details.style.gap = '2px';
    details.style.lineHeight = '1.6';

    const label = document.createElement('span');
    label.textContent = labelText;
    const phone = document.createElement('bdi');
    phone.dir = 'ltr';
    phone.textContent = phoneNumber;
    phone.style.whiteSpace = 'nowrap';

    details.append(label, phone);
    link.replaceChildren(contactIcon, details);
  }

  function jfMountFooterContacts(footer) {
    const contacts = footer.querySelector('salla-contacts .s-contacts-list');
    if (!contacts) return;

    const enquiries = contacts.querySelector('a[href="https://wa.me/' + ENQUIRIES_PHONE.slice(1) + '"]');
    const icon = enquiries && enquiries.querySelector('.s-contacts-icon');
    if (!icon) return;

    jfLabelWhatsAppContact(enquiries, icon, 'للملاحظات والاستفسارات', ENQUIRIES_PHONE);

    contacts.querySelectorAll('a[href^="tel:"]').forEach(link => {
      if (link.getAttribute('href').slice(4).replace(/\D/g, '') !== ENQUIRIES_PHONE.slice(1)) return;
      const wrapper = link.parentElement;
      if (wrapper !== contacts && wrapper.children.length === 1) wrapper.remove();
      else link.remove();
    });

    if (contacts.querySelector('#jf-support-contact')) return;
    const item = document.createElement('div');
    item.id = 'jf-support-contact';
    const link = document.createElement('a');
    link.className = 's-contacts-item jf-support-link';
    jfLabelWhatsAppContact(link, icon, 'الدعم الفني', SUPPORT_PHONE);
    item.appendChild(link);
    contacts.appendChild(item);
  }

  function jfInitFooterContacts(attempt = 0) {
    const footer = document.querySelector('footer.store-footer');
    if (!footer) {
      if (attempt < 20) setTimeout(() => jfInitFooterContacts(attempt + 1), 300);
      return;
    }
    jfMountFooterContacts(footer);
    const observer = new MutationObserver(() => jfMountFooterContacts(footer));
    observer.observe(footer, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => jfInitFooterContacts(), { once: true });
  } else {
    jfInitFooterContacts();
  }
})();

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
    'IMG-20251114-WA0005.jpg',
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
      box.style.background = '#ffffff';
      box.style.maxWidth = '90vw';
      box.style.maxHeight = '90vh';
      box.style.overflow = 'auto';
      box.style.borderRadius = '16px';
      box.style.padding = '12px';
      box.style.boxSizing = 'border-box';

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
    }
  }

  function jfEnsureActions(){
    const inner = document.querySelector('.jf-reviews-inner');
    if (!inner) return;
    if (inner.querySelector('.jf-reviews-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'jf-reviews-actions';
    actions.style.marginTop = '12px';
    actions.style.display = 'flex';
    actions.style.flexWrap = 'wrap';
    actions.style.gap = '8px';
    actions.style.justifyContent = 'space-between';

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
    galleryBtn.style.marginLeft = '0';
    whatsappBtn.style.marginLeft = 'auto';
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

    const btnPrev = document.createElement('button');
    const btnNext = document.createElement('button');
    jfStyleButton(btnPrev);
    jfStyleButton(btnNext);
    btnPrev.textContent = '←';
    btnNext.textContent = '→';

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

    btnPrev.textContent = '<';
    btnNext.textContent = '>';

    return true;
  }

  const jfGalleryInterval = setInterval(() => {
    if (jfInitGalleryCarousel()){
      clearInterval(jfGalleryInterval);
    }
  }, 250);
})();

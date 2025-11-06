
(() => {
 
  const IMAGE_URL = 'https://ghosted907.github.io/salla-assets/sis/4.png';
  const WA_PHONE  = '966557042544'; 
  const WA_TEXT   = encodeURIComponent('أرغب بإضافة رأيي حول المنتج');
  const GALLERY = [
    'https://ghosted907.github.io/salla-assets/sis/review-0.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-1.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-2.jpg',
    'https://ghosted907.github.io/salla-assets/sis/review-3.jpg',
  ];
  const REVIEWS_TEXT = [
  
   'وصلت الطلبيه اليوم الكريم بعطر الما يجنننننن ما قد سمعت احد يمدحه بس صراحه روعه 🙏🏼',
   'والله انتي الذوق وربي عطر الما خرافي يجنن يسلم ذوقك من حطيته الزبدة على يدي والملمس زي الحرير شكرا من اعماق القلب على المنتج الاكثر من رائع واكيد عميلة دائمة باذن الله 🙏🏼❤❤❤',
   'يا حبيبي على الذوق 🤦🏻‍♀❤',
   'يعطيك الف عافيه وداعمه لك تستاهلين كل خير ❤❤❤',
   'اجمعين يا عيني ❤', 
   'السلام عليكم متى ممكن يتوفر اللي بالفانيليا و اذا في مجال ادفع دحين قبل يخلص العرض ووقت مايتوفر ينشحن عادي',
   'الكريم رهيب',
   'لاحظت الفرق بصراحه في بشرتي وأتمنى لك النجاح والتوفيق',
   'مساء الخير جبني قوامه وسهل فرده على الجلد ويعطي نضاره للوجه ويشدها ، ويوحد اللون مع الاستمرار  وترطيبه عميق للجسم',
   'مساء الخير عزيزتي',
, 'وصلت الطلبية ولما جربت حطيته بيدي أعجبني الترطيب ماشاءالله حسيت بترطيب داخلي مو سطحي',
, 'هل راح اكرر الطلبية بعد ما تخلص راح اكرر الطلب بإذن الله 😘😘',
, 'وشكرا على عينه فانيليا حبيتها',
, 'ولله العظيم بدون مجاملة على كثر ما اشتري مرطبات وباسعار غالية فرنسية كورية تعطي ترطيب عميق إلا كم ساعه ويختفي ترطيبها إلا بيف تالو حطيتها على يد جاف واعطاني ترطيب رهيب 😍😍',
, 'كانه يد بيبي',
, 'شكرا على منتجكم الرهيب 🫶🏻🫶🏻',
, 'ألما اعتقد اسمه الاحمر جمممييييلل زين اني عرفته',
, 'الله ينفع فيه',
, 'امين ومن يقول يارب 💓',
, 'الحمدالله وصلت ✨🎀',
, 'وصلتني المنتجات وشكرا" على العينات مرا حبيت اللي بالقهوه',
, 'انا طلبت 3 كريم شحم البقر الاصلي',
, 'بأذن الله حيكون التعامل بيننا مستمر',
, 'السلام عليكم كيفك، وصلتني الشحنه قبل اسبوع شكرا على العينه 💗💗',
, 'اقترح عليك تسوين لاين للشفايف يكون فيه تنت لان مره حلو للشفايف يرطبها، و كمان للشعر  من نفس المنتج ( شحم البقر) معروف انه مره مفيد للشعر',
, 'السلام عليكم وصلني طلبي ☺',
, 'مشكورة ياعسل على العينة اللطيفة اللي ارفقتيها مع الطلب 🥰',
, 'عندي سؤال',
, 'الان لو حفظت العبوة الكبيرة في الثلاجة  وبعدها اخذ منها كمية استعمال كم يوم وتركت الكمية هذة برى الثلاجة',
, 'ماراح تتاثر',
, 'والا عادي ☺',
, 'قبل كل شي صراحه انا شفت الحساب وانبسطت لاني متعمقه فيه',
, 'انا اعرف انه صعب وانبسطت ان فيه حساب سعودي مسويه لاني اعرف بناتنا نظيفات ومنصحات من قلب',
, 'الله يعطيك الصحه والعافيه',
, 'ويرزقك من واسع فضله',
, 'وماحبيت اطلبه من امازون او من برا',
, 'خفت',
, 'ابيه لنفسي ولعيالي الصغار فيهم اكزيما',
, 'تدرين مشروعك لك اجر فيه',
, 'لان بيريحنا وبيعالجنا',
, 'علاج يعتبر',
, 'يعني تجمعين بين الاجر وفضل اكتساب الرزق',
, 'وانتي تصنعينه احتسبي الاجر',
, 'وانا متاكده انك لما شفتيه جربتي تسوينه وتشجعتي تبيعينه من النتيجه مادري ليش جاني هالشعور',
, 'واذا جربته وعجبني بنصح كل اهلنا بقطر والامارات فيه لان ندور صراحه',
, 'ان شاءالله الله يكبر حظك ويوسع رزقك',
, 'ماجاتني عينات بس ان شاءالله الطلبيه الجايه مابتقصرين معي وبيكون متوفر وبتسوين لي بعد نكهة جديده سبشل بالورد 🌸🌸🤝🏼',
, 'بخلصها في اسبوعين 😂',
, 'يعطيك العافيه على هالجوده المرتبه والتغليف والشغل النظيف',
, 'انا ماجربت من قبل بس عجبني',
, 'المره الجايه ابيه بزيت ورد طبيعي',
, 'اول ماوصلني اشتهيت اسوي حمام مغربي واتدهن فيه يفتتتح النفس',
, 'احب ريحة المسك و الورد مره',
, 'قاعده افكر احط مع الي عندي مسك وورد شرايك كيف اقدر اسويه',
, 'باذن الله انا خلاص بطلب منكم انا وخالتي',
, 'الله يسعدك ويكرمك يارب',
, 'شكرا🌹',
, 'بس ياليت تسوي كميات اكبر',
, 'لاصحاب الاكزيما في الجسم والاسعار تكون في متناول الجميع',
, 'وشكرت جهودك🌹',
, 'السلام عليكم',
, 'وصلت اليوم طلبيتي يعطيك العافية حبيبتي على المنتج الرائع وعلى العينه 🤍',
, 'جربته الترطيب يبرد القلببب لقيت سلاحي مع جفاف بشرتي والاكزيما، الريحة شوي مقبوله أنا حسيت ك اول استخدام طولت معي الريحه بس بجرب اخلطه مع كريم ثاني عشان اخففها',
, 'وان شاءالله مو اخر تجرررربه بالتوفيق 💕💕💕💕',
, 'يعطيكي العافية، الكبير بعطر الما جداااً رائع وقوامه حلو والريحة ممتازة، موزونةومهي قوية',
, 'ايوة الصراحة مرررة كنت خايفة من العطر، حتى كلمتك اني ابدل، كنت حاخذ السادة',
, 'بس الحمدلله جاني كويس',
, 'بالعكس، ان الريحة هذي طلعت دليل ان جودة الشحم كويسة، يعني ما طلع ريحة تعفن',
, 'الله يوفقك ويوسع برزقك، من زمان نفسي اجرب التالو وكنت مترددة اطلبه عشان لا يخرب مع الشحن، والحمدلله لقيت مشروع ف بلدنا بدأه 🫶 اتمنالك كل خير',
, 'طلبت الاصلي لي ولاهلي ان شاءالله تكون تجربه حلوه ✨',
, 'متحمسه وفخوره انه اخيرًا توفر شحم بقري انتاج سعودي 🇸🇦🥹',
, 'السلام عليكم',
, 'صباح الخير',
, 'حاليا انا قاعده اجرب الشحم البقري على مناطق غير جسمي وودي انقل لك تجربتي المتواضعه لعله تكون سبب فايدة لك يارب ✨',
, 'شاريه المنتج ترطيب جسمي صراحه لكن حبيت اعطيه فرصه على مناطق اخرى زي الوجه والابطين والمنطقه الحساسه لسى انا قيد الاختبار على هذي المناطق … لكن اللي فرق معاي بشكل كبير وملحوظ الابط استخدمه قبل النوم بعد ماانظف المنطقه زين او بعد الشور على طول بالبدايه خايفه اطلع فيه برا لانه انا اعرق واجد ومرات يطلع ريحه فمااجازف ابد … اما الصدمه انه بنفس اليوم سويت جهد بدني كبير وتمارين وفعلا عرقت ولكن ما فيه ريحة مره انبسطت رغم اني ابيه كتبيض وانصدمت بنتيجه احلى ✨✨ الله يوفقك يارب على هالكريم الجميل 🤲🏻🥹❤❤❤❤',
, 'اقولك الصراحه انا وحده مايضبط معاها اي ديودرنت عانيت كثير اجرب واجد لدرجه اني رجعت استخدم الليمون 💔 لما لقيت من براند فيتشي يناسبن واستانست اكثرر على كريمك خيااال وخيار آمن الحمدلله 🫶🏻',
, 'يا زينك كل التوفيق لك يارب ومن اعلى لاعلى والله يفتح لك ابواب الرزق بطريقك ✨💕🤲🏻',
, 'السلام عليكم كيفك',
, 'اليوم وصلني الطلب',
, 'و جربته على طول يجننن ماشالله',
, 'حبيته الصدق',
, 'وان شاءالله اكون عميلة دائمة',
, 'و هاليومين ب اطلب بعد بإذن الله',
, 'قبل لا تخلص العروض 🙂‍↕',
, 'بسألك ياروحي اللي ب الفانيلا عادي استخدمها للوجه؟',
, 'اللهم امين يارب حبيبتي عيوني وش هالأسلوب العسل 💞💞 بإذن الله أطلب منكم من جديد',
, 'عيوني انتي و تفيد لحبوب الوجه ؟ لا عاد من ناحيه زبونه أنا زبونه دائمه ان شاءالله عندكم وبإذن الله 🫂',
, 'يابعد عمري انتي اخجلتيني بلطفك وكلامك الله يسعدك ويوفقك يارب وإن شاءالله الاقي النتيجة الحلوه من ناحية وجهي و جسمي مايحتاج خلاص معروفة 🙂‍↕🤎🤎',
, 'ياعمري انتي اممم خلاص احبكم ترى 😔😂🤎🤎🤎🫂',
, 'استمرو استمرو وان شاءالله توصلون للعالمية يارب و الكل يعرفكم 🫂🤎🤎',
, 'السلام عليكم عمري كيفك ، بسألك عيوني يمدي أضيف على طلبي كريم القهوة ؟',
, 'خساره',
, 'قلت بستغل العروض مره وحده دام صار عندي مبلغ بعد',
, 'بس والله حبيت أنا مو بس زبونه دائمه أنا بكون زبونه للأبد إن شاءالله',
, 'عيوني انتي تستاهلو كل الخير والسعاده والله و والله وجهي انصدمت اكثر شي منه كيف هجد لي الحبوب و خففها لي معنى ما خليت شي ما سويته طول هالسنين تروح وترجع ف اقل من اسبوع واتوقع بعد هذا من دعوتش الحلوه 🥹💞💞💞',
, 'و بشرتي بعد حلوه الترطيب عاجبني مررره امس رطبت ف الليل وللحين الترطيب',
, 'احبكم 🥹🫂🫂🫂',
, 'عيوني انتي أحلى عيله والله وأفتخر اني صرت جزء من عيلتكم اللطيفة و عقبال ما أشوفكم ف كل مكان يارب ياعمري انتي على الدعوات الجميلة واللي تبرد القلب زي منتجاتكم و كلامش العسل',
, 'اي مره واضح والحمدلله اني لاحظت فرق جميل ومعنى كنت متخوفة من انه يكون ثقيل على وجهي ويزيد الحبوب بس وثقت ف كلامش وحطيته والحمدلله اني وثقت و الاثنين حلوين على الوجه اللي ب الفانيلا و العادي بس أنا استهوا قلبي اللي ب الفانيلا للوجه اكثر حسيته خفيففف مره مره على الوجه يعني حتى هذا خفيف بس اتمنى فهمتي 🥹😂',
, 'اي والله الحمدلله عليكم اول شي والحمدلله على منتجاتكم والحمدلله اني لقيت فرق و الحمدلله على الحب المتبادل بينا والواضح وهذا ان دل دل على جوده منتجاتكم و حبكم للمنتجات والعميل',
, 'طبعاً مادري وش قاعده اقول بس هذا من حبي لكم 😔😂',
, 'عيوني لمتى بتظل العروض لأن ابغى اطلب بعد اللي ب القهوة و الفانيلا زيادة',
, '🫂🫂🫂 ويسعدك يا عيوني',
, 'إن شاءالله الحق عليها عاد 🥹💞💞',
, 'السلام عليكم عيوني كيفك ياروحي',
, 'وصل الطلب وماتدرين كيف قلبي طاررر',
, 'وياعمري الله يسعدك عبيتي لي العينه فل 🥹🤎🤎🤎',
, 'ياعمري انتو الغالين والله حبيبه عمري انتي منتجاتكم فاقت الحب و الثقة من زمان أنا وصلت مرحلة غرام',
, 'امين ياروحي امين ويسعدك ياعيوني',
, 'والله من الحماس والسعاده توترت لما وصلت 🥹😂',
, 'ياعمري انتي واضح الشغل اللي من القلب أصلاً و الأسلوب العسل يدل على الشغل بحب',
, 'ياعيوني انتي الموضوع صار حب مو اعجاب اي والله زعلت و صار خاطري اطلب اكثر من علبه لدرجة قمت احسب كم بيصير 😔🤣 ان شاءالله ننتظرها بكل حب بعد 🫂',
, 'عيوني انتي ان شاءالله دوم الفرحه ياعمري و إن شاءالله 🥹🫂',
, '+ ودي اسأل بس مستحية شوي العروض بترجع نفسها ولا',
, 'أنا كنت أعاني من آثار حبوب وخطوط ابتسامة واضحة، وبشرتي باهتة وتعبانة بشكل ما تتخيلينه',
, 'بس والله من أول أسبوع مع كريمك حسيت فرق مو عادي',
, 'البشرة صارت صحية والآثار خفت والخطوط حوالين الفم تقريبًا اختفت حتى خدودي صارت ورديه😭😭',
, 'وحتى جربت احطه على شفايفي قبل النوم زي الماسك ولاحضت مع الوقت اغلب الخطوط بشفايفي اختفت',
, 'شي خيياال وربي مو مبالغه لو اتكلم من اليوم لبكرا مارح اوفيه حقه',
, 'وان شاء الله مو اخر مره اتعامل معاك، الله يوفقك ويسعدك ويبارك في رزقك 🤍🤍',
  ];

  // CSS
  const css = `
    .jf-container{position:relative;display:block;width:100%;max-width:1200px;margin:12px auto;}
    .jf-hero{position:relative;display:block;width:100%;border-radius:40px;overflow:hidden}
    .jf-img{display:block;width:100%;height:auto}
    .pin{position:absolute;transform:translate(-50%,-50%);width:75px;height:50px;
         background:transparent!important;border:0;box-shadow:none!important;border-radius:9999px;
         display:block;cursor:pointer;z-index:3;appearance:none;-webkit-appearance:none;padding:0;margin:0}

    .pin-add{top:92.5%;left:5.8%}
    .pin-gallery{top:8.5%;left:5.8%}

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

    /* ===== شريط الآراء المتحرك ===== */
    .jf-ticker{ position:absolute; left:8%; right:8%; bottom:6%; height:140px; background:rgba(239,234,226,.80); border-radius:16px; padding:10px 14px; overflow:hidden; z-index:2; display:flex; align-items:stretch; }
    .jf-track{ display:flex; flex-direction:column; gap:10px; animation-name:jf-marquee-up; animation-timing-function:linear; animation-iteration-count:infinite; will-change:transform; }
    .jf-item{ background:#fff; border:1px solid #ddd; border-radius:12px; padding:10px 12px; color:#19191a; box-shadow:0 2px 6px rgba(0,0,0,.05); }
    .jf-ticker:hover .jf-track{ animation-play-state:paused; }
    @keyframes jf-marquee-up{
      0%   { transform: translateY(0); }
      100% { transform: translateY(var(--jf-distance, -50%)); }
    }
    /* بدل إيقاف الحركة بالكامل عند تفعيل تقليل الحركة، نجعلها أبطأ */
    @media (prefers-reduced-motion: reduce){ .jf-track{ animation-duration: calc(var(--jf-duration, 8s) * 1.6) !important; } }
    /* Keep ticker overlaying the poster on all sizes (clipped by .jf-hero) */
    @media (max-width:640px){ .jf-ticker{ left:6%; right:6%; bottom:5%; height:clamp(80px, 24vw, 160px); } }
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

 
  // ticker resize debounce flags
  let jfTickerResizeBound = false;
  let jfTickerResizeTimer = 0;

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
    // Prefer mounting AFTER the fixed-banner section that contains the target categories link
    const targetSection = Array.from(document.querySelectorAll('section.s-block.s-block--fixed-banner.wide-placeholder'))
      .find(sec => {
        const a = sec.querySelector('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden');
        if(!a) return false;
        const href = a.getAttribute('href') || a.href || '';
        return href.includes('jejetallow.com/redirect/categories/2058495926');
      });
    if (targetSection){
      if (document.querySelector('.jf-container')) return true;
      targetSection.insertAdjacentElement('afterend', buildBox());
      ensureHeroWrap();
      attachTicker();
      ensureGalleryModal();
      return true;
    }

    // Fallback 1: after the categories banner anywhere
    const catBanner = Array.from(document.querySelectorAll('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden'))
      .find(a => {
        const href = a.getAttribute('href') || a.href || '';
        return href.includes('jejetallow.com/redirect/categories/2058495926');
      });
    if (catBanner){
      if (document.querySelector('.jf-container')) return true;
      catBanner.insertAdjacentElement('afterend', buildBox());
      ensureHeroWrap();
      attachTicker();
      ensureGalleryModal();
      return true;
    }

    // Fallback 2: after the previous product banner if still present
    const prodBanner = Array.from(document.querySelectorAll('a.banner.banner--fixed, a.banner.banner--fixed.overflow-hidden'))
      .find(a => {
        const href = a.getAttribute('href') || a.href || '';
        return href.includes('jejetallow.com/redirect/products/1879463664');
      });
    if (prodBanner){
      if (document.querySelector('.jf-container')) return true;
      prodBanner.insertAdjacentElement('afterend', buildBox());
      ensureHeroWrap();
      attachTicker();
      ensureGalleryModal();
      return true;
    }

    // Fallback 3: before footer
    const footer = document.querySelector('footer.store-footer');
    if (!footer) return false;
    if (document.querySelector('.jf-container')) return true;
    footer.parentNode.insertBefore(buildBox(), footer);
    ensureHeroWrap();
    attachTicker();
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

  function attachTicker(){
    const root = document.querySelector('.jf-container');
    if (!root) return;
    const hero = root.querySelector('.jf-hero') || root;
    if (hero.querySelector('.jf-ticker')) return; // idempotent per-hero
    const wrap = document.createElement('div');
    wrap.className = 'jf-ticker';
    wrap.dir = 'rtl';
    wrap.setAttribute('aria-label','آراء العملاء');
    const inner = document.createElement('div');
    inner.id = 'jf-track';
    inner.className = 'jf-track';
    inner.setAttribute('aria-hidden','true');
    wrap.appendChild(inner);
    hero.appendChild(wrap);
    initTicker();
  }

  function ensureHeroWrap(){
    const root = document.querySelector('.jf-container');
    if(!root || root.querySelector('.jf-hero')) return;
    const imgEl = root.querySelector('.jf-img');
    const addPin = root.querySelector('.pin-add');
    const galPin = root.querySelector('.pin-gallery');
    if(!imgEl || !addPin || !galPin) return;
    const hero = document.createElement('div');
    hero.className = 'jf-hero';
    root.insertBefore(hero, imgEl);
    hero.appendChild(imgEl);
    hero.appendChild(addPin);
    hero.appendChild(galPin);
  }

  // ====== تهيئة شريط الآراء المتحرك ======
  function initTicker(){
    const track = document.getElementById('jf-track');
    if (!track) return;
    if (track.dataset.ready === '1') return; // idempotent

    const makeItem = t => `<div class="jf-item"> ${t}</div>`;
    track.innerHTML = REVIEWS_TEXT.map(makeItem).join('') + REVIEWS_TEXT.map(makeItem).join('');

    /* requestAnimationFrame(() => {
      const SPEED_PX_PER_SEC = (window.innerWidth <= 800) ? 100 : 160; // أسرع بكثير على الجوال وسطح المكتب
      const halfHeight = track.scrollHeight / 2; // لأننا ضاعفنا المحتوى
      const duration = Math.max(halfHeight / SPEED_PX_PER_SEC, 3); // حد أدنى 3 ثوانٍ
      track.style.animationDuration = duration + 's';
      track.dataset.ready = '1';
    }); */

    // Recalculate on resize with debounce
    if (!jfTickerResizeBound){
      window.addEventListener('resize', () => {
        clearTimeout(jfTickerResizeTimer);
        jfTickerResizeTimer = setTimeout(() => {
          const t = document.getElementById('jf-track');
          if (!t) return;
          t.dataset.ready = '0';
          t.style.animation = 'none';
          void t.offsetHeight; // force reflow
          initTicker();
        }, 250);
      }, { passive:true });
      jfTickerResizeBound = true;
    }

    // override with pixel-based distance + dynamic duration
    requestAnimationFrame(() => {
      const distance = Math.ceil(track.scrollHeight / 2); // px because content is duplicated
      track.style.setProperty('--jf-distance', `-${distance}px`);
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      const reduce   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let speed = isMobile ? 160 : 220; // px/sec (unified)
      if (reduce) speed *= 0.6;
      const minDur = 3.0; // clear minimum
      const duration = Math.max(distance / speed, minDur);
      track.style.setProperty('--jf-duration', `${duration}s`);
      track.style.animation = `jf-marquee-up linear ${duration}s infinite`;
      track.dataset.ready = '1';
    });
  }

  
  function tryMount(t=0){ if(mount()) return; if(t<20) setTimeout(()=>tryMount(t+1),300); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryMount);
  else tryMount();
})();

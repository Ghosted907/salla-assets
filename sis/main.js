
(function(){
  try {
    console.log('❤️');
  } catch(e) {}
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

        <div class="custom-verified-by">
          <div class="sbc-title">تم فحص المنتج في</div>
          <a href="https://jejetallow.com/شهادة-تقرير-الفحص/page-1127791441" target="_blank" rel="noopener">
            <img src="https://www.hasanah.com.sa/wp-content/uploads/2022/01/hasanah-logo.png" alt="Hasanah Logo">
          </a>
        </div>
      `;

      appsIcons.parentNode.insertBefore(el, appsIcons);
    }
  }
});
// ===== Jeje Testimonials (pure JS, no <script>) =====
const ENDPOINT = "https://your-endpoint.example/submit";  
const TARGET_SELECTOR = "main, .page-content, body";       

(function(){
  const target = document.querySelector(TARGET_SELECTOR) || document.body;
  if (!target || document.getElementById("jeje-testi")) return;

  
  const wrap = document.createElement("div");
  wrap.id = "jeje-testi";
  wrap.setAttribute("dir","rtl");
  wrap.setAttribute("aria-label","تجارب العملاء");
  wrap.innerHTML = `
    <div class="dash"></div>
    <div class="cap">شاركني رأيك</div>

    <div class="viewport">
      <ul class="stream" id="jeje-stream"></ul>
      <div id="jeje-form">
        <input type="text" id="f-name" placeholder="اسمك">
        <textarea id="f-msg" rows="3" placeholder="اكتب رأيك"></textarea>
        <button class="send" id="f-send">إرسال</button>
        <div id="jeje-ok" style="display:none;margin-top:8px;color:#0a7">تم إرسال مشاركتك.</div>
        <div id="jeje-err" style="display:none;margin-top:8px;color:#c00">تعذر الإرسال.</div>
      </div>
    </div>

    <div id="jeje-fab" title="شارك رأيك"><div class="plus">+</div></div>

    <div id="jeje-menu">
      <button data-act="form">اكتب رأيك الآن</button>
      <button data-act="whatsapp">مشاركة عبر واتساب</button>
      <button data-act="email">إرسال بريد إلكتروني</button>
    </div>

    <div id="jeje-icon">☎️</div>
  `;
  target.prepend(wrap);

 
  const seed = [
    {name:"testريم", msg:"تجربة ممتازة وشحن سريع."},
    {name:"testناصر", msg:"الجودة عالية والسعر مناسب."},
    {name:"testأم محمد", msg:"الرائحة طبيعية والترطيب عالي."},
    {name:"testهند", msg:"خدمة العملاء تجاوبت بسرعة."}
  ];
  const stream = document.getElementById('jeje-stream');
  function escapeHTML(s){return String(s).replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[m]));}
  function render(list){
    stream.innerHTML = '';
    const doubled = list.concat(list);
    doubled.forEach(it=>{
      const li = document.createElement('li');
      li.className = 'item';
      li.innerHTML = `<strong>${escapeHTML(it.name)}</strong><div>${escapeHTML(it.msg)}</div>`;
      stream.appendChild(li);
    });
  }
  render(seed);

  
  const fab = document.getElementById('jeje-fab');
  const menu = document.getElementById('jeje-menu');
  let menuOpen = false;
  fab.addEventListener('click', ()=>{
    menuOpen = !menuOpen;
    menu.style.display = menuOpen ? 'block' : 'none';
  });
  document.addEventListener('click', (e)=>{
    if (!menu.contains(e.target) && !fab.contains(e.target)) {
      menuOpen = false; menu.style.display = 'none';
    }
  });

  
  menu.addEventListener('click', (e)=>{
    if (!(e.target && e.target.dataset)) return;
    const act = e.target.dataset.act;
    if (act === 'form'){
      toggleForm(true);
    }else if(act === 'whatsapp'){
      const t = encodeURIComponent("أحب أشارك رأيي بمنتجات Jeje:");
      window.open(`https://wa.me/?text=${t}`, '_blank');
    }else if(act === 'email'){
      window.location.href = "mailto:owner@example.com?subject=%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9%20%D8%B1%D8%A3%D9%8A&body=%D9%86%D8%B5%20%D8%A7%D9%84%D8%B1%D8%A3%D9%8A%3A%0A";
    }
  });

  // نموذج الإرسال
  const formBox = document.getElementById('jeje-form');
  const ok = document.getElementById('jeje-ok');
  const err = document.getElementById('jeje-err');
  const sendBtn = document.getElementById('f-send');

  function toggleForm(show){ formBox.style.display = show ? 'grid' : 'none'; menu.style.display='none'; menuOpen=false; }

  sendBtn.addEventListener('click', async ()=>{
    ok.style.display='none'; err.style.display='none';
    const name = String(document.getElementById('f-name').value||'').slice(0,100).trim();
    const msg  = String(document.getElementById('f-msg').value||'').slice(0,2000).trim();
    if(!name || !msg) return; 

    try{
      const res = await fetch(ENDPOINT,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name, message:msg, url:location.href})
      });
      if(res.ok){
        ok.style.display='block';
        seed.unshift({name, msg});
        render(seed);
        document.getElementById('f-name').value='';
        document.getElementById('f-msg').value='';
      }else{
        err.style.display='block';
      }
    }catch{
      err.style.display='block';
    }
  });
})();

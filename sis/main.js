
const ENDPOINT = "https://elaris.sa/submit"; 
const BG_URL = "https://cdn.salla.sa/form-builder/QPcH7cmZLIpvLMfarLiKIVlO8cV4B6NLKbLJJW73.png";

(function(){
  if (document.getElementById("jeje-testi")) return;


  function findByBg(url){
    const all = document.querySelectorAll("section, div, header, main, .container, .section, .page, .content, .hero, .banner, .block");
    for (const el of all){
      const cs = getComputedStyle(el);
      if (cs.backgroundImage && cs.backgroundImage.includes(url)) return el;
    }
 
    const img = document.querySelector(`img[src*="${url}"]`);
    if (img) return img.closest("section, div") || img.parentElement;
    return null;
  }
  const anchor = findByBg(BG_URL) || document.querySelector("main, .page-content, .container") || document.body;

  
  if (!document.getElementById("jeje-styles")){
    const css = `
#jeje-testi{position:relative;max-width:1200px;margin:24px auto;border-radius:28px;
  background:transparent;padding:18px 24px 24px}
#jeje-testi .dash{position:absolute;inset:10px;border-radius:24px;border:4px dashed #2e2e2e;pointer-events:none}
#jeje-testi .cap{position:absolute;top:16px;right:24px;font-weight:800;font-size:28px;color:#19191a}
#jeje-testi .viewport{position:relative;height:180px;overflow:hidden;margin-top:10px}
#jeje-testi ul.stream{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;
  animation:jeje-marquee 22s linear infinite}
#jeje-testi:hover ul.stream{animation-play-state:paused}
#jeje-testi li.item{background:#fff;border:1px solid #ddd;border-radius:14px;padding:12px 14px;color:#19191a;
  box-shadow:0 2px 8px rgba(0,0,0,.04)}
#jeje-fab{position:absolute;left:18px;bottom:18px;width:64px;height:64px;border-radius:50%;
  background:radial-gradient(circle at 50% 50%, #fff 55%, #ddd 56% 60%, #fff 61% 65%, #ddd 66% 70%, #fff 71%);
  display:grid;place-items:center;cursor:pointer;z-index:5;box-shadow:0 6px 12px rgba(0,0,0,.15)}
#jeje-fab .plus{width:34px;height:34px;border-radius:50%;background:#b99c6d;color:#fff;font-weight:900;display:grid;place-items:center}
#jeje-menu{position:absolute;left:18px;bottom:94px;z-index:6;background:#fff;border:1px solid #ddd;border-radius:22px;
  padding:18px 16px;box-shadow:0 10px 24px rgba(0,0,0,.15);width:min(560px,92vw);display:none}
#jeje-menu h3{margin:0 0 10px 0;font-size:22px;color:#19191a}
#jeje-form{display:grid;gap:10px}
#jeje-form .row{display:grid;gap:8px}
#jeje-form input[type="text"],#jeje-form input[type="email"],#jeje-form textarea{
  width:100%;border:1px solid #ddd;border-radius:12px;padding:12px;background:#e9e3d7;color:#19191a}
#jeje-form .choice{display:grid;gap:8px}
#jeje-form .choice label{display:flex;align-items:center;gap:10px;background:#e0dbd1;border-radius:12px;padding:12px}
#jeje-form .send{border:0;border-radius:14px;padding:12px 16px;background:#b99c6d;color:#fff;font-size:18px;cursor:pointer}
#jeje-ok{display:none;margin-top:6px;color:#0a7}
#jeje-err{display:none;margin-top:6px;color:#c00}
#jeje-icon{position:absolute;right:24px;bottom:24px;width:84px;height:84px;border-radius:50%;background:#9c8357;
  display:grid;place-items:center;color:#fff;font-size:22px;opacity:.95}
@keyframes jeje-marquee{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
@media (max-width:768px){#jeje-testi{padding:14px 16px 20px}#jeje-testi .cap{font-size:20px;right:18px}
  #jeje-icon{width:64px;height:64px;right:18px;bottom:18px}}
`;
    const st = document.createElement("style");
    st.id = "jeje-styles"; st.textContent = css;
    document.head.appendChild(st);
  }

  
  const box = document.createElement("div");
  box.id = "jeje-testi"; box.dir = "rtl"; box.setAttribute("aria-label","تجارب العملاء");
  box.innerHTML = `
    <div class="dash"></div>
    <div class="cap">شاركني رأيك</div>
    <div class="viewport"><ul class="stream" id="jeje-stream"></ul></div>
    <div id="jeje-fab" title="شارك رأيك"><div class="plus">+</div></div>
    <div id="jeje-menu" role="dialog" aria-modal="true">
      <h3>شاركنا رأيك</h3>
      <form id="jeje-form" onsubmit="return false">
        <div class="row">
          <label>اسمك*</label>
          <input type="text" id="f-name" placeholder="اسمك">
          <label style="display:flex;align-items:center;gap:8px">
            <input type="checkbox" id="f-hide"> إخفاء الاسم
          </label>
        </div>
        <div class="row">
          <label>أدخل بريدك الإلكتروني*</label>
          <input type="email" id="f-email" placeholder="name@example.com">
        </div>
        <div class="row">
          <label>اختر المنتج</label>
          <div class="choice">
            <label><input type="checkbox" value="الأصلي" class="f-prod"> الأصلي</label>
            <label><input type="checkbox" value="ألما" class="f-prod"> ألما</label>
            <label><input type="checkbox" value="القهوة" class="f-prod"> القهوة</label>
            <label><input type="checkbox" value="الفانيلا" class="f-prod"> الفانيلا</label>
          </div>
        </div>
        <div class="row">
          <label>تحدّثي عن تجربتك</label>
          <textarea id="f-msg" rows="4" placeholder="اكتبي رأيك هنا"></textarea>
        </div>
        <button class="send" id="f-send" type="button">إرسال</button>
        <div id="jeje-ok">تم إرسال مشاركتك.</div>
        <div id="jeje-err">تعذر الإرسال.</div>
        <div style="font-size:12px;color:#6e7881">لن يتم مشاركة اسمك. تجنب إرسال كلمات المرور مطلقاً.</div>
      </form>
    </div>
    <div id="jeje-icon">☎️</div>
  `;
  anchor.insertAdjacentElement("afterend", box);

 
  const seed = [
    {name:"ريم", msg:"تجربة ممتازة وشحن سريع."},
    {name:"ناصر", msg:"الجودة عالية والسعر مناسب."},
    {name:"أم محمد", msg:"الرائحة طبيعية والترطيب عالي."},
    {name:"هند", msg:"خدمة العملاء تجاوبت بسرعة."},
  ];
  const stream = document.getElementById("jeje-stream");
  function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function render(list){
    stream.innerHTML = "";
    const doubled = list.concat(list);
    doubled.forEach(it=>{
      const li = document.createElement("li");
      li.className = "item";
      li.innerHTML = `<strong>${esc(it.name)}</strong><div>${esc(it.msg)}</div>`;
      stream.appendChild(li);
    });
  }
  render(seed);

  
  const fab = document.getElementById("jeje-fab");
  const menu = document.getElementById("jeje-menu");
  let menuOpen = false;
  function toggleMenu(v){menuOpen=v; menu.style.display = v ? "block":"none";}
  fab.addEventListener("click", ()=>toggleMenu(!menuOpen));
  document.addEventListener("click", (e)=>{
    if (!menu.contains(e.target) && !fab.contains(e.target)) toggleMenu(false);
  });

  
  const ok = document.getElementById("jeje-ok");
  const err = document.getElementById("jeje-err");
  document.getElementById("f-send").addEventListener("click", async ()=>{
    ok.style.display="none"; err.style.display="none";
    const name  = String(document.getElementById("f-name").value||"").slice(0,100).trim();
    const email = String(document.getElementById("f-email").value||"").slice(0,160).trim();
    const hide  = document.getElementById("f-hide").checked;
    const msg   = String(document.getElementById("f-msg").value||"").slice(0,2000).trim();
    const products = Array.from(document.querySelectorAll(".f-prod:checked")).map(x=>x.value);
    if(!name || !email || !msg) return; // بدون أي حماية سبام إضافية

    try{
      const res = await fetch(ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name, email, hide, products, message:msg, url:location.href, ua:navigator.userAgent
        })
      });
      if(res.ok){
        ok.style.display="block";
       
        seed.unshift({name: hide ? "مستخدم" : name, msg});
        render(seed);
        document.getElementById("f-name").value="";
        document.getElementById("f-email").value="";
        document.getElementById("f-msg").value="";
        document.querySelectorAll(".f-prod:checked").forEach(x=>x.checked=false);
        document.getElementById("f-hide").checked=false;
        toggleMenu(false);
      }else{
        err.style.display="block";
      }
    }catch{ err.style.display="block"; }
  });
})();

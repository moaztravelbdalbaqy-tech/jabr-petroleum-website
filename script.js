(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const state = { lang: localStorage.getItem("jabr-lang") || "ar", category:"all", query:"", cart:JSON.parse(localStorage.getItem("jabr-cart") || "[]") };
  const t = {
    ar:{navHome:"الرئيسية",navCatalog:"الكتالوج",navWhy:"لماذا جبر؟",navContact:"تواصل معنا",eyebrow:"حلول متكاملة للصناعة والطاقة",heroDesc:"متخصصون في توريد وتوفير جميع مستلزمات خطوط البترول والغاز وتوصيلات المصانع.",browse:"تصفح الكتالوج",whatsQuote:"اطلب عرض سعر عبر واتساب",standards:"مواصفات عالمية",prices:"أسعار تنافسية",quality:"جودة مضمونة",variety:"تنوع كبير",categoriesCount:"أقسام متخصصة",catalogEyebrow:"كتالوج المنتجات",catalogTitle:"المستلزمات الصناعية",catalogDesc:"استكشف مجموعتنا من منتجات خطوط البترول والغاز والمصانع.",productCount:"منتج معروض",searchPlaceholder:"ابحث باسم المنتج أو المواصفة...",reset:"إعادة ضبط",noResults:"لا توجد نتائج مطابقة",tryAgain:"جرّب كلمة بحث أخرى أو اختر قسمًا مختلفًا.",specEyebrow:"أداة اختيار المواصفات",pipeTitle:"حدد مواصفات المواسير المطلوبة",pipeDesc:"اختر المقاس والجدول ودرجة الصلب والطول، وأضف المواصفات مباشرة إلى طلب عرض السعر.",pipeNote:"التوافر والتسعير النهائي حسب تأكيد الشركة ومتطلبات المشروع.",size:"المقاس",schedule:"السماكة / الجدول",grade:"درجة الصلب",length:"الطول",material:"الخامة",quantity:"الكمية",addPipe:"أضف المواصفات إلى الطلب",whyEyebrow:"شريكك في التوريد الصناعي",whyTitle:"لماذا شركة جبر؟",whyIntro:"نعمل على توفير احتياجات خطوط البترول والغاز والمصانع بخيارات متنوعة واهتمام بالمواصفات الفنية.",benefit1:"تنوع في مستلزمات خطوط البترول والغاز والمصانع.",benefit2:"خيارات متعددة من المواسير والفلنشات والصمامات والوصلات.",benefit3:"إمكانية تحديد الخامة والمقاس والمواصفة المطلوبة.",benefit4:"أسعار تنافسية واهتمام بالجودة.",contactEyebrow:"نحن هنا لمساعدتك",contactTitle:"تواصل مع فريق جبر",contactDesc:"أرسل استفسارك أو مواصفات احتياجك، وسيتاح لك التواصل مباشرة مع الشركة.",addressLabel:"العنوان",phoneLabel:"الهاتف",callNow:"اتصل الآن",mapLink:"افتح الموقع على خرائط Google ↗",quickTitle:"طلب استفسار سريع",quickDesc:"املأ البيانات التالية وسنجهز رسالة واتساب بطلبك.",yourName:"الاسم",yourCompany:"اسم الشركة",yourPhone:"رقم الهاتف",productType:"نوع المنتج",details:"تفاصيل الطلب",sendWhats:"إرسال عبر واتساب",formNote:"سيتم فتح واتساب لإرسال رسالتك، ولا تُخزن بيانات النموذج على الموقع.",footerSlogan:"الثقة والجودة في كل منتج يحمل اسمنا",shareSite:"مشاركة الموقع ↗",cartTitle:"طلب عرض السعر",cartItemsLabel:"عدد البنود",sendCart:"إرسال الطلب عبر واتساب",clearCart:"مسح السلة",add:"أضف لطلب السعر",detailsBtn:"التفاصيل",added:"تمت إضافة المنتج إلى طلبك",emptyCart:"لم تضف أي منتجات بعد.",remove:"حذف",notes:"ملاحظات",thread:"نوع القلاووظ",choose:"اختر",sendError:"يرجى إدخال الاسم ورقم الهاتف.",copied:"تم نسخ الرابط",shared:"تعذر المشاركة؛ يمكنك نسخ رابط الموقع.",pipeName:"مواسير حسب المواصفات",sentEmpty:"أضف منتجًا واحدًا على الأقل قبل الإرسال.",qty:"الكمية",product:"المنتج",material:"الخامة",size:"المقاس",schedule:"الجدول",grade:"الدرجة",length:"الطول"},
    en:{navHome:"Home",navCatalog:"Catalogue",navWhy:"Why Jabr?",navContact:"Contact",eyebrow:"Integrated solutions for industry & energy",heroDesc:"Specialists in supplying oil & gas pipeline materials and industrial plant fittings.",browse:"Browse Catalogue",whatsQuote:"Request a Quote on WhatsApp",standards:"International Standards",prices:"Competitive Prices",quality:"Quality Focus",variety:"Wide Product Range",categoriesCount:"Specialized Categories",catalogEyebrow:"Product Catalogue",catalogTitle:"Industrial Supplies",catalogDesc:"Explore our range of oil, gas and industrial pipeline products.",productCount:"products shown",searchPlaceholder:"Search products or specifications...",reset:"Reset",noResults:"No matching results",tryAgain:"Try another search term or category.",specEyebrow:"Specification selector",pipeTitle:"Specify your required pipes",pipeDesc:"Choose size, schedule, steel grade and length, then add specifications to your quotation.",pipeNote:"Availability and final pricing are subject to company confirmation and project requirements.",size:"Size",schedule:"Schedule",grade:"Steel grade",length:"Length",material:"Material",quantity:"Quantity",addPipe:"Add specifications to request",whyEyebrow:"Your industrial supply partner",whyTitle:"Why Jabr?",whyIntro:"We work to supply oil, gas and industrial plant requirements with varied options and attention to technical specifications.",benefit1:"A wide range of oil, gas and industrial pipeline supplies.",benefit2:"Multiple options for pipes, flanges, valves and fittings.",benefit3:"Specify the required material, size and technical standard.",benefit4:"Competitive pricing and quality focus.",contactEyebrow:"We are here to help",contactTitle:"Contact the Jabr team",contactDesc:"Send your inquiry or required specifications and contact the company directly.",addressLabel:"Address",phoneLabel:"Phone",callNow:"Call Now",mapLink:"Open in Google Maps ↗",quickTitle:"Quick Inquiry",quickDesc:"Complete the form and we will prepare a WhatsApp message.",yourName:"Name",yourCompany:"Company",yourPhone:"Phone number",productType:"Product type",details:"Request details",sendWhats:"Send via WhatsApp",formNote:"WhatsApp will open to send your message. Form data is not stored on this website.",footerSlogan:"Trust and quality in every product bearing our name",shareSite:"Share Website ↗",cartTitle:"Quotation Request",cartItemsLabel:"Line items",sendCart:"Send Request via WhatsApp",clearCart:"Clear cart",add:"Add to Quote",detailsBtn:"Details",added:"Product added to your request",emptyCart:"Your request list is empty.",remove:"Remove",notes:"Notes",thread:"Thread type",choose:"Select",sendError:"Please enter your name and phone number.",copied:"Link copied",shared:"Unable to share; you can copy the website link.",pipeName:"Pipes to specification",sentEmpty:"Add at least one product before sending.",qty:"Quantity",product:"Product",material:"Material",size:"Size",schedule:"Schedule",grade:"Grade",length:"Length"}
  };
  const lang=()=>state.lang, tr=k=>t[lang()][k]||k, name=p=>p[lang()]||p.en, catName=c=>c[lang()]||c.en;
  const toast=(msg)=>{const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2600)};
  const wa=(message)=>window.open(`https://wa.me/${SITE_DATA.company.whatsapp}?text=${encodeURIComponent(message)}`,"_blank","noopener");
  const save=()=>{localStorage.setItem("jabr-cart",JSON.stringify(state.cart));renderCartCount()};
  function applyLanguage(){
    document.documentElement.lang=lang();document.documentElement.dir=lang()==="ar"?"rtl":"ltr";document.body.dir=document.documentElement.dir;
    $("#langToggle").textContent=lang()==="ar"?"EN":"عربي";
    $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[lang()][k])el.textContent=t[lang()][k]});
    $$("[data-placeholder]").forEach(el=>el.placeholder=tr(el.dataset.placeholder));
    $$("[data-company]").forEach(el=>el.textContent=SITE_DATA.company[lang()]);
    $$("[data-slogan]").forEach(el=>el.textContent=SITE_DATA.company.slogan[lang()]);
    $$("[data-address]").forEach(el=>el.textContent=SITE_DATA.company.address[lang()]);
    $("#searchInput").placeholder=tr("searchPlaceholder");
    renderTabs();renderProducts();renderCart();
  }
  function renderTabs(){
    const all={id:"all",ar:"كل المنتجات",en:"All Products"};
    $("#categoryTabs").innerHTML=[all,...SITE_DATA.categories].map(c=>`<button class="category-tab ${state.category===c.id?"active":""}" data-cat="${c.id}">${catName(c)}</button>`).join("");
    $$(".category-tab").forEach(b=>b.addEventListener("click",()=>{state.category=b.dataset.cat;renderTabs();renderProducts()}));
  }
  function renderProducts(){
    const q=state.query.toLowerCase().trim();
    const items=SITE_DATA.products.filter(p=>(state.category==="all"||p.category===state.category)&&(!q||[p.ar,p.en,p.descriptionAr,p.descriptionEn,p.materials?.join(" "),p.sizes,p.standards].join(" ").toLowerCase().includes(q)));
    $("#resultCount").textContent=items.length;$("#emptyState").hidden=items.length>0;
    $("#productGrid").innerHTML=items.map(p=>{const c=SITE_DATA.categories.find(x=>x.id===p.category);return `<article class="product-card"><div class="product-image"><img loading="lazy" src="${p.image}" alt="${name(p)}"><span class="product-category">${catName(c)}</span></div><div class="product-body"><h3>${p.ar}</h3><div class="product-en">${p.en}</div><p>${lang()==="ar"?p.descriptionAr:p.descriptionEn}</p><div class="product-actions"><button class="add-btn" data-add="${p.id}">＋ ${tr("add")}</button><button class="details-btn" data-details="${p.id}">${tr("detailsBtn")}</button></div></div></article>`}).join("");
    $$("[data-add]").forEach(b=>b.addEventListener("click",()=>addProduct(b.dataset.add)));
    $$("[data-details]").forEach(b=>b.addEventListener("click",()=>showDetails(b.dataset.details)));
  }
  function addProduct(id,extra={}){
    const p=SITE_DATA.products.find(x=>x.id===id);if(!p)return;
    const item={key:Date.now()+"-"+Math.random().toString(16).slice(2),id:p.id,ar:p.ar,en:p.en,category:p.category,qty:1,size:"",material:"",schedule:"",grade:"",length:"",thread:"",notes:"",...extra};
    state.cart.push(item);save();renderCart();toast(tr("added"));
  }
  function addPipe(e){
    e.preventDefault();addProduct("pipe-0",{ar:tr("pipeName"),en:"Pipes to specification",category:"pipes",qty:Math.max(1,Number($("#pipeQty").value)||1),size:$("#pipeSize").value,material:$("#pipeMaterial").value,schedule:$("#pipeSchedule").value,grade:$("#pipeGrade").value,length:$("#pipeLength").value,notes:""});
    openCart();
  }
  function renderCartCount(){$("#cartCount").textContent=state.cart.reduce((n,x)=>n+(Number(x.qty)||0),0)}
  function renderCart(){
    renderCartCount();$("#cartTotal").textContent=state.cart.length;
    if(!state.cart.length){$("#cartItems").innerHTML=`<div class="cart-empty">◇<br>${tr("emptyCart")}</div>`;return}
    $("#cartItems").innerHTML=state.cart.map(x=>`<div class="cart-item" data-key="${x.key}"><div class="cart-item-head"><div><h4>${lang()==="ar"?x.ar:x.en}</h4><small>${x.en}</small></div><button class="remove-item" data-remove="${x.key}" aria-label="${tr("remove")}">×</button></div><div class="cart-fields"><label>${tr("qty")}<input data-field="qty" type="number" min="1" value="${x.qty}"></label><label>${tr("size")}<input data-field="size" value="${x.size||""}" placeholder="e.g. 2 inch"></label><label>${tr("material")}<input data-field="material" value="${x.material||""}" placeholder="Carbon Steel"></label><label>${tr("schedule")}<input data-field="schedule" value="${x.schedule||""}" placeholder="SCH 40"></label><label class="wide">${tr("notes")}<textarea data-field="notes" rows="2">${x.notes||""}</textarea></label></div></div>`).join("");
    $$("[data-remove]").forEach(b=>b.addEventListener("click",()=>{state.cart=state.cart.filter(x=>x.key!==b.dataset.remove);save();renderCart()}));
    $$(".cart-item [data-field]").forEach(el=>el.addEventListener("change",()=>{const item=state.cart.find(x=>x.key===el.closest(".cart-item").dataset.key);item[el.dataset.field]=el.dataset.field==="qty"?Math.max(1,Number(el.value)||1):el.value;save()}));
  }
  function openCart(){$("#cartDrawer").classList.add("open");$("#overlay").classList.add("show");renderCart()}
  function closeCart(){$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("show")}
  function sendCart(){
    if(!state.cart.length){toast(tr("sentEmpty"));return}
    const lines=state.cart.map((x,i)=>`${i+1}. ${lang()==="ar"?x.ar:x.en}\n${tr("qty")}: ${x.qty}\n${tr("size")}: ${x.size||"-"}\n${tr("material")}: ${x.material||"-"}\n${tr("schedule")}: ${x.schedule||"-"}\n${tr("grade")}: ${x.grade||"-"}\n${tr("length")}: ${x.length||"-"}\n${tr("notes")}: ${x.notes||"-"}`).join("\n\n");
    wa(`${lang()==="ar"?"السلام عليكم ورحمة الله وبركاته.\nأرغب في طلب عرض سعر من شركة جبر لمعدات البترول المحدودة.\n\n":"Hello, I would like to request a quotation from JABR PETROLEUM EQUIPMENT LTD.\n\n"}${lines}\n\n${lang()==="ar"?"يرجى إرسال عرض السعر والتوافر ومدة التوريد.":"Please share your quotation, availability and lead time."}`);
  }
  function showDetails(id){
    const p=SITE_DATA.products.find(x=>x.id===id);if(!p)return;
    const chips=[p.sizes,p.standards,p.classes,p.threadTypes,...(p.materials||[])].filter(Boolean);
    $("#modalContent").innerHTML=`<div class="modal-product-image"><img src="${p.image}" alt="${name(p)}"></div><h2>${p.ar}</h2><div class="product-en">${p.en}</div><p>${lang()==="ar"?p.descriptionAr:p.descriptionEn}</p>${chips.length?`<div class="spec-chips">${chips.map(c=>`<span>${c}</span>`).join("")}</div>`:""}<button class="btn btn-gold full" id="modalAdd">＋ ${tr("add")}</button>`;
    $("#productModal").classList.add("open");$("#productModal").setAttribute("aria-hidden","false");$("#modalAdd").addEventListener("click",()=>{addProduct(id);$("#productModal").classList.remove("open")});
  }
  function fillSelect(id,values){$(id).innerHTML=values.map(v=>`<option value="${v}">${v}</option>`).join("")}
  $("#langToggle").addEventListener("click",()=>{state.lang=lang()==="ar"?"en":"ar";localStorage.setItem("jabr-lang",lang());applyLanguage()});
  $("#searchInput").addEventListener("input",e=>{state.query=e.target.value;renderProducts()});
  $("#resetFilters").addEventListener("click",()=>{state.category="all";state.query="";$("#searchInput").value="";renderTabs();renderProducts()});
  $("#pipeForm").addEventListener("submit",addPipe);
  fillSelect("#pipeSize",SITE_DATA.pipeOptions.sizes);fillSelect("#pipeSchedule",SITE_DATA.pipeOptions.schedules);fillSelect("#pipeGrade",SITE_DATA.pipeOptions.grades);fillSelect("#pipeLength",SITE_DATA.pipeOptions.lengths);fillSelect("#pipeMaterial",SITE_DATA.pipeOptions.materials);
  $("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);$("#sendCart").addEventListener("click",sendCart);
  $("#clearCart").addEventListener("click",()=>{state.cart=[];save();renderCart()});
  $("#modalClose").addEventListener("click",()=>$("#productModal").classList.remove("open"));
  $("#productModal").addEventListener("click",e=>{if(e.target.id==="productModal")$("#productModal").classList.remove("open")});
  $("#heroWhatsApp").addEventListener("click",()=>wa(lang()==="ar"?"السلام عليكم، أود الاستفسار عن منتجات شركة جبر لمعدات البترول.":"Hello, I would like to inquire about Jabr Petroleum products."));
  $("#floatingWhatsApp").addEventListener("click",()=>wa(lang()==="ar"?"السلام عليكم، أود التواصل مع شركة جبر لمعدات البترول.":"Hello, I would like to contact Jabr Petroleum."));
  $("#quickForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.currentTarget),name=f.get("name").trim(),phone=f.get("phone").trim();if(!name||!phone){toast(tr("sendError"));return}const msg=lang()==="ar"?`السلام عليكم، لدي استفسار لشركة جبر لمعدات البترول.\nالاسم: ${name}\nالشركة: ${f.get("company")||"-"}\nالهاتف: ${phone}\nنوع المنتج: ${f.get("product")||"-"}\nالتفاصيل: ${f.get("details")||"-"}`:`Hello Jabr Petroleum,\nName: ${name}\nCompany: ${f.get("company")||"-"}\nPhone: ${phone}\nProduct: ${f.get("product")||"-"}\nDetails: ${f.get("details")||"-"}`;wa(msg)});
  $("#shareSite").addEventListener("click",async()=>{try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);toast(tr("copied"))}}catch(e){toast(tr("shared"))}});
  $("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("show"));
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("show")));
  document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus()}if(e.key==="Escape"){closeCart();$("#productModal").classList.remove("open")}});
  $("#year").textContent=new Date().getFullYear();
  applyLanguage();
})();
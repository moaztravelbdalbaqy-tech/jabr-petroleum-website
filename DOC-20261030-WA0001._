const SITE_DATA = {
  company: {
    ar: "شركة جبر لمعدات البترول المحدودة",
    en: "JABR PETROLEUM EQUIPMENT LTD.",
    slogan: { ar: "الثقة والجودة في كل منتج يحمل اسمنا", en: "Trust and quality in every product bearing our name" },
    phone: "+249912545828",
    phoneDisplay: "+249 912545828",
    phone2: "+249121992250",
    phone2Display: "+249 121992250",
    address: { ar: "السجانة – شرق شارع النص – مقابل بنك الجزيرة الأردني", en: "Al-Sajana – East of Share' Al-Nas – Opposite Jordan Ahli Bank" },
    whatsapp: "249912545828"
  },
  categories: [
    { id:"pipes", ar:"المواسير والمنتجات المعدنية", en:"Pipes & Metal Products", descAr:"مواسير الصلب الكربوني والاستانلس والمجلفن ومنتجات المعادن.", descEn:"Carbon steel, stainless steel and galvanized pipes and metal products.", image:"assets/images/pipes.svg" },
    { id:"flanges", ar:"الفلنشات", en:"Flanges", descAr:"فلنشات بمقاسات وفئات ضغط متعددة وفق المعايير المطلوبة.", descEn:"Flanges in multiple sizes and pressure classes to applicable standards.", image:"assets/images/flanges.svg" },
    { id:"buttweld", ar:"أكواع وتيهات ومخفضات اللحام", en:"Butt-Weld Fittings", descAr:"تجهيزات لحام لتوصيلات خطوط التشغيل.", descEn:"Weld fittings for industrial pipeline connections.", image:"assets/images/fittings.svg" },
    { id:"valves", ar:"الصمامات (البلوف)", en:"Valves", descAr:"صمامات بخامات وأنواع مختلفة حسب متطلبات التشغيل.", descEn:"Valves in different types and materials for operating requirements.", image:"assets/images/valves.svg" },
    { id:"gaskets", ar:"الجوانات والأوشاش والسيلات", en:"Gaskets & Seals", descAr:"حلول إحكام وربط لمجموعة واسعة من التطبيقات.", descEn:"Sealing solutions for a wide range of applications.", image:"assets/images/gaskets.svg" },
    { id:"threaded", ar:"وصلات البخار الثقيلة المقلوظة", en:"Heavy-Duty Threaded Steam Fittings", descAr:"وصلات مقلوظة للخدمات الصناعية والبخار.", descEn:"Threaded fittings for industrial and steam services.", image:"assets/images/fittings.svg" },
    { id:"connectors", ar:"الوصلات والإضافات", en:"Connectors & Accessories", descAr:"وصلات مرنة وصلبة وإضافات لتركيب وإصلاح الخطوط.", descEn:"Flexible and rigid connectors and pipeline accessories.", image:"assets/images/connectors.svg" },
    { id:"instrumentation", ar:"معدات القياس والضخ والبخار والدعم", en:"Instrumentation, Pumps & Pipe Supports", descAr:"معدات القياس والتحكم والضخ والبخار ودعم المواسير.", descEn:"Instrumentation, pumping, steam equipment and pipe supports.", image:"assets/images/instrumentation.svg" }
  ],
  products: [
    ...[
      ["مواسير صلب كربوني ملحومة وغير ملحومة","Carbon Steel Welded & Seamless Pipes","pipes","مواسير صلب كربوني لخطوط التشغيل والتطبيقات الصناعية.","Carbon steel pipes for industrial and process applications."],
      ["مواسير خطوط البترول والغاز والبخار","Oil, Gas & Steam Line Pipes","pipes","مواسير لخطوط البترول والغاز والبخار حسب المواصفة المطلوبة.","Pipes for oil, gas and steam lines to required specifications."],
      ["مواسير إنزال الآبار الجوفية","Casing Pipes","pipes","مواسير تغليف الآبار وفق متطلبات المشروع.","Well casing pipes according to project requirements."],
      ["مواسير مجلفنة","Galvanized Pipes","pipes","مواسير مجلفنة لمختلف الاستخدامات.","Galvanized pipes for various applications."],
      ["مواسير استانلس ستيل 304 / 316 / 316L","Stainless Steel Pipes 304 / 316 / 316L","pipes","خيارات استانلس ستيل بدرجات متعددة.","Stainless steel options in multiple grades."],
      ["صاج وألواح استانلس ستيل","Stainless Steel Sheets & Plates","pipes","ألواح استانلس لامعة ومطفية بدرجات 304 و316.","Bright and matte stainless sheets in 304 and 316 grades."],
      ["أعمدة حديد واستانلس ستيل","Steel & Stainless Steel Bars","pipes","أعمدة مربعة أو دائرية حسب الطلب.","Square or round bars as required."]
    ].map((p,i)=>({id:"pipe-"+i,ar:p[0],en:p[1],category:p[2],descriptionAr:p[3],descriptionEn:p[4],materials:["Carbon Steel","Stainless Steel","Galvanized Steel"],sizes:"1/2\\\" – 24\\\"",image:"assets/images/pipes.svg"})),
    ...[
      ["فلنشة منزلقة","Slip-On Flange"],["فلنشة رقبة لحام","Weld Neck Flange"],["فلنشة عمياء","Blind Flange"],["فلنشة قلاووظ","Threaded Flange"],["فلنشة رقبة طويلة","Long Weld Neck Flange"]
    ].map((p,i)=>({id:"flange-"+i,ar:p[0],en:p[1],category:"flanges",descriptionAr:"فلنشات وفق معايير التصنيع وفئات الضغط المطلوبة.",descriptionEn:"Flanges supplied to required manufacturing standards and pressure classes.",standards:"ASME B16.5 / ASME B16.47",classes:"Class 150 / 300 / 600",image:"assets/images/flanges.svg"})),
    ...[
      ["كوع 90° / 45° / 180°","90° / 45° / 180° Elbow"],["تيه متساوي","Equal Tee"],["تيه مخفض","Reducing Tee"],["مخفض","Reducer"]
    ].map((p,i)=>({id:"bw-"+i,ar:p[0],en:p[1],category:"buttweld",descriptionAr:"تُحدد المقاسات والسماكات والخامات حسب متطلبات خط التشغيل.",descriptionEn:"Sizes, schedules and materials are selected according to line requirements.",image:"assets/images/fittings.svg"})),
    ...[
      ["صمامات حديد زهر وحديد دكتايل","Cast Iron & Ductile Iron Valves"],["صمامات صلب كربوني","Carbon Steel Valves"],["صمامات استانلس ستيل","Stainless Steel Valves"]
    ].map((p,i)=>({id:"valve-"+i,ar:p[0],en:p[1],category:"valves",descriptionAr:"تتوفر الصمامات حسب النوع والخامة والمواصفة المطلوبة.",descriptionEn:"Valves supplied according to type, material and required specification.",image:"assets/images/valves.svg"})),
    ...[
      ["جوان حلقي","Ring Gasket"],["جوان مطاطي","Rubber Gasket"],["وش تيفلون","PTFE / Teflon Seal"],["وش مطاطي","Rubber Seal"],["جوان حراري","High-Temperature Gasket"]
    ].map((p,i)=>({id:"gasket-"+i,ar:p[0],en:p[1],category:"gaskets",descriptionAr:"منتجات إحكام حسب ظروف التشغيل والمقاس المطلوب.",descriptionEn:"Sealing products selected for operating conditions and required dimensions.",image:"assets/images/gaskets.svg"})),
    ...[
      ["كوع قلاووظ","Threaded Elbow"],["تي قلاووظ","Threaded Tee"],["جلبة وبوش قلاووظ","Threaded Coupling & Bushing"],["يونيون قلاووظ","Threaded Union"],["جلبة مخفضة","Reducing Coupling"],["بوش تخفيض","Reducing Bushing"]
    ].map((p,i)=>({id:"thread-"+i,ar:p[0],en:p[1],category:"threaded",descriptionAr:"يرجى تحديد نوع القلاووظ NPT أو BSPT أو BSPP.",descriptionEn:"Please specify thread type: NPT, BSPT or BSPP.",threadTypes:"NPT / BSPT / BSPP",image:"assets/images/fittings.svg"})),
    ...[
      ["وصلات مرنة","Flexible Connectors"],["وصلات صلبة","Rigid Connectors"],["وصلات فك وتركيب","Dismantling Joints"],["وصلات تمدد","Expansion Joints"],["مشابك إصلاح المواسير","Pipe Repair Clamps"],["وصلات كاملوك","Camlock Couplings"]
    ].map((p,i)=>({id:"conn-"+i,ar:p[0],en:p[1],category:"connectors",descriptionAr:"وصلات وإضافات لتركيب وصيانة خطوط الأنابيب.",descriptionEn:"Connectors and accessories for pipeline installation and maintenance.",image:"assets/images/connectors.svg"})),
    ...[
      ["مقاييس ضغط","Pressure Gauges"],["مقاييس حرارة","Temperature Gauges"],["مقاييس تدفق","Flow Meters"],["مضخات طرد مركزي","Centrifugal Pumps"],["وحدات ضخ متكاملة","Complete Pumping Units"],["مصافي الخطوط","Pipeline Strainers"],["عوامات ومعدات تحكم البخار","Steam Floats & Accessories"],["مصايد بخار","Steam Traps"],["مشابك المواسير (قفايز)","Pipe Clamps"],["علاقات وحمالات المواسير","Pipe Hangers & Supports"],["قواعد انزلاق المواسير","Pipe Slide Supports"],["كراسي المواسير","Pipe Shoes"],["مثبتات وملحقات التعليق","Anchors & Fixing Accessories"]
    ].map((p,i)=>({id:"inst-"+i,ar:p[0],en:p[1],category:"instrumentation",descriptionAr:"معدات صناعية يتم تحديدها وفق متطلبات المشروع والمواصفة.",descriptionEn:"Industrial equipment selected according to project requirements and specifications.",image:"assets/images/instrumentation.svg"}))
  ],
  pipeOptions: {
    sizes:["1/2\\\"","3/4\\\"","1\\\"","1.5\\\"","2\\\"","3\\\"","4\\\"","6\\\"","8\\\"","10\\\"","12\\\"","14\\\"","16\\\"","18\\\"","20\\\"","24\\\""],
    schedules:["SCH 10","SCH 20","SCH 40","SCH 80"],
    grades:["ASTM A106 Grade B","ASTM A53","API 5L Grade B"],
    lengths:["6 Meters","12 Meters"],
    materials:["Carbon Steel","Stainless Steel","Galvanized Steel"]
  }
};
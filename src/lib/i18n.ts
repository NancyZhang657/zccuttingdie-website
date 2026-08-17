export type Lang = 'en' | 'zh';

export const translations = {
  en: {
    // Nav
    nav_products: 'Products',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_lang: '中文',
    nav_quote: 'Get a Quote',

    // Hero — Glenmore-style bold brand statement
    hero_label: 'Est. 1994 · Jinan, China',
    hero_title: 'We manufacture die-cutting tools that keep your line running.',
    hero_sub: 'Sandwich dies, stripping tools, and engraving dies precision-built for BOBST, Heidelberg, Masterwork & Sanwa — trusted by packaging plants across three continents.',
    hero_cta1: 'Request a Quote',
    hero_cta2: 'View Products',

    // Services (Glenmore-style cards)
    services_label: 'What We Make',
    services_title: 'Tooling Built for Every Stage of Your Line',
    services: [
      { name: 'Wooden Cutting Die', desc: 'Precision wooden dies engineered for standard-volume carton and box cutting lines.', cta: 'View Service' },
      { name: 'Pertinax Counter Plate', desc: 'Resin-based counter plates that protect blades and deliver clean, consistent creasing.', cta: 'View Service' },
      { name: 'Sandwich Cutting Die', desc: 'Multi-layer steel-frame dies engineered for high-speed, high-volume packaging lines.', cta: 'View Service' },
      { name: 'Steel Counter Plate', desc: 'Hardened steel counter plates matched to sandwich dies for zero-deviation creasing.', cta: 'View Service' },
      { name: 'Stripping Tools', desc: 'High-speed internal waste stripping systems for zero-residue box production.', cta: 'View Service' },
      { name: 'Blanking Tools', desc: 'Precision blanking dies that cleanly separate inter-box scrap at full machine speed.', cta: 'View Service' },
      { name: 'Hot Stamping & Embossing Die', desc: 'Magnesium, copper & brass dies for luxury foil stamping and embossing finishes.', cta: 'View Service' },
      { name: 'Engraving Die', desc: 'Precision-engraved creasing and cutting rule blades ground to exact tolerance.', cta: 'View Service' },
      { name: 'Die Making Materials', desc: 'Pertinax boards, ejection rubber, and the core materials your die build depends on.', cta: 'View Service' },
      { name: 'Die Cutting Consumables', desc: 'Punches, blades, and consumable parts that keep your cutting line running.', cta: 'View Service' },
    ],

    // Equipment
    eq_label: 'Compatible With Your Equipment',
    eq_title: "Engineered for the World's Leading Die-Cutting Machines",
    eq_sub: 'From BOBST to Heidelberg, Masterwork to Sanwa — our dies are precision-manufactured to exact tolerance specs for each platform.',
    eq_also: 'Also compatible with Changrong · Sanhe · Guowang · Dayuan · Huatai and all major domestic platforms.',

    // Story (Glenmore-style narrative)
    story_label: 'Our Story',
    story_title: 'Three Decades. One Family Business. Zero Compromise on Precision.',
    story_body: [
      'Zhongcheng was founded in 1994 in Jinan, Shandong — a single workshop with a handful of skilled toolmakers and a simple ambition: build cutting dies that Chinese packaging plants could trust as much as imported German tooling.',
      'Three decades later, that ambition has scaled into a 3,500 m² facility with over 100 employees and 20+ national patents, but the founding principle hasn\'t changed — every die that leaves our floor is verified by hand before it ships.',
      'Today we serve packaging manufacturers across pharmaceuticals, tobacco, food, cosmetics, and electronics — from domestic printing houses to export clients in North America, the Middle East, and Southeast Asia. Same obsession with tolerance. Same commitment to zero unplanned downtime.',
    ],
    story_cta: 'Learn More About Us',

    // Why
    why_label: 'Why Zhongcheng',
    why_title: 'Precision That Speaks for Itself',
    why_sub: 'Four capabilities that define our position as the technical choice for packaging manufacturers worldwide.',
    why_p1_title: '30 Years of Precision',
    why_p1_body: 'Established in 1994, Zhongcheng has spent three decades refining die-cutting technology across pharmaceuticals, cigarettes, cosmetics, food, and electronics packaging.',
    why_p2_title: 'Zero Unplanned Downtime',
    why_p2_body: 'Every die ships with dimensional verification. Our 5–10 QC inspectors test each mold before dispatch. No surprises on your production floor.',
    why_p3_title: '20+ National Patents',
    why_p3_body: 'Our 31–40 R&D staff continuously develop new die architectures. The result: cutting-edge solutions that keep your line ahead of the market.',
    why_p4_title: 'OEM Flexibility',
    why_p4_body: 'Custom die architectures for any box geometry. 3-day standard preparation time. From prototype to full production run.',

    // Sandwich
    sandwich_label: 'Flagship Product',
    sandwich_title: 'Sandwich Die — The German-Quality Choice',
    sandwich_body: 'Our sandwich die system delivers superior cut quality at the highest machine speeds. Precision-machined channels, interchangeable knife strips, and seamless compatibility with leading international platforms.',
    sandwich_cta: 'Get Sandwich Die Quote',
    sandwich_specs: [
      'Speed: up to 9,000 cuts/hr (BOBST ideal conditions)',
      'Material: HSS + precision-ground board',
      'Compat: BOBST · Masterwork · Heidelberg',
      'Standard prep: 3 days',
    ],

    // Clients
    clients_label: 'Trusted by Industry Leaders',
    clients_title: 'From Jinan to Global Packaging Plants',
    clients_market_label: 'Market Distribution',
    clients_industries_label: 'Industries Served',

    // Testimonials — Marbach-style carousel
    testimonials_label: 'What Clients Say',
    testimonials_title: 'Trusted by Professionals Worldwide',
    testimonials: [
      { name: 'Packaging Manager', role: 'United States', text: 'Zhongcheng delivered exactly to spec for our thick-material cutting needs. Response time is fast and technical support is solid.' },
      { name: 'Production Director', role: 'Canada', text: 'The sandwich die configuration was perfect. Quality matched our expectations and delivery was on schedule.' },
      { name: 'Operations Manager', role: 'France', text: 'Exceptional precision on our luxury packaging dies. The team\'s expertise with BOBST setups is genuinely impressive.' },
    ],

    // About
    about_label: 'Company Profile',
    about_title: 'A Manufacturer Built on Three Decades of Innovation',
    about_sub: 'Since 1994, Jinan Zhongcheng Precision Mould has led the die-cutting industry through technological innovation — serving pharmaceutical, cigarette, food, cosmetics, and electronics packaging clients worldwide.',
    about_port: 'Nearest export port:',
    about_since: 'Exporting since:',
    about_currency: 'Accepted currencies:',

    // Contact section
    contact_label: 'Get in Touch',
    contact_title: "Let's Get Started on Your Project",
    contact_sub: 'Our technical team responds within 24 hours. Send your specifications and we\'ll provide a precision-matched solution for your production line.',
    contact_btn: 'Contact Supplier',
    contact_alibaba: 'Message on Alibaba',
    contact_phone_label: 'Phone / WeChat / WhatsApp',
    contact_response: '24h response guaranteed',

    // Inquiry CTA
    inquiry_label: 'Ready to Optimize Your Line?',
    inquiry_title: 'Ready to Optimize Your Die-Cutting Line?',
    inquiry_sub: 'Send us your specifications — we\'ll respond within 24 hours with a tailored quote and technical recommendation.',
    inquiry_cta: 'Send Inquiry on Alibaba',
    inquiry_payment_label: 'Accepted Payments',

    // Dynamic
    dynamic_label: 'Our Products',
    dynamic_title: 'Browse Our Full Die-Cutting Catalog',
    dynamic_sub: 'Live product listings from our Alibaba storefront — updated in real time.',

    // Stats
    stat_factory: 'Factory Area',
    stat_employees: 'Employees',
    stat_rd: 'R&D Staff',
    stat_patents: 'National Patents',

    // Floating quote rail
    rail_quote: 'Get a Quote',
    rail_whatsapp: 'WhatsApp',
    rail_phone: 'Call Us',
    rail_wechat: 'WeChat',
  },

  zh: {
    // Nav
    nav_products: '产品中心',
    nav_about: '关于我们',
    nav_contact: '联系我们',
    nav_lang: 'English',
    nav_quote: '获取报价',

    // Hero
    hero_label: '创立于1994年 · 中国济南',
    hero_title: '我们制造让您的生产线持续运转的模切工具。',
    hero_sub: '三明治刀模、清废分盒工具、精密电雕版，精准适配BOBST、海德堡、长荣MK、三和——全球三大洲包装工厂的信赖之选。',
    hero_cta1: '立即询价',
    hero_cta2: '浏览产品',

    // Services
    services_label: '我们的产品',
    services_title: '覆盖生产线每一环节的精密工具',
    services: [
      { name: '木板刀模', desc: '为标准产能纸箱包装生产线打造的精密木板刀模。', cta: '查看详情' },
      { name: '树脂底模', desc: '保护刀线、实现清晰一致压痕效果的树脂底模。', cta: '查看详情' },
      { name: '三明治刀模', desc: '为高产能包装生产线打造的多层钢架三明治刀模。', cta: '查看详情' },
      { name: '钢底模', desc: '与三明治刀模精准匹配的硬质钢底模，压痕零偏差。', cta: '查看详情' },
      { name: '清废工具', desc: '高速内废清除系统，实现零残留生产。', cta: '查看详情' },
      { name: '分盒工具', desc: '全速运转下精准分离盒间废料的分盒刀模。', cta: '查看详情' },
      { name: '烫金凹凸版', desc: '镁/铜/黄铜材质刀模，适配高端烫金与压凸工艺。', cta: '查看详情' },
      { name: '精密电雕版', desc: '精密雕刻压痕与切割刀线，公差控制严谨。', cta: '查看详情' },
      { name: '制模材料', desc: '树脂底板、弹力胶条等制模所需的核心材料。', cta: '查看详情' },
      { name: '模切耗材', desc: '冲头、刀片等保障生产线持续运转的耗材配件。', cta: '查看详情' },
    ],

    // Equipment
    eq_label: '设备兼容性',
    eq_title: '适配全球主流模切设备',
    eq_sub: '无论是BOBST还是海德堡、长荣MK还是三和，我们的刀模均按各平台精确公差规格定制生产。',
    eq_also: '同时兼容国望、大源、华泰精工等国内主流机型。',

    // Story
    story_label: '我们的故事',
    story_title: '三十年匠心传承，精度从未妥协',
    story_body: [
      '众诚创立于1994年，起步于济南一间小小的模切车间——几位技艺精湛的师傅，一个朴素的愿望：做出让国内包装企业信赖、不输德系进口刀模的产品。',
      '三十年后，这份初心壮大成一座3500平方米的工厂，超过百名员工，20余项国家专利。但最初的信条从未改变——每一套出厂的刀模，都经过人工逐一核验。',
      '今天，我们服务医药、烟草、食品、化妆品及电子包装等领域，客户遍及国内印刷企业，也包括北美、中东、东南亚的外贸客户。对公差的执着、对零计划外停机的承诺，始终如一。',
    ],
    story_cta: '了解更多关于我们',

    // Why
    why_label: '为什么选择众诚',
    why_title: '实力说话，品质为证',
    why_sub: '四大核心优势，奠定我们作为全球包装制造商首选技术供应商的地位。',
    why_p1_title: '三十年精密积累',
    why_p1_body: '创立于1994年，众诚精密模具深耕刀模行业三十年，服务领域覆盖医药、烟草、食品、化妆品及电子包装。',
    why_p2_title: '零计划外停机',
    why_p2_body: '每套刀模出厂前均经5-10名质检员逐一检验，确保尺寸精度，杜绝生产线意外停机。',
    why_p3_title: '20余项国家专利',
    why_p3_body: '31-40名研发人员持续创新，不断开发新型刀模结构，让您的生产线始终保持技术领先。',
    why_p4_title: 'OEM定制灵活',
    why_p4_body: '任意纸箱结构均可定制，标准交期3天，从打样到批量生产全程跟进。',

    // Sandwich
    sandwich_label: '明星产品',
    sandwich_title: '三明治刀模——德系品质之选',
    sandwich_body: '众诚三明治刀模在高速运转下依然保持卓越切割精度。精密加工的导向槽、可互换刀条，与国际主流平台无缝兼容。',
    sandwich_cta: '获取三明治刀模报价',
    sandwich_specs: [
      '速度：BOBST理想工况下可达9000压/小时',
      '材质：高速钢 + 精密研磨板材',
      '兼容：BOBST · 长荣MK · 海德堡',
      '标准交期：3天',
    ],

    // Clients
    clients_label: '行业领导者的信赖之选',
    clients_title: '从济南走向全球包装工厂',
    clients_market_label: '市场分布',
    clients_industries_label: '服务行业',

    // Testimonials
    testimonials_label: '客户评价',
    testimonials_title: '全球客户的共同选择',
    testimonials: [
      { name: '包装经理', role: '美国', text: '众诚完全按规格交付，厚料切割需求得到精准满足，响应速度快，技术支持专业可靠。' },
      { name: '生产总监', role: '加拿大', text: '三明治刀模方案非常完美，品质符合预期，交期准时。' },
      { name: '运营经理', role: '法国', text: '高端包装刀模的精度令人印象深刻，团队对BOBST设备的专业理解让人信服。' },
    ],

    // About
    about_label: '公司简介',
    about_title: '三十年创新积淀的制造企业',
    about_sub: '自1994年起，济南众诚精密模具始终以技术创新引领行业，服务全球医药、烟草、食品、化妆品及电子包装客户。',
    about_port: '最近出口港：',
    about_since: '出口起始年：',
    about_currency: '接受币种：',

    // Contact section
    contact_label: '联系我们',
    contact_title: '开启您的项目合作',
    contact_sub: '我们的技术团队24小时内响应。发送您的规格需求，我们将为您提供精准匹配的解决方案。',
    contact_btn: '联系供应商',
    contact_alibaba: '阿里巴巴询盘',
    contact_phone_label: '电话 / 微信 / WhatsApp',
    contact_response: '24小时响应保障',

    // Inquiry CTA
    inquiry_label: '准备好了吗？',
    inquiry_title: '立即优化您的模切生产线',
    inquiry_sub: '发送规格需求，24小时内回复定制报价和技术方案。',
    inquiry_cta: '阿里巴巴询价',
    inquiry_payment_label: '接受付款方式',

    // Dynamic
    dynamic_label: '我们的产品',
    dynamic_title: '浏览完整模切产品目录',
    dynamic_sub: '实时同步阿里巴巴店铺最新产品。',

    // Stats
    stat_factory: '工厂面积',
    stat_employees: '员工人数',
    stat_rd: '研发人员',
    stat_patents: '国家专利',

    // Floating quote rail
    rail_quote: '获取报价',
    rail_whatsapp: 'WhatsApp',
    rail_phone: '拨打电话',
    rail_wechat: '微信咨询',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

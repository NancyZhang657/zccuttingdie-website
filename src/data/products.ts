export interface ProductSpec {
  key: string; // English label
  keyZh: string; // Chinese label
  value: string; // English value
  valueZh: string; // Chinese value
}

export interface ProductFAQ {
  qEn: string;
  qZh: string;
  aEn: string;
  aZh: string;
}

export interface Product {
  slug: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  images: string[];
  specs: ProductSpec[];
  highlights: string[];
  highlightsZh: string[];
  faqs?: ProductFAQ[];
}

export const WHATSAPP_URL = 'https://wa.me/8613402211941';

export const products: Product[] = [
  {
    slug: 'sandwich-die',
    name: 'Sandwich Cutting Die',
    nameZh: '三明治刀模',
    description:
      'Customize sandwich molds for cigarette boxes, tobacco double button packaging, medicine boxes, medicine and cosmetics boxes, hangers, lanterns, and universal packaging. The blade can be replaced 5-10 times. A sandwich structure made of carbon fiber, steel, or resin, equipped with stamped steel blades and rubber, precision machined with customized patterns to ensure sharp and clean cutting during the box formation process.',
    descriptionZh:
      '定制三明治刀模，适用于烟盒、烟草双开翻盖包装、药板盒、医药及化妆品盒、挂钩、灯笼及各类通用包装。以木板、切割钢刀与弹力橡胶构成夹层结构，按客户图稿精密制作，切口锋利洁净，适用于夹层/异形盒成型。',
    images: [
      '/assets/images/sandwich-detail-1-refined.webp',
      '/assets/images/sandwich-detail-3-tight.webp',
      '/assets/images/sandwich-detail-2-brass-tight.webp',
      '/assets/images/sandwich-detail-4.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Carbon fiber/resin/aluminum plate/steel plate + steel blade',
        valueZh: '木板+钢刀，或碳纤维/树脂/铝板',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Customized size and shape',
        valueZh: '尺寸、形状、颜色均可定制',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '3-7 days',
        valueZh: '3-7天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Various die-cutting machines such as BOBST · Masterwork (MK) · Heidelberg · Sanwa · ETERNA',
        valueZh: '适配 BOBST · 长荣MK · 海德堡 · 三和 · 旭恒ETERNA 等平台',
      },
    ],
    highlights: [
      'Eco-friendly recycled paper box sandwich die with customizable thickness',
      'High-precision sharp cutting for cigarette pack double-tab packaging',
      'Stable, consistent molding results for cigarette packaging',
      'Packing box sandwich knife mold meeting packaging standards',
      'Custom shapes: pillbox, lantern, hanger, mini drug boxes, rigid box forming',
      '5-year mould life with OEM/ODM service and CAD drawing support',
    ],
    highlightsZh: [
      '环保再生纸盒三明治刀模，厚度可定制',
      '烟盒双开翻盖包装高精度锋利切割',
      '烟包成型稳定一致',
      '符合包装标准的纸盒三明治刀模',
      '异形定制：药板盒、灯笼、挂钩、迷你药盒、硬盒成型',
      '5年模具寿命，支持OEM/ODM及CAD图纸支持',
    ],
    faqs: [
      {
        qEn: 'How many times can a Zhongcheng sandwich die be re-ruled, and what is the expected lifespan?',
        qZh: '一套众诚三明治刀模可以重复换刀多少次？模框使用寿命多久？',
        aEn: 'A Zhongcheng sandwich die frame supports 5 to 10 knife replacements over a 3–5 year operational lifespan. Re-ruling the existing rigid frame lowers total tooling procurement costs by over 40% compared to repeatedly buying new wooden dies.',
        aZh: '一套众诚高刚性三明治模框支持重复换刀 5 至 10 次，模框服役寿命长达 3 至 5 年。相比每次翻单重新制作完整木板模，仅更换刀线能够帮助工厂降低 40% 以上的综合刀模采购成本。'
      },
      {
        qEn: 'What base materials can clients choose for the sandwich die structure?',
        qZh: '三明治刀模有哪些基底材质可供客户自选？',
        aEn: 'Clients can select between the cost-effective Resin Composite Sandwich Die (ideal for high-volume commercial folding cartons) and the premium Aerospace Carbon Fiber Sandwich Die (maximum thermal stability, lightweight handling, and ±0.05mm ultra-precision). Steel and aluminum alloy plates are also available.',
        aZh: '客户可根据订单预算自选高性价比的树脂三明治刀模（经济实用型，适合常规彩盒大批量翻单），或高端顶配的碳纤维三明治刀模（超轻量、超高刚性与耐温稳定性，公差严控在 ±0.05mm）。亦提供钢板与铝合金板定制选项。'
      },
      {
        qEn: 'What is the standard production lead time and supported CAD drawing formats?',
        qZh: '三明治刀模的标准生产交期是多久？支持哪些格式的图纸？',
        aEn: 'Standard manufacturing lead time is 3–7 days upon drawing confirmation. We support DXF, DWG, AI, PDF, CDR, and STEP file formats with free engineering pre-flight checks.',
        aZh: '在图纸确认后，标准生产交期为 3–7 天。我们支持 DXF, DWG, AI, PDF, CDR, STEP 等主流工程格式，并提供免费的工程前置审图与排版核验服务。'
      }
    ]
  },
  {
    slug: 'wooden-die',
    name: 'Wooden Die (Steel Rule Flat Die)',
    nameZh: '木板刀模',
    description:
      'Custom wooden dies (steel rule flat dies) made of plywood board with precision steel rule blades, used for die cutting cartons, corrugated boxes, paper boxes, tags, leather crafts, fabric accessories and jigsaw puzzles. Supports full customization of shape and thickness for flexo carton die cutting machines and packaging production lines.',
    descriptionZh:
      '定制木板刀模（钢线平压刀模），以多层木板配精密钢刀线制作，适用于纸箱、瓦楞纸箱、纸盒、吊牌、皮革工艺、布艺配件及拼图等模切。形状与厚度完全可定制，适配柔版纸箱模切机及包装生产线。',
    images: [
      '/assets/images/wooden-detail-1.webp',
      '/assets/images/wooden-detail-2.webp',
      '/assets/images/wooden-detail-3.webp',
      '/assets/images/wooden-detail-4.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Plywood (multilayer) + steel rule cutting blades',
        valueZh: '多层木板 + 钢刀线',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Custom shapes & dimensions; thickness customizable',
        valueZh: '形状尺寸可定制，厚度可调',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '2-5 days',
        valueZh: '2-5天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Die cutting machine or press machine or various die cutting platforms',
        valueZh: '柔版纸箱模切机、平压平模切机',
      },
    ],
    highlights: [
      'High-quality sharp cutting blades for clean, smooth edges',
      'Custom OEM design adaptable to different paper thicknesses',
      'Wear-resistant, heavy-duty construction for high-volume orders',
      'Wide application: packaging boxes, tags, puzzles, leather, earrings & home decoration',
      'Fast processing with precise steel rule placement',
    ],
    highlightsZh: [
      '高品质锋利刀线，切口干净平滑',
      'OEM定制设计，适配不同纸张厚度',
      '耐磨重型结构，适合大批量订单',
      '应用广泛：包装盒、吊牌、拼图、皮革、饰品及家居装饰',
      '刀线定位精准，加工快速',
    ],
    faqs: [
      {
        qEn: 'What type of wood board is used for Zhongcheng wooden laser dies?',
        qZh: '众诚激光木板刀模使用什么材质的板材？',
        aEn: 'We use 18mm high-density multilayer birch laser plywood equipped with hardened precision steel cutting rules (2 Pt / 3 Pt), ensuring ±0.1mm standard tolerance without board warping or delamination.',
        aZh: '我们采用 18mm 高密度多层激光桦木板，装嵌淬硬精密钢刀线（2 Pt / 3 Pt），加工公差严控在 ±0.1mm 标准精度以内，板材平整不易变形开裂。'
      },
      {
        qEn: 'When is a wooden laser die the best choice for packaging converters?',
        qZh: '激光木板模最适合什么样的包装印刷订单？',
        aEn: 'Wooden laser dies (±0.1mm tolerance) are the most cost-effective choice for short and medium runs under 500,000 cartons, fast prototyping, and general corrugated carton die-cutting.',
        aZh: '激光木板模（±0.1mm 公差）是 50 万盒以内的中小批量短版订单、快速打样验证以及常规瓦楞纸箱模切极具性价比的经济选择。'
      },
      {
        qEn: 'Does Zhongcheng custom-engineer dies for specific machine chaser dimensions?',
        qZh: '众诚木板模是否支持根据特定设备模框图纸定制？',
        aEn: 'Yes. We custom-engineer dies for all global and domestic flatbed presses (BOBST, Heidelberg, Sanwa, ETERNA, Dayuan, Guowang, Huatai) to exact machine chase drawings.',
        aZh: '完全支持。我们可根据 BOBST、海德堡、三和、旭恒以及大源、国望、华泰等国内外各品牌模切机的机台模框图纸 100% 精准定制交付。'
      }
    ]
  },
  {
    slug: 'steel-counter-plate',
    name: 'Steel Counter Plate',
    nameZh: '钢底模',
    description:
      'Customizable steel counter plate for packaging box creases and die-cutting machine platforms. The hardened steel plate is matched with the sandwich die to ensure that the crease lines are full and smooth, saving machine adjustment time and having a long production life.',
    descriptionZh:
      '尺寸可定制的钢底模，用于三明治刀模模切机，是包装盒压痕与冲切工具的背板/底模。淬硬钢板与三明治刀模精准匹配，保证清晰压痕线并延长使用寿命。',
    images: [
      '/assets/images/steel-detail-1.webp',
      '/assets/images/steel-detail-2.webp',
      '/assets/images/steel-detail-3.webp',
      '/assets/images/steel-detail-4.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Hardened steel plate',
        valueZh: '淬硬钢板',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Customized size & thickness per order',
        valueZh: '尺寸、厚度按订单定制',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '2-5 days',
        valueZh: '2-5天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Die cutting machine or press machine or various die cutting platforms',
        valueZh: '三明治刀模模切机（BOBST类平台）',
      },
    ],
    highlights: [
      'Custom size & thickness made to your drawing',
      'Pairs with sandwich die cutting machines for box creasing/punching',
      '5-year mould life, wear-resistant steel construction',
      'OEM/ODM with CAD (.DWG/.DXF/.PDF/.CDR) drawing support',
      '2-5 days delivery',
    ],
    highlightsZh: [
      '按图纸定制尺寸与厚度',
      '与三明治刀模模切机配套，用于纸盒压痕/冲切',
      '5年模具寿命，耐磨钢板结构',
      '支持OEM/ODM及CAD图纸（.DWG/.DXF/.PDF/.CDR）',
      '2-5天交期',
    ],
    faqs: [
      {
        qEn: 'What steel grade and hardness standard are used for Zhongcheng counter plates?',
        qZh: '众诚淬硬钢底模使用什么材质与硬度标准？',
        aEn: 'We precision-mill hardened alloy steel plates with 42–52 HRC hardness in standard thicknesses of 1.0mm, 1.2mm, and 1.5mm, delivering micro-milling groove tolerances of ±0.05mm.',
        aZh: '我们采用硬度达 42–52 HRC 的优质淬硬特种合金钢板，提供 1.0mm / 1.2mm / 1.5mm 等标准厚度，数控微铣压痕槽公差严控在 ±0.05mm 以内。'
      },
      {
        qEn: 'What are the main benefits of using a steel counter plate over matrix tape?',
        qZh: '相比普通压痕模条，使用淬硬钢底模有哪些核心优势？',
        aEn: 'Steel counter plates eliminate groove wear across millions of high-speed cuts (6,000–9,000 cuts/hr), prevent crease bursting, reduce make-ready setup time to under 15 minutes, and guarantee 100% crease consistency on repeat runs.',
        aZh: '淬硬钢底模可承受数百万次高速冲压（6,000–9,000 压/小时）而不产生槽口磨损，彻底杜绝压痕爆线与分层，将机台调压校版时间缩短至 15 分钟以内，并保障翻单压痕品质 100% 高度一致。'
      },
      {
        qEn: 'Does the steel counter plate follow Centerline II alignment standards?',
        qZh: '钢底模是否依循 Centerline II 中心定位标准？',
        aEn: 'Yes. All counter plates feature CNC-machined Centerline II registration pinholes (±0.05mm tolerance) for instant zero-tuning lock-in on BOBST, Heidelberg and leading Chinese presses.',
        aZh: '完全依循。所有钢底模均精密加工 Centerline II 中心定位销钉孔（±0.05mm 销钉公差），可在 BOBST、海德堡长荣及各大国产主流设备上实现即装即切、免调校快速锁紧。'
      }
    ]
  },
  {
    slug: 'pertinax-counter-plate',
    name: 'Pertinax Counter Plate',
    nameZh: '树脂底模',
    description:
      'Pertinax (resin-base) counter plates for die cutting — the durable resin underlay/creasing base film mounted under the cutting die. Lightweight and easy to handle for manual die cutting presses, industrial die cutting tools and packaging production. Custom size & thickness available, matching creasing base film for steel rule dies.',
    descriptionZh:
      '用于模切的树脂（酚醛）底模——安装在刀模下方的耐用树脂垫板/压痕底膜。轻便易操作，适用于手动模切机、工业模切工具及包装生产。尺寸与厚度可定制，与钢线刀模压痕底膜精准匹配。',
    images: [
      '/assets/images/pertinax-detail-1.webp',
      '/assets/images/pertinax-detail-2.webp',
      '/assets/images/pertinax-detail-3.webp',
      '/assets/images/pertinax-detail-4-clean.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Pertinax resin base (high-density resin board)',
        valueZh: '树脂底板（高密度树脂板）',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Custom size & thickness supported',
        valueZh: '尺寸、厚度均可定制',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '2-3 days',
        valueZh: '2-3天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Die cutting machine or press machine or various die cutting platforms',
        valueZh: '手动模切机、工业模切机',
      },
    ],
    highlights: [
      'High strength, light weight — easy handling on manual die cutting presses',
      'High-density, wear & pressure resistant resin construction',
      'Custom size & thickness, OEM/ODM matching creasing base film',
      'High precision creasing for cartons, cigarette packs, cosmetic and luxury boxes',
      'Factory direct wholesale prices',
    ],
    highlightsZh: [
      '高强度、轻量化——手动模切机上操作轻松',
      '高密度树脂结构，耐磨耐压',
      '尺寸厚度可定制，OEM/ODM匹配压痕底膜',
      '纸箱、烟包、化妆品及高端礼盒高精度压痕',
      '工厂直供批发价',
    ],
    faqs: [
      {
        qEn: 'What packaging applications are best suited for Pertinax resin counter plates?',
        qZh: '树脂底模（Pertinax 压痕板）最适合哪些包装领域？',
        aEn: 'Pertinax counter plates are ideal for high-precision pharmaceutical medicine boxes, cosmetics cartons, and cigarette packs running on high-speed folder-gluers (400–650 cartons/min) to achieve zero paper dust and burr-free creasing.',
        aZh: '树脂底模极适用于对成型要求严苛的医药药盒、化妆品包装盒及精品烟包，配合运行车速达 400–650 盒/分钟的高速自动折盒装盒机，实现无纸屑粉尘、无毛刺的高洁净度顺畅折叠。'
      },
      {
        qEn: 'How does Pertinax compare with hardened steel counter plates?',
        qZh: '树脂底模与淬硬钢底模相比有什么特点与优势？',
        aEn: 'Pertinax offers rapid CNC milling turn-around (2–3 days), lower initial tooling cost, and high groove accuracy (±0.05mm), making it ideal for medium-to-long runs up to 1,000,000 impressions.',
        aZh: '树脂底模具有加工周期极快（2–3 天交期）、初始投入成本低、铣槽精度高（±0.05mm）等优势，是 100 万压以内中长版高精包装订单极具性价比的底模方案。'
      },
      {
        qEn: 'Can Pertinax counter plates be reused for repeat orders?',
        qZh: '树脂底模是否支持翻单重复使用？',
        aEn: 'Yes. With proper workshop cleaning and flat storage away from direct moisture, Pertinax plates can be remounted multiple times with consistent registration.',
        aZh: '完全可以。车间只需在下机后清理槽内纸屑并在避光防潮环境下平整存放，翻单时即可重新快速装机定位使用，保持稳定的套准精度。'
      }
    ]
  },
  {
    slug: 'stripping-tools',
    name: 'Stripping Tools',
    nameZh: '清废工具',
    description:
      'Stripping tools for removing inner-hole waste from die-cut cartons and boxes. Manual and pneumatic versions remove internal scrap after die cutting — clean, low-noise, high-speed operation for gift boxes, food packaging boxes and general box manufacturing lines.',
    descriptionZh:
      '用于清除模切纸盒内孔废料的清废工具。手动与气动两种版本，模切后快速清除内部废料——清洁、低噪音、高速运转，适用于礼盒、食品包装盒及通用纸盒生产线。',
    images: [
      '/assets/images/stripping-detail-1-tight.webp',
      '/assets/images/stripping-detail-2-tight.webp',
      '/assets/images/stripping-detail-3-tight.webp',
      '/assets/images/stripping-detail-4-tight.webp',
    ],
    specs: [
      {
        key: 'Material / Build',
        keyZh: '材质/结构',
        value: 'Ergonomic, lightweight, industrial-grade heavy-duty construction',
        valueZh: '人体工学、轻量化、工业级重型结构',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Manual & pneumatic models; custom / multi-functional available',
        valueZh: '手动与气动机型，支持定制/多功能款',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '2-3 days',
        valueZh: '2-3天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Various die-cutting machines such as BOBST · Masterwork (MK) · Heidelberg · Sanwa · ETERNA',
        valueZh: '纸盒制造/模切生产线（BOBST · 长荣MK · 海德堡 · 旭恒ETERNA）',
      },
    ],
    highlights: [
      'Pneumatic high-speed box internal cleaner / scrap stripper',
      'Low noise operation, comfortable ergonomic handles',
      'Reusable, portable and multi-functional scrap removal',
      'Sanitary stripping for food & gift packaging boxes',
      'Wear-resistant heavy-duty models for industrial use',
    ],
    highlightsZh: [
      '气动高速盒内清废器',
      '低噪音运转，人体工学手柄舒适',
      '可重复使用、便携、多功能清废',
      '食品与礼品包装盒洁净清废',
      '工业级耐磨重型型号',
    ],
    faqs: [
      {
        qEn: 'What is included in a Zhongcheng dynamic stripping tool set?',
        qZh: '众诚全套动态清废工具包含哪些部件？',
        aEn: 'A complete set includes the upper dynamic stripping board with quick-lock pins/pushers and the lower custom steel/wood stripping grid, designed as an integrated pair with ±0.1mm alignment precision.',
        aZh: '全套动态清废工具包含带快速锁紧清废顶针/压块的上清废板，以及高刚性下清废金属网格底框，采用上下模 1:1 联动匹配设计，网格公差控制在 ±0.1mm 以内。'
      },
      {
        qEn: 'How do Zhongcheng stripping tools prevent waste jams at 9,000 cuts/hour?',
        qZh: '众诚清废工具如何在 9,000 压/小时高速运转下避免卡纸？',
        aEn: 'We use 1:1 dynamic CAD interference simulation to verify waste drop trajectories and optimize gripper margin clearance (standard 9–15mm), ensuring vertical waste discharge without rebound.',
        aZh: '我们通过 CAD 1:1 动态落料干涉校验与咬口避让余量（标准 9mm–15mm）精准设计，确保高速冲压下废料垂直顺畅下坠至输送带，防止废料飞溅反弹卡机。'
      },
      {
        qEn: 'Are your stripping tools compatible with international and domestic presses?',
        qZh: '清废模具是否适配国内外各大主流品牌模切机？',
        aEn: 'Yes. We supply pre-aligned stripping frames for BOBST (Novacut/Expertcut), Heidelberg MK Promatrix, ETERNA, Sanwa, Dayuan, Guowang, and Huatai.',
        aZh: '完全支持。我们为 BOBST、海德堡长荣 Promatrix、旭恒、三和以及大源、国望、华泰等国内外设备提供免调校的预对齐清废模组。'
      }
    ]
  },
  {
    slug: 'blanking-tools',
    name: 'Blanking Tools',
    nameZh: '分盒工具',
    description:
      'Industrial blanking tools that separate die-cut boxes from waste and strip internal scrap — heavy-duty, easy-to-operate equipment for packaging production. Pneumatic and automatic models separate box blanks from the surrounding cardboard skeleton at high speed, including food packaging and multi-material (paper/plastic) applications.',
    descriptionZh:
      '工业级分盒工具，将模切纸盒与废料分离并清除内部废料——重型、易操作，适用于包装生产。气动与自动机型可高速将盒坯与纸板骨架分离，支持食品包装及纸/塑等多材质应用。',
    images: [
      '/assets/images/blanking-tools-detail-1-refined.webp',
      '/assets/images/blanking-tools-bottom-pharma.webp',
      '/assets/images/blanking-tools-detail-3.webp',
      '/assets/images/blanking-tools-top-2.webp',
    ],
    specs: [
      {
        key: 'Material / Build',
        keyZh: '材质/结构',
        value: 'Heavy-duty, easy-operation industrial construction',
        valueZh: '重型、易操作的工业级结构',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Pneumatic & automatic models; OEM/ODM customizable',
        valueZh: '气动与自动机型，支持OEM/ODM定制',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '3-7 days',
        valueZh: '3-7天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Various die-cutting machines such as BOBST · Masterwork (MK) · Heidelberg · Sanwa · ETERNA',
        valueZh: '纸、塑、食品盒模切线（BOBST · 长荣MK · 海德堡 · 旭恒ETERNA）',
      },
    ],
    highlights: [
      'High-speed box separating & waste stripping for production lines',
      'Precision pneumatic blanking for high-end packaging',
      'All-in-one box separator & scrap remover',
      'Heavy-duty durable carton box stripper for long-term waste separation',
      'Multi-material support: paper, plastic, food boxes & disposable cups',
      'OEM/ODM customizable box separators',
    ],
    highlightsZh: [
      '生产线高速分盒与清废',
      '高端包装精密气动分盒',
      '分盒清废一体机',
      '经久耐用的重型纸箱清废分离',
      '多材质支持：纸、塑、食品盒及一次性杯',
      'OEM/ODM可定制分盒机',
    ],
    faqs: [
      {
        qEn: 'What is the main function of upper and lower dynamic blanking tools?',
        qZh: '动态分盒模具（Blanking Tools）的主要功能是什么？',
        aEn: 'Dynamic blanking tools automatically separate multi-up nested carton blanks from the sheet skeleton, stacking clean, non-overlapping carton bundles directly onto the delivery table for immediate folder-gluing.',
        aZh: '动态分盒模具能够在模切机全清废分盒工位上，将多联排版中的成品盒坯自动与废边骨架分离，整齐码放成叠并直接输出，大幅节省后道人工撕边成本。'
      },
      {
        qEn: 'What precision tolerance is maintained on blanking grids?',
        qZh: '分盒模具的网格对齐公差是多少？',
        aEn: 'Our upper pushers and lower universal/dedicated grid bars are CNC-machined to ±0.1mm grid tolerance, preventing carton edge scuffing or tab snagging.',
        aZh: '上模推块与下模专用金属网格均采用高精数控加工，网格尺寸公差严控在 ±0.1mm 以内，杜绝盒片边缘刮花或折翼勾挂卡顿。'
      },
      {
        qEn: 'What lead time and machine specifications are needed for order placement?',
        qZh: '订购分盒模具需要提供什么参数？交期是多久？',
        aEn: 'Simply provide your die-cutting CAD layout (DXF/DWG/PDF) and machine model name. Standard manufacturing lead time is 3–7 days.',
        aZh: '客户只需提供模切工程排版图（DXF/DWG/PDF）以及设备型号，标准生产交期为 3–7 天。'
      }
    ]
  },
  {
    slug: 'hot-stamping-embossing-die',
    name: 'Hot Stamping and Embossing Die',
    nameZh: '烫金压纹版',
    description:
      'Hot foil stamping and embossing dies in brass, aluminum and magnesium plate — custom logo engraving blocks for stamping foil onto leather, paper, fabric, gift boxes, cigarette packs and cosmetic boxes. Precision-cut blocks deliver crisp foil marks and embossed relief on every run.',
    descriptionZh:
      '黄铜、铝、镁板材质的烫金压纹版——定制Logo雕刻版，用于皮革、纸张、布料、礼盒、烟包及化妆品盒的烫金。精密雕刻版每次运转都能呈现清晰的烫印与压凸效果。',
    images: [
      '/assets/images/hot-stamping-detail-1-finishes-balanced.webp',
      '/assets/images/hot-stamping-detail-2-samples.webp',
      '/assets/images/hot-stamping-packaging-applications-latest.webp',
      '/assets/images/hot-stamping-detail-3-embossed-applications.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Brass foil blocks, aluminum, magnesium, aluminum-magnesium alloy',
        valueZh: '黄铜烫印版、铝板、镁板、铝镁合金',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Custom sizes & shapes (small $9-28, large/complex $18-219)',
        valueZh: '尺寸形状可定制（小型$9-28，大型/复杂$18-219）',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '2-5 days',
        valueZh: '2-5天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Hot stamping machine, die-cutting machine, press machine, or various die-cutting platforms',
        valueZh: '烫金机/压凸机',
      },
    ],
    highlights: [
      'Solid brass / aluminum / magnesium blocks for sharp foil marks',
      'Long service life for leather & paper processing',
      'Custom logo and pattern engraving, OEM design wholesale',
      'High-precision embossing for cosmetics, cigarette packs & gift boxes',
      'Works for DIY crafts, fabric decoration and industrial hot stamping',
    ],
    highlightsZh: [
      '实心黄铜/铝/镁版，烫印清晰锐利',
      '皮革与纸张加工超长使用寿命',
      '定制Logo与图案雕刻，OEM设计批发',
      '化妆品、烟包与礼盒高精度压凸',
      '适用于DIY手工、布料装饰及工业烫金',
    ],
    faqs: [
      {
        qEn: 'What materials are available for hot stamping and embossing dies?',
        qZh: '烫金压纹版有哪些材质可选？',
        aEn: 'We provide precision CNC-engraved solid brass plates (highest durability for luxury cosmetics & cigarette packs), magnesium plates (fast turnaround for medium runs), and aerospace aluminum alloy plates.',
        aZh: '我们提供高精度数控雕刻实心黄铜版（耐磨耐高温，最适用于高端化妆品与烟包长版订单）、镁板（经济快捷型）以及特种铝合金板。'
      },
      {
        qEn: 'Can hot stamping and micro-embossing be combined into a single pass?',
        qZh: '烫金与微雕压凸是否支持一版一次成型？',
        aEn: 'Yes. We engineer combination brass dies (stamping + embossing in one stroke) with micro-relief depth calibration (±0.05mm) to save press run time.',
        aZh: '完全支持。我们可制作烫金压凸一体雕刻版，雕刻深度公差达 ±0.05mm，实现烫金与微浮雕立体成型一次冲压完成，大幅提升生产效率。'
      },
      {
        qEn: 'What is the lead time for custom logo and texture embossing blocks?',
        qZh: '定制 Logo 与纹理雕刻烫金版的交期是多久？',
        aEn: 'Standard production lead time is 2–5 days upon CAD vector approval.',
        aZh: '在矢量图稿确认后，标准加工制作交期为 2–5 天。'
      }
    ]
  },
  {
    slug: 'engraving-die',
    name: 'Engraving Die (Engraving Blade)',
    nameZh: '电雕版（雕刻刀）',
    description:
      'Engraving blades / carving cutters for logo and pattern engraving on packaging boxes, corrugated cartons and gift boxes. High-hardness CNC-milled blades with customizable sizes, offered as multi-spec blade sets, single blades or steel rule die accessories for precision carving and cutting in craft and packaging applications.',
    descriptionZh:
      '用于包装盒、瓦楞纸箱及礼盒Logo与图案雕刻的雕刻刀/雕刻刀具。高硬度CNC铣削刀片，尺寸可定制，提供多规格刀片套装、单支刀片或钢线刀模配件，适用于工艺与包装领域的精密雕刻切割。',
    images: [
      '/assets/images/engraving-die-detail-new-main-tight.webp',
      '/assets/images/engraving-die-detail-2-final-grid.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'High-hardness steel, CNC milled components',
        valueZh: '高硬度钢，CNC铣削加工',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Customizable sizes; multi-spec blade sets available',
        valueZh: '尺寸可定制，支持多规格刀片套装',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '3-25 days',
        valueZh: '3-25天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Die cutting machine or press machine or various die-cutting platforms',
        valueZh: '刀模制作/模切配件',
      },
    ],
    highlights: [
      'High hardness, wear-resistant blades for repeated carving',
      'Multi-spec blade sets for DIY craft and woodworking',
      'High-precision CNC milled carving cutters for packaging',
      'Custom size & custom logo engraving supported',
      'Works on carton, corrugated, gift box and paper board',
    ],
    highlightsZh: [
      '高硬度耐磨刀片，可反复雕刻',
      '多规格刀片套装，适用于DIY手工与木工',
      '包装用高精度CNC铣削雕刻刀',
      '支持尺寸定制与Logo雕刻',
      '适用于纸箱、瓦楞、礼盒及纸板',
    ],
    faqs: [
      {
        qEn: 'What steel hardness and cutting edge profiles are used on engraving dies?',
        qZh: '电雕雕刻刀采用什么钢材硬度与刃口工艺？',
        aEn: 'We use high-hardness tool steel (58–62 HRC) with high-precision CNC micro-milling, delivering smooth carving edges for packaging and craft carton production.',
        aZh: '我们采用高硬度工具钢（硬度达 58–62 HRC）并经精密数控微铣加工，刃口锋利耐久，保障包装雕刻边缘光滑细腻。'
      },
      {
        qEn: 'What is the lead time for custom engraving blade sets?',
        qZh: '定制电雕刀组的交期通常是多久？',
        aEn: 'Depending on complexity and set size, standard lead time ranges from 3 to 25 days.',
        aZh: '根据刀组规格复杂度和定制数量，标准交期通常在 3 至 25 天之间。'
      }
    ]
  },
  {
    slug: 'die-making-materials',
    name: 'Die Making Materials and Equipment (Tube Punches)',
    nameZh: '刀模制作材料',
    description:
      'Die making materials & equipment — precision steel tube punches and spring punches for making holes in optical film, printing paper, cardboard, labels, stickers, leather, belts, rivets, eyelets and sewing patches. Mirror-finished steel construction for laser cutting and precision hole-processing applications.',
    descriptionZh:
      '刀模制作材料与设备——用于光学膜、印刷纸、纸板、标签、贴纸、皮革、皮带、铆钉、鸡眼扣及缝制补丁打孔的精密钢制管冲与弹簧冲。镜面抛光钢结构，适用于激光切割及精密打孔应用。',
    images: [
      '/assets/images/die-making-materials-detail-2.webp',
      '/assets/images/die-making-materials-detail-3.webp',
      '/assets/images/die-making-materials-detail-4.webp',
      '/assets/images/die-making-materials-detail-5.webp',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'High-grade steel, mirror finish / precision ground',
        valueZh: '优质钢材，镜面抛光/精密研磨',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Precision tube & spring punches, multiple specs (MOQ 100 pcs)',
        valueZh: '精密管冲/弹簧冲，多规格（起订量100件）',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '3-7 days',
        valueZh: '3-7天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'All cutting die accessories and die-cutting accessories',
        valueZh: '激光切割、印刷及标签生产线',
      },
    ],
    highlights: [
      'Premium die making steel for laser cutting & optical film hole processing',
      'Mirror-finished / precision-ground tubes for clean cuts',
      'Heavy-duty industrial tube punches for leather, belts & crafts',
      'High-speed efficient punching for printing & label production lines',
      'Custom-designed and durable, long service life',
    ],
    highlightsZh: [
      '优质制模钢，适用于激光切割与光学膜打孔',
      '镜面/精密研磨管冲，切口干净',
      '重型工业管冲，适用于皮革、皮带与工艺',
      '印刷与标签生产线高速高效打孔',
      '可定制设计，坚固耐用，寿命长',
    ],
    faqs: [
      {
        qEn: 'What types of tube punches and spring punches does Zhongcheng supply?',
        qZh: '众诚提供哪些规格的制模冲孔五金耗材？',
        aEn: 'We supply precision-ground mirror-finish steel tube punches and spring punches with inside diameters from 1.0mm to 20mm+, ideal for optical film, cardboard, label, and leather hole punching.',
        aZh: '我们供应内径 1.0mm 至 20mm+ 各类镜面精磨钢管冲、带顶针弹簧冲等，广泛应用于光学膜、纸板、标签及皮革制品的高精打孔。'
      },
      {
        qEn: 'What is the minimum order quantity (MOQ) and lead time for punch accessories?',
        qZh: '冲孔五金配件的起订量与交期是多久？',
        aEn: 'MOQ for standard punch sizes is 100 pcs, and manufacturing lead time is typically 3–7 days.',
        aZh: '标准规格冲子起订量为 100 件，标准生产交期为 3–7 天。'
      }
    ]
  },
];

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return products.find(p => p.slug === slug);
}

export interface ProductSpec {
  key: string; // English label
  keyZh: string; // Chinese label
  value: string; // English value
  valueZh: string; // Chinese value
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
}

export const WHATSAPP_URL = 'https://wa.me/8615066159371';

export const products: Product[] = [
  {
    slug: 'sandwich-die',
    name: 'Sandwich Cutting Die',
    nameZh: '三明治刀模',
    description:
      'Custom sandwich dies for cigarette packs, tobacco double-tab packaging, pill boxes, pharma and cosmetic boxes, hangers, lanterns and general packaging. Built as a sandwich of plywood board, cutting steel rules and rubber, precision-made to custom artwork with sharp, clean cutting edges for interlayer / special-shaped box forming.',
    descriptionZh:
      '定制三明治刀模，适用于烟盒、烟草双开翻盖包装、药板盒、医药及化妆品盒、挂钩、灯笼及各类通用包装。以木板、切割钢刀与弹力橡胶构成夹层结构，按客户图稿精密制作，切口锋利洁净，适用于夹层/异形盒成型。',
    images: [
      'https://sc04.alicdn.com/kf/H7ea4c9652ebc44d5ad4efe8fa93deb52i.jpg',
      'https://sc04.alicdn.com/kf/Hca4ac57357374690a8e0bf85e6d98238P.jpg',
      'https://sc04.alicdn.com/kf/H5cc4eda981b3489e8d8f7d1c170cd58f4.jpg',
      'https://sc04.alicdn.com/kf/Hd87bc79e34fa4eb682dbaff6216e23226.jpg',
    ],
    specs: [
      {
        key: 'Material',
        keyZh: '材质',
        value: 'Planks + steel knives, or carbon fiber / resin / aluminum sheet',
        valueZh: '木板+钢刀，或碳纤维/树脂/铝板',
      },
      {
        key: 'Size',
        keyZh: '尺寸',
        value: 'Customized size, shapes & colors',
        valueZh: '尺寸、形状、颜色均可定制',
      },
      {
        key: 'Delivery',
        keyZh: '交期',
        value: '7-15 days (lead time 30 days for 1-100 pcs)',
        valueZh: '7-15天（1-100件交期30天）',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'BOBST · Masterwork · Heidelberg · Sanwa platforms',
        valueZh: '适配BOBST · 长荣 · 海德堡 · 三和平台',
      },
    ],
    highlights: [
      'Eco-friendly recycled paper box sandwich die with customizable thickness',
      'High-precision sharp cutting for cigarette pack double-tab packaging',
      'Stable, consistent molding results for cigarette packaging',
      'CE-certified packing box sandwich knife mold meeting packaging standards',
      'Custom shapes: pillbox, lantern, hanger, mini drug boxes, rigid box forming',
      '5-year mould life with OEM/ODM service and CAD drawing support',
    ],
    highlightsZh: [
      '环保再生纸盒三明治刀模，厚度可定制',
      '烟盒双开翻盖包装高精度锋利切割',
      '烟包成型稳定一致',
      'CE认证纸盒三明治刀模，符合包装标准',
      '异形定制：药板盒、灯笼、挂钩、迷你药盒、硬盒成型',
      '5年模具寿命，支持OEM/ODM及CAD图纸支持',
    ],
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
      'https://sc04.alicdn.com/kf/H4b85cc9ee4bd458c9f518d3baa94fe4cX.jpg',
      'https://sc04.alicdn.com/kf/Hf674cde346b54c2bb492eef9e656d6f9e.jpg',
      'https://sc04.alicdn.com/kf/Ha65df70cbe6e443a8d78dc5ebe2f63c28.jpg',
      'https://sc04.alicdn.com/kf/Hbb521f9685bf4e088314be10c47cb311k.jpg',
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
        value: 'Fast processing, 7-15 days standard (3-day prep available)',
        valueZh: '加工快速，标准交期7-15天（最快3天备料）',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Flexo carton die cutting machines, flat die cutting presses',
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
  },
  {
    slug: 'steel-counter-plate',
    name: 'Steel Counter Plate',
    nameZh: '钢底模',
    description:
      'Customizable-size steel counter plate for sandwich die cutting machines, used as the backing/counter plate in packaging box creasing and punching tools. Hardened steel plate matched to the sandwich die to guarantee clean creasing lines and long production life.',
    descriptionZh:
      '尺寸可定制的钢底模，用于三明治刀模模切机，是包装盒压痕与冲切工具的背板/底模。淬硬钢板与三明治刀模精准匹配，保证清晰压痕线并延长使用寿命。',
    images: [
      'https://sc04.alicdn.com/kf/Hf068cdcd49184a0094b572e97aff96bbg.jpg',
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
        value: '7-15 days (lead time 30 days for 1-100 pcs)',
        valueZh: '7-15天（1-100件交期30天）',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Sandwich die cutting machines (BOBST-type platforms)',
        valueZh: '三明治刀模模切机（BOBST类平台）',
      },
    ],
    highlights: [
      'Custom size & thickness made to your drawing',
      'Pairs with sandwich die cutting machines for box creasing/punching',
      '5-year mould life, wear-resistant steel construction',
      'OEM/ODM with CAD (.DWG/.DXF/.PDF/.CDR) drawing support',
      '7-15 days delivery',
    ],
    highlightsZh: [
      '按图纸定制尺寸与厚度',
      '与三明治刀模模切机配套，用于纸盒压痕/冲切',
      '5年模具寿命，耐磨钢板结构',
      '支持OEM/ODM及CAD图纸（.DWG/.DXF/.PDF/.CDR）',
      '7-15天交期',
    ],
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
      'https://sc04.alicdn.com/kf/H735fc6c8379a4b94bc9732db4c20fcb5D.jpg',
      'https://sc04.alicdn.com/kf/Hf792fb32976a4cf98a58612e5fe046f1L.jpg',
      'https://sc04.alicdn.com/kf/H84025d6f1ff04f7aa05cd1c08bdb9c3aI.jpg',
      'https://sc04.alicdn.com/kf/H5a9c0ab49b784fa6816e22332f5df39cJ.jpg',
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
        value: 'Factory direct, fast dispatch (7-15 days standard)',
        valueZh: '工厂直供，快速发货（标准7-15天）',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Manual die cutting presses, industrial die cutting machines',
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
      'https://sc04.alicdn.com/kf/Hdcb6072a95a846d5ac7a7565c26d1526v.jpg',
      'https://sc04.alicdn.com/kf/Hb2ccccef311b4eee98acadb145b44aefF.jpg',
      'https://sc04.alicdn.com/kf/H525cf4b3616842f0bf4d9431c9762dfcA.jpg',
      'https://sc04.alicdn.com/kf/Hab5806be831c4526952057c556b77ad0Z.jpg',
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
        value: '7-15 days standard',
        valueZh: '标准7-15天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Box manufacturing / die cutting production lines',
        valueZh: '纸盒制造/模切生产线',
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
      'https://sc04.alicdn.com/kf/H4a293ae78b3e45549ea78b35bd95de35v.jpg',
      'https://sc04.alicdn.com/kf/Hcd49147845ca4d1e88b2f9b04dd8f259w.jpg',
      'https://sc04.alicdn.com/kf/H342fc03afa0042cc962424435a55920bw.jpg',
      'https://sc04.alicdn.com/kf/H7825e33bd171446cb9068e69da143bc9L.jpg',
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
        value: '7-15 days standard',
        valueZh: '标准7-15天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Packaging lines for paper, plastic, food boxes & disposable cups',
        valueZh: '纸、塑、食品盒及一次性杯包装生产线',
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
      'https://sc04.alicdn.com/kf/Hdb26061776504997876b284ebf7a5ebdQ.jpg',
      'https://sc04.alicdn.com/kf/H588759bb9cbd44b8b8bd19330a1ff469x.jpg',
      'https://sc04.alicdn.com/kf/H2c307dd00ca64e9794359275f5ad6ac7z.jpg',
      'https://sc04.alicdn.com/kf/Hac171d01d4c941a4b2fca66da845717eK.jpg',
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
        value: '7-15 days standard',
        valueZh: '标准7-15天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Hot foil stamping / embossing machines',
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
      'https://sc04.alicdn.com/kf/H0f592ea513444c09a31f4285222ce9d6M.jpg',
      'https://sc04.alicdn.com/kf/Hffcd464c17114d088eec7cd2ceb3e954p.jpg',
      'https://sc04.alicdn.com/kf/Hc7191ad15bdb41d7b8405313cc10e241Q.jpg',
      'https://sc04.alicdn.com/kf/H44435153ba6c4e6189c3c5d8c7587b60T.jpg',
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
        value: '7-15 days standard',
        valueZh: '标准7-15天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Steel rule die making / die cutting accessories',
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
      'https://sc04.alicdn.com/kf/He501cfbaef7443c8b137836b980a9111d.jpg',
      'https://sc04.alicdn.com/kf/H6f2c207b781248b09c63a9bb2c2008dfH.jpg',
      'https://sc04.alicdn.com/kf/H2b25b1abe2d64c229b5446710d9b57d2h.jpg',
      'https://sc04.alicdn.com/kf/H0192dfa1c4204d72a24070b9f2ac3be96.jpg',
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
        value: '7-15 days standard',
        valueZh: '标准7-15天',
      },
      {
        key: 'Compatible Machines',
        keyZh: '适配机型',
        value: 'Laser cutting, printing & label production lines',
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
  },
];

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return products.find(p => p.slug === slug);
}

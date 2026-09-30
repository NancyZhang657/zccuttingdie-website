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
      '/assets/images/sandwich-detail-1-refined.jpg',
      '/assets/images/sandwich-detail-3-tight.jpg',
      '/assets/images/sandwich-detail-2-brass-tight.jpg',
      '/assets/images/sandwich-detail-4.png',
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
        value: 'Various die-cutting machine such as BOBST · Masterwork · Heidelberg · Sanwa',
        valueZh: '适配BOBST · 长荣 · 海德堡 · 三和平台',
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
      '/assets/images/steel-detail-1.jpg',
      '/assets/images/steel-detail-2.jpg',
      '/assets/images/steel-detail-3.jpg',
      '/assets/images/steel-detail-4.jpg',
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
      '/assets/images/pertinax-detail-1.jpg',
      '/assets/images/pertinax-detail-2.jpg',
      '/assets/images/pertinax-detail-3.jpg',
      '/assets/images/pertinax-detail-4-clean.png',
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
      '/assets/images/stripping-detail-1-tight.jpg',
      '/assets/images/stripping-detail-2-tight.jpg',
      '/assets/images/stripping-detail-3-tight.jpg',
      '/assets/images/stripping-detail-4-tight.jpg',
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
        value: 'Various die-cutting machine such as BOBST · Masterwork · Heidelberg · Sanwa',
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
      '/assets/images/blanking-tools-detail-1-refined.jpg',
      '/assets/images/blanking-tools-bottom-pharma.jpg',
      '/assets/images/blanking-tools-detail-3.jpg',
      '/assets/images/blanking-tools-top-2.png',
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
        value: 'Various die-cutting machine such as BOBST · Masterwork · Heidelberg · Sanwa',
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
      '/assets/images/hot-stamping-detail-1-finishes-balanced.jpg',
      '/assets/images/hot-stamping-detail-2-samples.jpg',
      '/assets/images/hot-stamping-packaging-applications-latest.jpg',
      '/assets/images/hot-stamping-detail-3-embossed-applications.jpg',
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
      '/assets/images/engraving-die-detail-new-main-tight.jpg',
      '/assets/images/engraving-die-detail-2-final-grid.jpg',
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
        value: 'Die cutting machine or press machine or various die cutting platforms',
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
      '/assets/images/die-making-materials-detail-2.jpg',
      '/assets/images/die-making-materials-detail-3.jpg',
      '/assets/images/die-making-materials-detail-4.jpg',
      '/assets/images/die-making-materials-detail-5.jpg',
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
  },
];

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return products.find(p => p.slug === slug);
}

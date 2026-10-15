import { useState, useRef, type FormEvent, type ChangeEvent, type CSSProperties, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Settings, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Clock, 
  Cpu, 
  MessageCircle, 
  UploadCloud, 
  FileCheck, 
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLang } from '../lib/useLang';
import { updatePageMeta, buildBreadcrumbSchema } from '../lib/seo';
import { trackEvent } from '../lib/analytics';
import { products, WHATSAPP_URL } from '../data/products';
import SectionHeading from '../components/common/SectionHeading';
import equipWorkshopBg from '../assets/images/equipment-workshop.jpg';

const INQUIRY_API_URL = import.meta.env.VITE_INQUIRY_API_URL || '/api/inquiries';
const ACCEPTED_FILE_TYPES = '.dxf,.dwg,.ai,.pdf,.cdr,.step,.stp,.zip,.rar,.png,.jpg,.jpeg';

interface MachineSpec {
  id: string;
  brand: string;
  models: string;
  maxSpeed: string;
  sheetSize: string;
  chaseType: string;
  alignment: string;
  recommendedTooling: { slug: string; nameEn: string; nameZh: string }[];
  keyFeaturesEn: string[];
  keyFeaturesZh: string[];
}

const MACHINE_SPECS: MachineSpec[] = [
  {
    id: 'bobst',
    brand: 'BOBST',
    models: 'Novacut 106 E/ER, Expertcut 106/145 PER, SP 102/104/106, Mastercut 106/145',
    maxSpeed: 'Up to 9,000 sheets/hour',
    sheetSize: '1060 × 760 mm / 1450 × 1050 mm',
    chaseType: 'Quick-Lock / Centerline II Standard',
    alignment: '±0.05 mm precision centerline register',
    recommendedTooling: [
      { slug: 'sandwich-die', nameEn: 'Sandwich Cutting Die', nameZh: '三明治刀模' },
      { slug: 'steel-counter-plate', nameEn: 'Hardened Steel Counter Plate', nameZh: '淬硬钢底模' },
      { slug: 'blanking-tools', nameEn: 'Dynamic Blanking Tools', nameZh: '动态分盒清废模' },
      { slug: 'stripping-tools', nameEn: 'Precision Stripping Tools', nameZh: '高速清废工具' },
    ],
    keyFeaturesEn: [
      '100% Centerline II alignment standard for zero machine-chase modification',
      'High-speed vibration dampening carbon fiber/steel sandwich frames',
      'Dynamic blanking upper/lower tooling matched for full 9,000 cuts/hr production',
      'Hardened 1.0mm & 1.5mm counter plates with micro-ground creasing grooves'
    ],
    keyFeaturesZh: [
      '严格匹配 Centerline II 中心定位系统，上机免调校直接锁紧',
      '碳纤维/钢质高刚性三明治框架，吸收高速运转震动',
      '上下框动态分盒模具精准配对，支持全速 9000 压/小时稳定分离',
      '1.0mm 及 1.5mm 淬硬钢底模，微米级研磨压痕槽线'
    ]
  },
  {
    id: 'heidelberg-mk',
    brand: 'Heidelberg & Masterwork (MK)',
    models: 'Easymatrix 106 C/CS, Promatrix 106/145 CSB, MK 1060 ST/ER, MK 21060',
    maxSpeed: 'Up to 8,000 sheets/hour',
    sheetSize: '1060 × 760 mm / 1450 × 1050 mm',
    chaseType: 'Masterwork Quick-Lock & Standard Chase',
    alignment: '±0.05 mm positioning tolerance',
    recommendedTooling: [
      { slug: 'sandwich-die', nameEn: 'Precision Sandwich Die', nameZh: '高精三明治刀模' },
      { slug: 'pertinax-counter-plate', nameEn: 'Pertinax Counter Plate', nameZh: 'Pertinax 树脂底模' },
      { slug: 'hot-stamping-embossing-die', nameEn: 'Hot Stamping & Embossing Die', nameZh: '高精度烫金凹凸模' },
      { slug: 'stripping-tools', nameEn: 'Dedicated Stripping System', nameZh: '专用内孔清废系统' },
    ],
    keyFeaturesEn: [
      'Seamless mounting with Masterwork / Heidelberg positioning pin sets',
      'Optimized blade height calculations to protect delicate cutting anvils',
      'Multi-foil hot stamping copper & brass dies with uniform thermal expansion',
      'Quick job changeover tooling setup reducing prep time by up to 35%'
    ],
    keyFeaturesZh: [
      '完美适配长荣 MK 与海德堡定位销系统，上模平稳牢固',
      '精准计算刀线高度公差，有效保护设备模切钢板与底板',
      '多工位烫金铜/黄铜版，热膨胀系数精准补偿，图案套印极准',
      '快速换版设计，平均减少换模调校时间 35% 以上'
    ]
  },
  {
    id: 'sanwa',
    brand: 'Sanwa',
    models: 'TRP-1060-SE / SV, TRP-1200-S, TRP-1300, PC-1060 series',
    maxSpeed: 'Up to 7,500 sheets/hour',
    sheetSize: '1060 × 750 mm / 1200 × 900 mm / 1300 × 980 mm',
    chaseType: 'Standard & Pneumatic Chase Locking',
    alignment: '±0.05 mm precision',
    recommendedTooling: [
      { slug: 'wooden-die', nameEn: 'High-Density Wooden Die', nameZh: '高密度木样刀模' },
      { slug: 'sandwich-die', nameEn: 'Steel Sandwich Die', nameZh: '钢框三明治刀模' },
      { slug: 'steel-counter-plate', nameEn: 'Milled Steel Counter Plate', nameZh: '精密铣槽钢底模' },
      { slug: 'die-making-materials', nameEn: 'Heavy Duty Tube Punches', nameZh: '重型加硬管冲/弹簧冲' },
    ],
    keyFeaturesEn: [
      'Engineered for heavy-duty solid bleached sulfate (SBS) and thick corrugated board',
      'Reinforced bridge layout preventing die deflection under heavy cutting tonnage',
      'Hardened steel counter plates matched for micro-flute and folding carton packaging',
      'Heavy-duty ejection rubbers engineered for zero-dust high-speed feeding'
    ],
    keyFeaturesZh: [
      '专为厚卡纸、白卡纸及微瓦楞纸板重型模切工况强化设计',
      '优化过桥支撑结构，防止高吨位模切压力下模版微量形变',
      '高硬度淬火底板，长寿命耐磨损，适合大批量连续作业',
      '定制高弹耐撕裂弹垫胶条，高速走纸无纸粉飞溅'
    ]
  },
  {
    id: 'eterna-domestic',
    brand: 'ETERNA & Major Domestic Lines',
    models: 'ETERNA ECUT 1060 / PE 1620, Changrong, Sanhe, Guowang, Dayuan, Huatai',
    maxSpeed: 'Up to 7,500 sheets/hour',
    sheetSize: '1060 × 760 mm to 1650 × 1200 mm',
    chaseType: 'Standard & Centerline Compatible Chase',
    alignment: '±0.05 mm repeatability',
    recommendedTooling: [
      { slug: 'wooden-die', nameEn: 'Precision Laser Wooden Die', nameZh: '激光精密切割木板模' },
      { slug: 'sandwich-die', nameEn: 'Sandwich Die System', nameZh: '三明治模切系统' },
      { slug: 'stripping-tools', nameEn: 'Universal Stripping Dies', nameZh: '通用上下清废模' },
      { slug: 'engraving-die', nameEn: 'Engraving Die & Blade', nameZh: '精密雕刻刀与刀片' },
    ],
    keyFeaturesEn: [
      'Full parameter library covering all standard domestic & Asian press dimensions',
      'Fast turnaround (2-3 days for standard tools, 3-7 days for sandwich dies)',
      'Cost-effective precision tooling engineered to OEM tolerances',
      'Customized register pin locations tailored to specific press modifications'
    ],
    keyFeaturesZh: [
      '覆盖国内及亚太主流机型完整尺寸库与图纸标准',
      '快速交付响应（常规模具 2-3 天，三明治模 3-7 天）',
      '严守 OEM 出厂级公差，极高性价比与耐用度',
      '支持根据车间设备实际改装情况定制非标定位孔位'
    ]
  }
];

const inputStyle: CSSProperties = {
  background: 'var(--surface-mid)',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-card)',
  color: 'var(--text-primary-light)',
  padding: '12px 14px',
  fontSize: 14,
  width: '100%',
};

const inputClass =
  'w-full text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-shadow duration-150';

export default function CompatibilityPage() {
  const { lang } = useLang();
  const [activeBrand, setActiveBrand] = useState<string>('bobst');
  const [selectedMachineModel, setSelectedMachineModel] = useState<string>('BOBST Novacut / Expertcut');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: true });

  const isZh = lang === 'zh';

  // Inquiry form states
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    updatePageMeta({
      title: isZh 
        ? '主流模切机型兼容与定制指南（BOBST/海德堡/长荣/三和）| 众诚刀模'
        : 'Die-Cutting Machine Compatibility Guide (BOBST, Heidelberg, MK, Sanwa) | Zhongcheng',
      description: isZh
        ? '众诚刀模严格按 BOBST、海德堡、长荣 MK、三和及 ETERNA 等主流模切机 OEM 规格精密定制三明治模、钢底模及清废分盒工具，±0.05mm 中心线对齐，上机即用。'
        : 'Precision cutting dies, steel counter plates, and dynamic blanking tools engineered to exact OEM specs for BOBST, Heidelberg, MK Masterwork, Sanwa & ETERNA. ±0.05mm centerline tolerance.',
      path: '/compatibility',
      lang,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          buildBreadcrumbSchema({
            name: isZh ? '机型兼容指南' : 'Machine Compatibility Guide',
            path: '/compatibility',
            lang
          }),
          {
            '@type': 'TechArticle',
            '@id': 'https://zccuttingdie.com/compatibility#article',
            headline: isZh 
              ? '模切机工装夹具适配与选型指南' 
              : 'Die-Cutting Machine Tooling Compatibility & Specification Guide',
            description: isZh
              ? 'BOBST、海德堡、长荣MK、三和模切机配套三明治刀模、钢底模及分盒清废模具参数与定制标准。'
              : 'Comprehensive compatibility specifications for BOBST, Heidelberg, MK Masterwork, Sanwa and other leading automatic die-cutting platforms.',
            publisher: {
              '@type': 'Organization',
              name: 'Jinan Zhongcheng Precision Mould Co., Ltd.',
              url: 'https://zccuttingdie.com'
            }
          }
        ]
      }
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [lang, isZh]);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setFileError(null);
    if (!files.length) return;

    if (selectedFiles.length + files.length > 5) {
      setFileError(isZh ? '最多只能上传 5 个附件。' : 'You can upload a maximum of 5 files in total.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    for (const file of files) {
      if (file.size > 20 * 1024 * 1024) {
        setFileError(isZh ? `文件 "${file.name}" 超过 20MB 大小限制。` : `File "${file.name}" exceeds 20MB limit.`);
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
    }

    setSelectedFiles((prev) => [...prev, ...files]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveSingleFile = (indexToRemove: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
    setFileError(null);
  };

  const handleClearAllFiles = () => {
    setSelectedFiles([]);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const readFileAsBase64 = (file: File): Promise<{ filename: string; content: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64Content = result.split(',')[1] || '';
        resolve({
          filename: file.name,
          content: base64Content,
        });
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const attachments = await Promise.all(selectedFiles.map(readFileAsBase64));

      const payload = {
        name: String(data.get('name') ?? '').trim(),
        company: String(data.get('company') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        country: String(data.get('country') ?? '').trim(),
        product: `[Compatibility Inquiry] ${selectedMachineModel} - ${String(data.get('product') ?? '').trim()}`,
        productSlug: 'machine-compatibility',
        pageUrl: window.location.href,
        message: String(data.get('message') ?? '').trim(),
        attachments: attachments.length > 0 ? attachments : undefined,
        fileName: selectedFiles.length > 0 ? selectedFiles.map((f) => f.name).join(', ') : undefined,
        fileSize:
          selectedFiles.length > 0
            ? `${(selectedFiles.reduce((acc, f) => acc + f.size, 0) / (1024 * 1024)).toFixed(2)} MB`
            : undefined,
      };

      const response = await fetch(INQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Inquiry request failed');
      }

      setSubmitState('success');
      form.reset();
      setSelectedFiles([]);
      trackEvent('generate_lead', {
        page_path: window.location.pathname,
        product: `Compatibility-${selectedMachineModel}`,
      });
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeSpec = MACHINE_SPECS.find(m => m.id === activeBrand) || MACHINE_SPECS[0];

  const faqs = isZh ? [
    {
      q: '为什么众诚模具能做到与进口模切机（如 BOBST）100% 免改动适配？',
      a: '众诚拥有近 30 年精密模具制造经验，建立了各大主流机型（BOBST Centerline II、海德堡 MK、三和等）的完整原厂定位尺寸数据库。模具出厂前均经过高精度三坐标投影与尺寸校准，基准销孔公差严格控制在 ±0.05mm 内，上机即可快速锁紧对中，杜绝二次调试扩孔。'
    },
    {
      q: '如果我们的设备经过了车间改装，或者使用的是非标框体怎么办？',
      a: '只需提供您当前设备框体的实际测量图纸、销钉中心距或提供一套旧版模具的 CAD 图纸（DXF / DWG），我们的 20 人研发工程团队即可进行非标适配建模，并在 24 小时内出具装配方案图供您确认。'
    },
    {
      q: '定制模具的标准生产周期是多久？支持紧急加急吗？',
      a: '常规木样模与钢底模交期为 2–5 天；高性能三明治模与分盒模交期为 3–7 天。对于海外急单，我们支持 24–48 小时加急打样与试装排产，并提供顺丰国际/DHL/FedEx 全球特快空运服务。'
    },
    {
      q: '如何发送图纸询价？支持哪些工业图纸格式？',
      a: '您可以通过下方表单直接上传图纸（支持 DXF, DWG, AI, PDF, STEP, ZIP 等，单个最大 20MB），或者直接通过 WhatsApp / 邮箱将图纸发送给我们的工程师。我们会在 24 小时内评估加工可行性并提供详细报价单。'
    }
  ] : [
    {
      q: 'Why can Zhongcheng tooling achieve 100% seamless compatibility with imported presses like BOBST?',
      a: 'With nearly 30 years of specialized die-making expertise, Zhongcheng maintains a comprehensive OEM technical database for platforms including BOBST Centerline II, Heidelberg MK, Sanwa, and ETERNA. All dies undergo coordinate verification, with register pin tolerances held strictly within ±0.05 mm for instant, zero-modification mounting.'
    },
    {
      q: 'What if our machine has custom modifications or non-standard chase dimensions?',
      a: 'Simply provide your chase measurements, pin center distances, or send an existing CAD drawing (DXF/DWG). Our 20-person R&D engineering team will model a customized mounting blueprint and provide a verification drawing within 24 hours.'
    },
    {
      q: 'What is the standard production lead time for machine-matched tooling?',
      a: 'Standard wooden dies and counter plates are produced in 2–5 days; high-performance sandwich dies and dynamic blanking tools take 3–7 days. For urgent production line shutdowns, expedited 24–48h fabrication with DHL/FedEx priority air freight is available.'
    },
    {
      q: 'How can we submit drawings for compatibility review and quotation?',
      a: 'You can upload drawings directly through our online form below (supporting DXF, DWG, AI, PDF, STEP, ZIP up to 20MB each), or send files via WhatsApp or email. Our technical team responds with a detailed quote within 24 hours.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--surface-dark)', color: 'var(--text-primary-light)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-[var(--border-dark)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={equipWorkshopBg}
            alt="Zhongcheng die cutting workshop"
            className="w-full h-full object-cover"
            style={{ opacity: 0.12 }}
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(18, 16, 15, 0.7) 0%, rgba(18, 16, 15, 0.95) 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
            <Link to="/" className="hover:underline hover:text-[var(--text-primary-dark)]">
              {isZh ? '首页' : 'Home'}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>
              {isZh ? '机型兼容与定制指南' : 'Machine Compatibility Guide'}
            </span>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4"
              style={{
                background: 'rgba(217, 83, 30, 0.15)',
                color: 'var(--accent)',
                border: '1px solid rgba(217, 83, 30, 0.3)',
              }}
            >
              <Cpu size={14} />
              {isZh ? 'OEM 标准精准适配 · ±0.05mm 严苛公差' : 'OEM-Grade Precision · ±0.05mm Tolerance'}
            </span>
            <h1 
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {isZh 
                ? '主流模切设备兼容与工装定制指南' 
                : 'Die-Cutting Machine Tooling Compatibility Guide'}
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
              {isZh
                ? '精准匹配 BOBST、海德堡、长荣 MK、三和及 ETERNA 等国内外主流自动模切机。从三明治刀模、淬火钢底模到动态清废分盒系统，100% 严守原厂基准销与中心线规格，实现上机即用、零停机磨合。'
                : 'Precision-engineered cutting dies, steel counter plates, and dynamic blanking systems matched to exact OEM standards for BOBST, Heidelberg, MK Masterwork, Sanwa & ETERNA. Zero machine modification required.'}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#compatibility-matrix"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {isZh ? '查看机型技术参数' : 'Explore Machine Specs'}
                <ArrowRight size={16} />
              </a>
              <a
                href="#drawing-inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all"
                style={{
                  background: 'var(--surface-mid)',
                  color: 'var(--text-primary-dark)',
                  border: '1px solid var(--border-light)'
                }}
              >
                {isZh ? '发送机型图纸询价' : 'Send Drawing with Model'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Guarantees */}
      <section className="py-16 px-6 border-b border-[var(--border-dark)]" style={{ background: 'var(--surface-mid)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg" style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-dark)' }}>
              <div className="w-12 h-12 rounded flex items-center justify-center mb-4" style={{ background: 'rgba(217, 83, 30, 0.12)', color: 'var(--accent)' }}>
                <Settings size={24} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                {isZh ? '±0.05mm 中心线对齐 (Centerline II)' : '±0.05mm Centerline Alignment'}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
                {isZh 
                  ? '完全依循 BOBST 及国际主流中心线系统，基准销定位孔数控微米加工，换版无需重新校正中心。'
                  : 'Machined to exact Centerline II specs. Register pins align instantly with zero manual chase trimming.'}
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-dark)' }}>
              <div className="w-12 h-12 rounded flex items-center justify-center mb-4" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25D366' }}>
                <Clock size={24} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                {isZh ? '快装换版系统 · 缩短 40% 调机时间' : 'Quick-Lock Ready · 40% Faster Setup'}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
                {isZh 
                  ? '优化刀版外形与上下模锁紧槽口，兼容气动与机械快锁机构，大幅减少批次切换停机损耗。'
                  : 'Optimized frame locking notches compatible with pneumatic and quick-lock clamps for rapid job changeover.'}
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-dark)' }}>
              <div className="w-12 h-12 rounded flex items-center justify-center mb-4" style={{ background: 'rgba(217, 83, 30, 0.12)', color: 'var(--accent)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                {isZh ? '高刚性防形变 · 保护模切机钢板' : 'Zero Deflection · Machine Anvil Protection'}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
                {isZh 
                  ? '多层碳纤维/合金钢框架结合科学过桥设计，高吨位压力下零下陷，刀片高度均匀一致保护设备。'
                  : 'Reinforced sandwich architecture prevents sagging under heavy press tonnage, protecting machine steel plates.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Compatibility Matrix (Interactive Tabs) */}
      <section id="compatibility-matrix" className="py-20 px-6 border-b border-[var(--border-dark)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label={isZh ? '机型匹配规格' : 'Platform Specifications'}
            title={isZh ? '主流模切设备适配参数库' : 'Machine Compatibility & Tooling Matrix'}
            subtitle={isZh ? '选择您的生产线机型，查看专属适配公差、建议模具配置与技术亮点。' : 'Select your production line press to inspect alignment tolerances, chase configurations, and tooling suites.'}
            center
          />

          {/* Machine Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
            {MACHINE_SPECS.map((spec) => {
              const isActive = activeBrand === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => {
                    setActiveBrand(spec.id);
                    setSelectedMachineModel(spec.brand);
                  }}
                  className="px-6 py-3 rounded text-sm font-bold transition-all duration-150"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--surface-mid)',
                    color: isActive ? '#fff' : 'var(--text-secondary-dark)',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border-light)',
                    boxShadow: isActive ? '0 4px 12px rgba(217, 83, 30, 0.3)' : 'none'
                  }}
                >
                  {spec.brand}
                </button>
              );
            })}
          </div>

          {/* Spec Detail Card */}
          <div 
            className="p-8 md:p-10 rounded-xl"
            style={{
              background: 'var(--surface-mid)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-8 mb-8 border-b border-[var(--border-light)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                  {isZh ? '适配设备系列' : 'Compatible Machinery Family'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1" style={{ color: 'var(--text-primary-dark)' }}>
                  {activeSpec.brand} {isZh ? '专用工装方案' : 'Series Tooling Solutions'}
                </h3>
                <p className="text-xs mt-2" style={{ color: 'var(--text-secondary-dark)' }}>
                  <strong>{isZh ? '覆盖型号：' : 'Models Covered: '}</strong> {activeSpec.models}
                </p>
              </div>

              <a
                href="#drawing-inquiry"
                onClick={() => setSelectedMachineModel(`${activeSpec.brand} Series`)}
                className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {isZh ? `定制 ${activeSpec.brand} 模具` : `Quote for ${activeSpec.brand}`}
              </a>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-4 rounded bg-[var(--surface-dark)] border border-[var(--border-dark)]">
                <span className="text-xs text-[var(--text-secondary-dark)] block mb-1">
                  {isZh ? '最高生产车速' : 'Max Rated Speed'}
                </span>
                <strong className="text-sm font-semibold text-[var(--text-primary-dark)]">
                  {activeSpec.maxSpeed}
                </strong>
              </div>

              <div className="p-4 rounded bg-[var(--surface-dark)] border border-[var(--border-dark)]">
                <span className="text-xs text-[var(--text-secondary-dark)] block mb-1">
                  {isZh ? '纸张/版幅规格' : 'Max Sheet Formats'}
                </span>
                <strong className="text-sm font-semibold text-[var(--text-primary-dark)]">
                  {activeSpec.sheetSize}
                </strong>
              </div>

              <div className="p-4 rounded bg-[var(--surface-dark)] border border-[var(--border-dark)]">
                <span className="text-xs text-[var(--text-secondary-dark)] block mb-1">
                  {isZh ? '框体与锁紧类型' : 'Chase / Clamping System'}
                </span>
                <strong className="text-sm font-semibold text-[var(--text-primary-dark)]">
                  {activeSpec.chaseType}
                </strong>
              </div>

              <div className="p-4 rounded bg-[var(--surface-dark)] border border-[var(--border-dark)]">
                <span className="text-xs text-[var(--text-secondary-dark)] block mb-1">
                  {isZh ? '对齐与基准公差' : 'Alignment Tolerance'}
                </span>
                <strong className="text-sm font-semibold text-[var(--accent)]">
                  {activeSpec.alignment}
                </strong>
              </div>
            </div>

            {/* Features & Recommended Tooling */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary-dark)' }}>
                  <CheckCircle2 size={16} className="text-[var(--accent)]" />
                  {isZh ? '机型技术适配特性' : 'Key Engineering Highlights'}
                </h4>
                <ul className="space-y-3">
                  {(isZh ? activeSpec.keyFeaturesZh : activeSpec.keyFeaturesEn).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed" style={{ color: 'var(--text-secondary-dark)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary-dark)' }}>
                  <Layers size={16} className="text-[var(--accent)]" />
                  {isZh ? '针对该机型推荐的成套工装' : 'Recommended Tooling Suite'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSpec.recommendedTooling.map((tool) => (
                    <Link
                      key={tool.slug}
                      to={`/products/${tool.slug}`}
                      className="p-3 rounded flex items-center justify-between text-xs font-medium transition-all group"
                      style={{
                        background: 'var(--surface-dark)',
                        border: '1px solid var(--border-dark)',
                        color: 'var(--text-primary-dark)'
                      }}
                    >
                      <span className="group-hover:text-[var(--accent)] transition-colors">
                        {isZh ? tool.nameZh : tool.nameEn}
                      </span>
                      <ArrowRight size={14} className="text-[var(--text-secondary-dark)] group-hover:text-[var(--accent)] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tooling Alignment & Quality Workflow */}
      <section className="py-20 px-6 border-b border-[var(--border-dark)]" style={{ background: 'var(--surface-mid)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label={isZh ? '出厂质检流程' : 'Manufacturing & QA'}
            title={isZh ? '从图纸到上机：严苛的三重精度检验' : 'From CAD to Press: 3-Stage Precision Verification'}
            subtitle={isZh ? '每套模具出厂前均经由资深质检员与高精仪器双重检验，确保全球交付零差错。' : 'Every cutting die and steel counter plate is verified with optical projection and digital CMM prior to international shipping.'}
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-[var(--surface-dark)] border border-[var(--border-dark)]">
              <span className="text-2xl font-black text-[var(--accent)] mb-2 block">01</span>
              <h3 className="text-base font-bold mb-2 text-[var(--text-primary-dark)]">
                {isZh ? 'CAD 图纸与原厂机型库比对' : 'CAD Drawing & Press Spec Matching'}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary-dark)]">
                {isZh
                  ? '收到客户 DXF/DWG 图纸后，工程师首先与目标模切机的定位销中心距、咬口尺寸及清废框尺寸进行 1:1 干涉校验。'
                  : 'Customer CAD files are verified 1:1 against our machine chase library for gripper margins, pin spacing, and blanking frame clear zone.'}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[var(--surface-dark)] border border-[var(--border-dark)]">
              <span className="text-2xl font-black text-[var(--accent)] mb-2 block">02</span>
              <h3 className="text-base font-bold mb-2 text-[var(--text-primary-dark)]">
                {isZh ? '数控激光与高精研磨加工' : 'CNC Laser & Precision Rule Grinding'}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary-dark)]">
                {isZh
                  ? '进口大功率激光机割缝，刀条采用数控弯刀与微米级磨削，刀缝垂直度与夹紧力恒定，保证高速不跳刀。'
                  : 'High-power laser beam slotting paired with CNC rule bending ensures uniform blade height and perpendicularity for vibration-free runs.'}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[var(--surface-dark)] border border-[var(--border-dark)]">
              <span className="text-2xl font-black text-[var(--accent)] mb-2 block">03</span>
              <h3 className="text-base font-bold mb-2 text-[var(--text-primary-dark)]">
                {isZh ? '三坐标投影与全尺寸出厂实测' : 'CMM Optical Inspection & Trial Cut'}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary-dark)]">
                {isZh
                  ? '5-10 名专职质检员使用光学投影仪对刀高、对齐销孔、压痕槽宽逐一打点记录，随货附带质检合格单。'
                  : 'Full inspection protocol measuring blade height, register pins, and creasing groove width with accompanying QC verification sheet.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form with Machine Pre-selection */}
      <section id="drawing-inquiry" className="py-20 px-6 border-b border-[var(--border-dark)]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label={isZh ? '发送机型图纸询价' : 'Direct Engineering Inquiry'}
            title={isZh ? '告知您的模切机型，获取专属刀模方案' : 'Submit Specifications & Drawing for Your Press'}
            subtitle={isZh ? '附上包装图纸与机型信息，我们的工程团队将在 24 小时内出具适配方案与报价单。' : 'Provide your machine model and product drawing. Our engineering team will return a tailored tooling quotation within 24 hours.'}
            center
          />

          <div 
            className="mt-12 p-8 md:p-10 rounded-xl"
            style={{
              background: 'var(--surface-mid)',
              border: '1px solid var(--border-light)'
            }}
          >
            {submitState === 'success' && (
              <div
                className="mb-8 p-6 rounded-lg border text-center"
                style={{
                  background: 'rgba(37, 211, 102, 0.12)',
                  borderColor: 'rgba(37, 211, 102, 0.35)',
                  color: '#25D366',
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-2 font-bold text-base">
                  <CheckCircle2 size={20} />
                  <span>{isZh ? '图纸与询价信息已成功提交！' : 'Specifications & Drawings Received!'}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary-light)]">
                  {isZh 
                    ? '我们的模具工程师已收到您的机型与图纸，将在 24 小时内（通常 2 小时内）通过邮件回复详细报价。'
                    : 'Our tooling engineers have received your machine specifications and drawings. We will reply within 24 hours.'}
                </p>
              </div>
            )}

            {submitState === 'error' && (
              <div
                className="mb-8 p-4 rounded-lg border text-center text-xs"
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  borderColor: 'rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                }}
              >
                {isZh ? '提交失败，请检查网络或直接通过 WhatsApp 联系我们。' : 'Submission failed. Please try again or reach out directly on WhatsApp.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Machine Model Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                  {isZh ? '1. 选择您的模切机品牌/型号 *' : '1. Select Your Machine Platform *'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'BOBST (Novacut/Expertcut/SP)',
                    'Heidelberg / MK Masterwork',
                    'Sanwa (TRP Series)',
                    'ETERNA / Other Domestic'
                  ].map((brandOption) => {
                    const isSelected = selectedMachineModel.includes(brandOption.split(' ')[0]);
                    return (
                      <button
                        type="button"
                        key={brandOption}
                        onClick={() => setSelectedMachineModel(brandOption)}
                        className="p-3 text-left text-xs font-semibold rounded border transition-all"
                        style={{
                          background: isSelected ? 'rgba(217, 83, 30, 0.15)' : 'var(--surface-dark)',
                          borderColor: isSelected ? 'var(--accent)' : 'var(--border-dark)',
                          color: isSelected ? 'var(--accent)' : 'var(--text-secondary-dark)',
                        }}
                      >
                        {brandOption}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                    {isZh ? '您的姓名 *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    style={inputStyle}
                    className={inputClass}
                    placeholder={isZh ? '例如：张经理' : 'e.g. John Doe'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                    {isZh ? '公司名称 *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    style={inputStyle}
                    className={inputClass}
                    placeholder={isZh ? '例如：某某包装彩印有限公司' : 'e.g. Global Packaging Ltd.'}
                  />
                </div>
              </div>

              {/* Email & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                    {isZh ? '工作邮箱 *' : 'Business Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    style={inputStyle}
                    className={inputClass}
                    placeholder={isZh ? 'name@company.com' : 'purchasing@company.com'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                    {isZh ? '国家 / 地区 *' : 'Country / Region *'}
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    style={inputStyle}
                    className={inputClass}
                    placeholder={isZh ? '例如：中国、德国、美国' : 'e.g. Germany, USA, Spain'}
                  />
                </div>
              </div>

              {/* Product Type Needed */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                  {isZh ? '2. 所需刀模产品类型 *' : '2. Tooling Configuration Needed *'}
                </label>
                <select
                  name="product"
                  required
                  style={inputStyle}
                  className={inputClass}
                >
                  <option value="Sandwich Cutting Die">{isZh ? '三明治刀模（Sandwich Die）' : 'Sandwich Cutting Die'}</option>
                  <option value="Hardened Steel Counter Plate">{isZh ? '淬硬钢底模（Steel Counter Plate）' : 'Hardened Steel Counter Plate'}</option>
                  <option value="Dynamic Blanking Tools">{isZh ? '分盒模（Dynamic Blanking Tools）' : 'Dynamic Blanking Tools'}</option>
                  <option value="Stripping Tools">{isZh ? '清废模（Stripping Tools）' : 'Stripping Tools'}</option>
                  <option value="Wooden Cutting Die">{isZh ? '激光木样刀模（Wooden Die）' : 'Wooden Cutting Die'}</option>
                  <option value="Hot Stamping / Embossing Die">{isZh ? '烫金凹凸版（Hot Stamping & Embossing）' : 'Hot Stamping / Embossing Die'}</option>
                  <option value="Full Tooling Suite (Die + Counter + Stripping + Blanking)">{isZh ? '整套模具集成方案（刀模+底模+清废+分盒）' : 'Full Tooling Suite (Die + Counter + Stripping + Blanking)'}</option>
                </select>
              </div>

              {/* Message / Requirement Specs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                  {isZh ? '3. 规格要求与补充说明' : '3. Specifications & Order Details'}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  className={inputClass}
                  placeholder={isZh 
                    ? '例如：纸板材质（350g白卡/瓦楞）、订购套数、版幅尺寸、特殊排废要求等...'
                    : 'e.g. Cardboard caliper (350gsm SBS), run length, chase size, special ejection requirements...'}
                />
              </div>

              {/* File Upload Component */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary-dark)' }}>
                  {isZh ? '4. 上传工业图纸 / 设计文件（可选，最多 5 个）' : '4. Upload CAD Drawings / Specs (Optional, Max 5)'}
                </label>
                <div
                  className="p-6 rounded-lg text-center border-2 border-dashed transition-colors"
                  style={{
                    background: 'var(--surface-dark)',
                    borderColor: fileError ? 'rgba(239, 68, 68, 0.5)' : 'var(--border-dark)',
                  }}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    multiple
                    accept={ACCEPTED_FILE_TYPES}
                    onChange={handleFileChange}
                    className="hidden"
                    id="drawing-file-upload-compat"
                  />
                  <label htmlFor="drawing-file-upload-compat" className="cursor-pointer block">
                    <UploadCloud className="mx-auto mb-2 text-[var(--accent)]" size={32} />
                    <span className="text-xs font-semibold block text-[var(--text-primary-dark)]">
                      {isZh ? '点击浏览或将图纸拖入此区域' : 'Click to Browse or Drag & Drop Drawings Here'}
                    </span>
                    <span className="text-[11px] block mt-1 text-[var(--text-secondary-dark)]">
                      {isZh 
                        ? '支持 DXF, DWG, AI, PDF, CDR, STEP, ZIP, RAR, PNG, JPG (单文件最大 20MB)'
                        : 'Supports DXF, DWG, AI, PDF, CDR, STEP, ZIP, RAR (Max 20MB each)'}
                    </span>
                  </label>
                </div>

                {fileError && (
                  <p className="text-xs text-red-400 mt-2">{fileError}</p>
                )}

                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary-dark)]">
                      <span>{isZh ? `已选择 ${selectedFiles.length} 个文件` : `Selected ${selectedFiles.length} file(s)`}</span>
                      <button
                        type="button"
                        onClick={handleClearAllFiles}
                        className="text-xs text-red-400 hover:underline"
                      >
                        {isZh ? '清空全部' : 'Clear All'}
                      </button>
                    </div>
                    {selectedFiles.map((f, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded bg-[var(--surface-dark)] border border-[var(--border-dark)] text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileCheck size={14} className="text-[var(--accent)] flex-shrink-0" />
                          <span className="truncate">{f.name}</span>
                          <span className="text-[10px] text-[var(--text-secondary-dark)]">
                            ({(f.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveSingleFile(idx)}
                          className="p-1 hover:text-red-400"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  {isSubmitting 
                    ? (isZh ? '正在提交方案...' : 'Submitting Request...') 
                    : (isZh ? '提交机型图纸与获取报价' : 'Request Machine Tooling Quote')}
                </button>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm font-semibold transition-all"
                  style={{
                    background: 'rgba(37, 211, 102, 0.12)',
                    color: '#25D366',
                    border: '1px solid rgba(37, 211, 102, 0.3)'
                  }}
                >
                  <MessageCircle size={16} />
                  {isZh ? '通过 WhatsApp 快速传图' : 'Instant Chat on WhatsApp'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-6 border-b border-[var(--border-dark)]" style={{ background: 'var(--surface-mid)' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label={isZh ? '常见问答' : 'Technical FAQ'}
            title={isZh ? '模切机工装适配常见问题' : 'Frequently Asked Questions on Machine Fitment'}
            subtitle={isZh ? '关于公差控制、机型改装、图纸格式及国际物流的常见解答。' : 'Answers regarding alignment tolerances, custom chases, file formats, and delivery.'}
            center
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = !!faqOpen[idx];
              return (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border transition-colors"
                  style={{
                    background: 'var(--surface-dark)',
                    borderColor: isOpen ? 'var(--accent)' : 'var(--border-dark)',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm"
                    style={{ color: 'var(--text-primary-dark)' }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[var(--accent)]" /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs leading-relaxed border-t border-[var(--border-dark)] pt-3 text-[var(--text-secondary-dark)]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Link Product Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--text-primary-dark)' }}>
            {isZh ? '探索更多精密刀模与配套产品' : 'Explore Related Precision Tooling Categories'}
          </h2>
          <p className="text-xs mb-8 text-[var(--text-secondary-dark)]">
            {isZh ? '查看我们专为高速高负荷生产线打造的完整刀模产品矩阵。' : 'Browse our comprehensive catalog of high-speed die-cutting tooling and consumables.'}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="p-4 rounded-lg bg-[var(--surface-mid)] border border-[var(--border-light)] hover:border-[var(--accent)] transition-all text-left block group"
              >
                <div className="aspect-video w-full rounded overflow-hidden mb-3 bg-neutral-900">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="text-xs font-bold text-[var(--text-primary-dark)] group-hover:text-[var(--accent)] transition-colors truncate">
                  {isZh ? p.nameZh : p.name}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary-dark)] line-clamp-1 mt-1">
                  {isZh ? p.descriptionZh : p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

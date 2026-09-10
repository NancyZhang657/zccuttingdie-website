import { useEffect } from 'react';
import { useLang } from '../lib/useLang';
import { updatePageMeta } from '../lib/seo';
import Hero from '../components/hero/Hero';
import ProductCategories from '../components/categories/ProductCategories';
import EquipmentCompatibility from '../components/features/EquipmentCompatibility';
import CompanyStory from '../components/about/CompanyStory';
import WhyChooseUs from '../components/features/WhyChooseUs';
import SandwichDieSpotlight from '../components/features/SandwichDieSpotlight';
import GlobalClients from '../components/clients/GlobalClients';
import Testimonials from '../components/testimonials/Testimonials';
import CompanyAbout from '../components/about/CompanyAbout';
import InquiryCTA from '../components/features/InquiryCTA';
import ContactSection from '../components/contact/ContactSection';

export default function HomePage() {
  const { lang } = useLang();

  useEffect(() => {
    updatePageMeta({
      title: lang === 'zh' ? '众诚激光刀模 | 精密模切工具' : 'Zhongcheng Cutting Die | Precision Die-Cutting Tools',
      description:
        lang === 'zh'
          ? '众诚激光刀模为全球包装生产线制造精密刀模、清废工具、底模及配套模切工具。'
          : 'Zhongcheng Laser Die manufactures precision cutting dies, stripping tools, counter plates and tooling for global packaging production lines.',
      path: '/',
      lang,
    });
  }, [lang]);

  return (
    <main style={{ paddingTop: '72px' }}>
      <Hero />
      <ProductCategories />
      <CompanyStory />
      <EquipmentCompatibility />
      <WhyChooseUs />
      <SandwichDieSpotlight />
      <GlobalClients />
      <Testimonials />
      <CompanyAbout />
      <InquiryCTA />
      <ContactSection />
    </main>
  );
}

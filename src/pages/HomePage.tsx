import Hero from '../components/hero/Hero';
import HeroGallery from '../components/hero/HeroGallery';
import CountryLanguageSelector from '../components/dynamic/CountryLanguageSelector';
import ProductCategories from '../components/categories/ProductCategories';
import EquipmentCompatibility from '../components/features/EquipmentCompatibility';
import CompanyStory from '../components/about/CompanyStory';
import WhyChooseUs from '../components/features/WhyChooseUs';
import SandwichDieSpotlight from '../components/features/SandwichDieSpotlight';
import GlobalClients from '../components/clients/GlobalClients';
import Testimonials from '../components/testimonials/Testimonials';
import DynamicProducts from '../components/dynamic/DynamicProducts';
import CompanyAbout from '../components/about/CompanyAbout';
import Certificates from '../components/dynamic/Certificates';
import InquiryCTA from '../components/features/InquiryCTA';
import ContactSection from '../components/contact/ContactSection';

export default function HomePage() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <Hero />
      <HeroGallery />
      <CountryLanguageSelector />
      <ProductCategories />
      <DynamicProducts />
      <CompanyStory />
      <EquipmentCompatibility />
      <WhyChooseUs />
      <SandwichDieSpotlight />
      <GlobalClients />
      <Testimonials />
      <Certificates />
      <CompanyAbout />
      <InquiryCTA />
      <ContactSection />
    </main>
  );
}

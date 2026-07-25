import Hero from '../components/hero/Hero';
import CountryLanguageSelector from '../components/dynamic/CountryLanguageSelector';
import ProductCategories from '../components/categories/ProductCategories';
import EquipmentCompatibility from '../components/features/EquipmentCompatibility';
import WhyChooseUs from '../components/features/WhyChooseUs';
import SandwichDieSpotlight from '../components/features/SandwichDieSpotlight';
import GlobalClients from '../components/clients/GlobalClients';
import DynamicProducts from '../components/dynamic/DynamicProducts';
import CompanyAbout from '../components/about/CompanyAbout';
import Certificates from '../components/dynamic/Certificates';
import InquiryCTA from '../components/features/InquiryCTA';
import ContactSection from '../components/contact/ContactSection';

export default function HomePage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — CountryLanguageSelector (immediately after Hero) */}
      <CountryLanguageSelector />

      {/* Section 3 — Product Categories (static showcase) */}
      <ProductCategories />

      {/* Section 4 — Dynamic Products (after static showcase) */}
      <DynamicProducts />

      {/* Section 5 — Equipment Compatibility */}
      <EquipmentCompatibility />

      {/* Section 6 — Why Choose Us */}
      <WhyChooseUs />

      {/* Section 7 — Sandwich Die Spotlight */}
      <SandwichDieSpotlight />

      {/* Section 8 — Global Clients */}
      <GlobalClients />

      {/* Section 9 — Certificates */}
      <Certificates />

      {/* Section 10 — Company About */}
      <CompanyAbout />

      {/* Section 11 — Inquiry CTA */}
      <InquiryCTA />

      {/* Section 12 — Contact with Alitalk */}
      <ContactSection />
    </main>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './lib/langContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import QuoteRail from './components/layout/QuoteRail';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import CompatibilityPage from './pages/CompatibilityPage';
import InsightsPage from './pages/InsightsPage';
import ArticleDetail from './pages/ArticleDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LangProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<ArticleDetail />} />
          <Route path="/blog" element={<InsightsPage />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/cases" element={<InsightsPage />} />
          <Route path="/compatibility" element={<CompatibilityPage />} />
          <Route path="/machine-compatibility-guide" element={<CompatibilityPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <QuoteRail />
        <WhatsAppFloat />
      </Router>
    </LangProvider>
  );
}

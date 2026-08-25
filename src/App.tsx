import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './lib/langContext';
import Navbar from './components/layout/Navbar';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import QuoteRail from './components/layout/QuoteRail';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <LangProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <QuoteRail />
        <WhatsAppFloat />
      </Router>
    </LangProvider>
  );
}

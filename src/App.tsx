import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './lib/langContext';
import Navbar from './components/layout/Navbar';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <LangProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <WhatsAppFloat />
      </Router>
    </LangProvider>
  );
}

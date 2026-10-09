import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { installWhatsAppTracking } from './lib/analytics';
import './styles.css';

installWhatsAppTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import { MessageCircle } from 'lucide-react';

const WHATSAPP = 'https://wa.me/8613402211941';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ background: '#25D366' }}
      aria-label="Contact via WhatsApp / WeChat"
      title="WhatsApp / WeChat: +86 150 6615 9371"
    >
      <MessageCircle size={26} color="#fff" />
    </a>
  );
}

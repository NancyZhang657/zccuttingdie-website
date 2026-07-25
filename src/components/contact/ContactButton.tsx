import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { openAlitalk } from '../../lib/openAlitalk';

const COMPANY_ID = '291975556';

export default function ContactButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    openAlitalk({
      bizId: COMPANY_ID,
      bizType: 2,
      hideIFrame: true,
      onLoading: setLoading,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="btn-primary inline-flex items-center gap-2"
      aria-label="Contact supplier via Alitalk"
    >
      <MessageCircle size={18} />
      {loading ? 'Connecting...' : 'Contact Supplier'}
    </button>
  );
}

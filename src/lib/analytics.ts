type AnalyticsParam = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParam>;

declare global {
  interface Window {
    gtag?: (command: string, target: string, params?: AnalyticsParams) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  window.gtag?.('event', name, params);
}

export function installWhatsAppTracking() {
  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
    if (!link) return;

    const component = link.closest<HTMLElement>('[data-component]')?.dataset.component ?? 'global';
    trackEvent('whatsapp_click', {
      link_location: component,
      link_text: link.textContent?.trim().slice(0, 80) || 'WhatsApp',
      page_path: window.location.pathname,
    });
  });
}

export {};

import ContactButton from './ContactButton';

const ALIBABA_CONTACT = 'https://jinanzhongcheng.en.alibaba.com/contactinfo.html';

export default function ContactSection() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{ background: 'var(--surface-void)' }}
      data-component="ContactSection"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <p className="section-label mb-4" style={{ color: 'var(--accent)' }}>
          Get in Touch
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-dark)' }}
        >
          Ready to Start Your Order?
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary-dark)' }}>
          Our technical team responds within 24 hours. Send your specifications and we'll provide
          a precision-matched solution for your production line.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ContactButton />
          <a
            href={ALIBABA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-dark"
          >
            Message on Alibaba
          </a>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link'

export const metadata = {
  title: 'Services — AI Strategy Consulting, Architecture & Implementation | StratAI™',
  description: 'StratAI delivers four AI services in sequence: AI Strategy Consulting, AI Systems Architecture, AI Technical Configuration, and AI Implementation. One outcome: competitive advantage in your P&L within 6 months.',
  keywords: ['AI strategy consulting manufacturing', 'AI systems architecture', 'AI implementation manufacturing India', 'AI technical configuration', 'manufacturing AI services', 'StratAI services'],
  openGraph: {
    title: 'StratAI™ Services — Four Services. One Outcome: P&L Impact.',
    description: 'AI Strategy Consulting → AI Systems Architecture → AI Technical Configuration → AI Implementation. Designed to work together.',
    url: 'https://stratai.io/services',
  },
}

const SERVICES = [
  {
    num: '01',
    slug: 'ai-transformation-strategy',
    icon: '🗺',
    title: 'AI Strategy Consulting',
    what: 'We identify which AI use cases will create measurable competitive advantage for your specific business — not a generic framework, a decision grounded in your P&L.',
    tasks: [
      'Diagnostic review of your current operations, systems, and data maturity',
      'Identification of high-value AI use cases ranked by P&L impact',
      'Competitive analysis: where AI can separate you from the market',
      'Prioritisation aligned to management\'s strategic objectives',
    ],
    outcome: 'A clear, ranked AI investment roadmap tied to business outcomes — not a slide deck of possibilities.',
  },
  {
    num: '02',
    slug: 'autonomous-agent-systems',
    icon: '⚙️',
    title: 'AI Systems Architecture',
    what: 'Before a single line of code is written, we design the complete AI Advantage System — how it connects to your people, processes, data, and existing tech stack.',
    tasks: [
      'System design mapping AI workflows to existing operational processes',
      'Data architecture: what data, where it lives, how it flows',
      'Integration blueprint with your ERP, MES, CRM, or other systems',
      'Change management design: how your teams will adopt and use the system',
    ],
    outcome: 'A complete system blueprint that eliminates surprises during implementation.',
  },
  {
    num: '03',
    slug: 'marketing-automation',
    icon: '🔧',
    title: 'AI Technical Configuration',
    what: 'We build and configure the AI system. Model selection, tool configuration, API integration, testing, and validation against your real data.',
    tasks: [
      'AI model selection and fine-tuning for your specific use case',
      'Tool and platform configuration — no one-size-fits-all stack',
      'API and system integration with existing software',
      'Testing across live production data before rollout',
    ],
    outcome: 'A working, tested AI system — not a prototype.',
  },
  {
    num: '04',
    slug: 'ecommerce-ai',
    icon: '🚀',
    title: 'AI Implementation',
    what: 'Deployment, team adoption, and ongoing measurement until the outcome shows in the P&L. We do not hand over and disappear.',
    tasks: [
      'Phased rollout with your teams — not just your IT department',
      'Behaviour change and adoption support for frontline and management',
      'KPI tracking against agreed P&L impact metrics',
      'Continuous iteration based on what the data shows',
    ],
    outcome: 'AI that is actually used, measured, and visible in business results.',
  },
]

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: 'clamp(44px,6vw,80px) clamp(16px,4vw,24px) clamp(32px,5vw,56px)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '12px' }}>HOW WE BUILD</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,76px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--text)', marginBottom: '20px' }}>
            FOUR SERVICES.<br />ONE SYSTEM.<br />ONE OUTCOME.
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '17px', maxWidth: '560px', lineHeight: '1.65', marginBottom: '32px' }}>
            Every engagement uses all four services in sequence. You don&apos;t pick one — they are designed to work together. The outcome is competitive advantage in your P&L.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', padding: '12px 28px', borderRadius: '9999px', background: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff', textDecoration: 'none' }}>
            → Start With a Free Audit
          </Link>
        </div>
      </div>

      {/* Services detail */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(32px,5vw,56px) clamp(16px,4vw,24px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {SERVICES.map((svc, i) => (
            <div key={svc.slug} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 1fr', gap: 0 }} className="service-detail-grid">

                {/* Number column */}
                <div style={{ padding: 'clamp(24px,4vw,48px) 24px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text3)', letterSpacing: '0.08em' }}>{svc.num}</div>
                  <div style={{ fontSize: '22px' }}>{svc.icon}</div>
                </div>

                {/* What it is */}
                <div style={{ padding: 'clamp(24px,4vw,48px) clamp(16px,4vw,40px)', borderRight: '1px solid var(--border)' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '16px', lineHeight: 1.1 }}>
                    {svc.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: '1.7', marginBottom: '24px' }}>{svc.what}</p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text3)', marginBottom: '12px' }}>WHAT WE DO</div>
                  {svc.tasks.map((task, j) => (
                    <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ color: 'var(--orange)', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: '11px', marginTop: '2px' }}>→</span>
                      <span style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6' }}>{task}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div style={{ padding: 'clamp(24px,4vw,48px) clamp(16px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--orange)', marginBottom: '14px' }}>WHAT YOU GET</div>
                  <p style={{ fontSize: '16px', color: 'var(--text)', fontWeight: 500, lineHeight: '1.7', fontStyle: 'italic' }}>
                    &ldquo;{svc.outcome}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '48px', textAlign: 'center', marginTop: '1px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '12px' }}>
            NOT SURE WHERE YOUR BUSINESS IS ON THE AI CURVE?
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
            Start with a free half-day audit. We identify which AI Advantage System will move your P&L first.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', padding: '12px 28px', borderRadius: '9999px', background: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff', textDecoration: 'none' }}>
            → Start With a Free Audit
          </Link>
        </div>
      </div>

      {/* Cross-links */}
      <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/advantage-systems" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text2)', textDecoration: 'none' }}>→ See Our AI Advantage Systems</Link>
            <Link href="/engagement-model" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text2)', textDecoration: 'none' }}>→ How We Engage</Link>
            <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text2)', textDecoration: 'none' }}>← Back to Home</Link>
          </div>
          <Link href="/contact" style={{ padding: '10px 24px', borderRadius: '9999px', background: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            → Start With a Free Audit
          </Link>
        </div>
      </div>
    </div>
  )
}

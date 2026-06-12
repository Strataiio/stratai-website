export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getTeam } from '@/lib/supabase'
import Link from 'next/link'

export const metadata = {
  alternates: { canonical: 'https://stratai.io/about' },
  title: 'About StratAI™ — Domain-First AI for Mid-Market Manufacturing',
  description: 'StratAI holds knowledge at the intersection of change management, human behaviour, ERP systems, manufacturing processes, and AI capability. 90%+ client retention. 12+ retainer clients. Building AI Advantage Systems that show up in your P&L.',
  keywords: ['StratAI about', 'AI consulting manufacturing India', 'domain-first AI', 'manufacturing AI partner India', 'AI transformation consulting Coimbatore'],
  openGraph: {
    title: 'About StratAI™ — We Hold the Knowledge at the Intersection',
    description: 'Change management + human behaviour + ERP understanding + manufacturing process + AI capability. Five prerequisites for AI that works. 90%+ client retention.',
    url: 'https://stratai.io/about',
  },
}

const AVATAR_COLORS = ['#FF5500', '#1A1917', '#2563EB', '#16A34A']

function TeamAvatar({ member, index }) {
  const initials = (member.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length]
  if (member.avatar_url) {
    return (
      <div style={{ width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', border: '3px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
        <img src={member.avatar_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    )
  }
  return (
    <div style={{ width: '96px', height: '96px', borderRadius: '50%', marginBottom: '20px', border: '2px dashed var(--border2)', background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color }}>{initials}</span>
    </div>
  )
}

export default async function AboutPage() {
  const team = await getTeam().catch(() => [])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'var(--bg-dark)', padding: 'clamp(44px,6vw,80px) clamp(16px,4vw,24px) clamp(40px,6vw,72px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #1f1f1e' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.10 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '14px' }}>ABOUT STRATAI</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,80px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#fff', marginBottom: '28px' }}>
            WE HOLD THE<br />
            <span style={{ color: 'var(--orange)' }}>KNOWLEDGE AT<br />THE INTERSECTION.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: '1.7' }}>
            For an AI Advantage System to deliver measurable P&L impact, it requires five things to exist simultaneously in one team. Most firms have one or two. We have all five.
          </p>
        </div>
      </div>

      {/* The 5 Prerequisites */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,24px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '14px' }}>WHAT MAKES AI WORK IN MANUFACTURING</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,48px)', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '48px', lineHeight: 1.05 }}>
            Five prerequisites.<br />Most AI projects fail because one is missing.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {[
              { num: '01', title: 'Change Management',          desc: 'AI does not replace processes — it changes behaviour. Implementation without change management produces systems that are never used.' },
              { num: '02', title: 'Understanding Human Behaviour', desc: 'Who resists change and why. Who holds informal authority. How decisions actually get made on the ground — not how they are described in meetings.' },
              { num: '03', title: 'Understanding Existing ERP',  desc: 'Your ERP was built to capture data, not to drive decisions. We understand what data exists, where it lives, how clean it is, and what it cannot tell you.' },
              { num: '04', title: 'Understanding Manufacturing Process', desc: 'From raw material to finished goods. The real process — not the SOP version. Including the informal systems, the workarounds, and the moments where decisions actually get made.' },
              { num: '05', title: 'Understanding What AI Is Capable Of', desc: 'Not in theory — in production. We know what AI can reliably do for a manufacturing business today, and equally important, what it cannot do yet.' },
            ].map((item, i) => (
              <div key={item.num} style={{ background: 'var(--bg)', padding: 'clamp(20px,4vw,36px) clamp(16px,4vw,32px)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: i === 0 ? 'var(--orange)' : 'var(--text3)', marginBottom: '16px' }}>{item.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '12px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '32px 36px', background: 'var(--bg)', border: '1px solid var(--border)', borderLeft: '4px solid var(--orange)' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', lineHeight: '1.6', fontStyle: 'italic' }}>
              &ldquo;We hold the knowledge at the intersection of all five. That is why our AI Advantage Systems show up in your P&L — and why most vendor implementations do not.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* How we work */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,24px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '14px' }}>HOW WE WORK</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,48px)', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '20px', lineHeight: 1.05 }}>
            Horizontal relationships.<br />From the board to the shop floor.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text2)', maxWidth: '700px', lineHeight: '1.75', marginBottom: '48px' }}>
            We build relationships across every level of the business — not just with the CXO who signed the contract, but with the operations head who owns the process, the middle manager who will champion adoption, and the worker on the shop floor whose behaviour determines whether the system is used. That depth of access is why our implementations stick.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }} className="about-3-grid">
            {[
              { level: 'Board / CXO', desc: 'We speak the language of P&L, competitive advantage, and capital allocation. We tie every AI Advantage System to a measurable business outcome before we write a line of code.' },
              { level: 'Middle Management', desc: 'We understand the operational reality. We work with managers to design systems that reduce their burden, not add to it. Adoption starts here.' },
              { level: 'Shop Floor / Frontline', desc: 'This is where AI succeeds or fails. We observe, listen, and build systems that fit how frontline teams actually work — not how management imagines they do.' },
            ].map((item, i) => (
              <div key={item.level} style={{ background: i === 0 ? 'var(--bg2)' : 'var(--bg)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--orange)', marginBottom: '12px' }}>{item.level.toUpperCase()}</div>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proof */}
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,24px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }} className="about-stats-grid">
            {[
              { value: '90%+',  label: 'Client Retention Rate',       sub: 'The proof of how we work' },
              { value: '12+',   label: 'Retainer Clients',            sub: 'Long-term AI Advantage builds' },
              { value: '12+',   label: 'AI Use Cases Deployed',       sub: 'Running in production' },
              { value: '1L+',   label: 'Emails Analysed',             sub: 'Precot Intelligence Programme' },
            ].map((s, i) => (
              <div key={s.label} style={{ background: 'var(--bg)', padding: 'clamp(24px,4vw,40px) clamp(16px,4vw,32px)', position: 'relative' }}>
                {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'var(--orange)' }} />}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,56px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)', marginBottom: '10px' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--orange)', marginBottom: '5px' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '28px 36px', background: 'var(--bg)', border: '1px solid var(--border)', borderLeft: '4px solid var(--orange)' }}>
            <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: '1.7' }}>
              <strong>Our 90%+ client retention rate</strong> is not a marketing claim. It is the result of building relationships at every level of the business, delivering systems that people actually use, and staying embedded long enough for the results to show up in the P&L. Clients who stay are clients who are winning.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      {team.length > 0 && (
        <div style={{ borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,24px)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '14px' }}>THE TEAM</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,44px)', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '48px', lineHeight: 1.05 }}>
              The people who build your AI Advantage.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'var(--border)' }}>
              {team.map((member, index) => (
                <div key={member.id} style={{ background: 'var(--bg)', padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,36px)', display: 'flex', flexDirection: 'column' }}>
                  <TeamAvatar member={member} index={index} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.06em', marginBottom: '14px' }}>{member.role?.toUpperCase()}</div>
                  {member.bio && <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7', flex: 1 }}>{member.bio}</p>}
                  {member.linkedin_url && (
                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text3)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '2px', width: 'fit-content' }}>
                      LINKEDIN →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{ background: 'var(--bg2)', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,24px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '14px' }}>THE NEXT STEP</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,44px)', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '16px', lineHeight: 1.1 }}>
            Start with a conversation, not a pitch deck.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text2)', marginBottom: '32px', lineHeight: 1.7 }}>
            We spend the first half-day understanding your business. No fee. No commitment. If we are not the right fit, we will tell you — and tell you who is.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ padding: '12px 28px', borderRadius: '9999px', background: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#fff', textDecoration: 'none' }}>
              → Book Free Half-Day Audit
            </Link>
            <Link href="/engagement-model" style={{ padding: '12px 24px', borderRadius: '9999px', border: '1px solid var(--border2)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--text2)', textDecoration: 'none' }}>
              How We Engage →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

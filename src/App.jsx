import React, { useState } from 'react';
const LOGO_URI = 'data:image/png;base64,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';
// --- REPLACE THIS with your Formspree endpoint after Step 1 ---
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvznyqaw';

const c = {
  cinnamon:      '#c86434',
  lightCinnamon: '#ecc9ba',
  turquoise:     '#2fbca0',
  turquoiseDark: '#239e87',
  blue:          '#0369a1',
  darkText:      '#1c1714',
  midText:       '#5a4e47',
  lightText:     '#9a8a84',
  pageBg:        '#f0efec',
  white:         '#ffffff',
  errorRed:      '#c0392b',
};

// Logo loads from public/logo.png — see README for how to add this file
function Logo() {
  return (
    <img
      src={LOGO_URI}
      alt="BeHallthy"
      style={{ height: '75px', display: 'block', mixBlendMode: 'multiply' }}
    />
  );
}

function inputStyle(focused) {
  return {
    width: '100%',
    padding: '12px 14px',
    border: `1.5px solid ${focused ? c.turquoise : '#d8d0ca'}`,
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: '"Lato", sans-serif',
    boxSizing: 'border-box',
    outline: 'none',
    color: c.darkText,
    backgroundColor: c.white,
    transition: 'border-color 0.15s',
  };
}

export default function App() {
  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [submitted,  setSubmitted]  = useState(false);
  const [error,      setError]      = useState('');
  const [loading,    setLoading]    = useState(false);
  const [focusName,  setFocusName]  = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Please add your name.'); return; }
    if (!email.trim() || !email.includes('@')) {
      setError('Please add a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email hello@behallthy.com.');
      }
    } catch {
      setError('Could not connect. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      fontFamily: '"Lato", sans-serif',
      minHeight: '100vh',
      backgroundColor: c.pageBg,
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── Header ── */}
      <header style={{
        padding: '20px 24px',
        backgroundColor: c.pageBg,
        borderBottom: `1px solid #ddd8d2`,
      }}>
        <div>
          <Logo />
        </div>
      </header>

      {/* ── Main ── */}
      <main style={{
        flex: 1,
        padding: '32px 24px 32px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Headline */}
        <h1 style={{
          fontFamily: '"Lora", Georgia, serif',
          fontSize: 'clamp(26px, 5vw, 38px)',
          fontWeight: '700',
          lineHeight: '1.2',
          letterSpacing: '-0.4px',
          marginBottom: '22px',
          textAlign: 'center',
        }}>
          <span style={{ color: c.blue }}>Vetted health coaches,</span>
          <br />
          <span style={{ color: c.turquoise }}>matched to you.</span>
        </h1>

        {/* Body copy */}
        <p style={{
          fontSize: '17px',
          lineHeight: '1.75',
          color: c.midText,
          textAlign: 'center',
          maxWidth: '480px',
          margin: '0 auto 40px',
        }}>
          BeHallthy connects you with qualified, insured health coaches who specialise in
          exactly what you are dealing with. Start with a low-cost group session or 
          a one-to-one taster, and find the coach you want to work with. Launching soon in the UK and Ireland.
        </p>

        {/* Form card */}
        <div style={{
          backgroundColor: c.white,
          borderRadius: '16px',
          padding: '32px 28px',
          boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
          border: `1px solid #ddd8d2`,
          maxWidth: '460px',
          margin: '0 auto',
        }}>

          {submitted ? (
            /* ── Success ── */
            <div style={{ textAlign: 'center', padding: '8px 0' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                backgroundColor: c.turquoise,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                  <path d="M5 13l6 6L21 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{
                fontFamily: '"Lora", Georgia, serif',
                fontSize: '22px', fontWeight: '700',
                color: c.darkText, marginBottom: '10px',
              }}>
                You're on the list.
              </h2>
              <p style={{ color: c.midText, fontSize: '16px', lineHeight: '1.65' }}>
                We'll be in touch when BeHallthy launches.
              </p>
            </div>

          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate>
              <h2 style={{
                fontFamily: '"Lora", Georgia, serif',
                fontSize: '20px', fontWeight: '700',
                color: c.darkText, textAlign: 'center', marginBottom: '26px',
              }}>
                Join the waitlist
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <div>
                  <label htmlFor="wl-name" style={{
                    display: 'block', fontSize: '14px', fontWeight: '700',
                    color: c.darkText, marginBottom: '6px',
                  }}>
                    Your name
                  </label>
                  <input
                    id="wl-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name is fine"
                    autoComplete="given-name"
                    style={inputStyle(focusName)}
                    onFocus={() => setFocusName(true)}
                    onBlur={() => setFocusName(false)}
                  />
                </div>

                <div>
                  <label htmlFor="wl-email" style={{
                    display: 'block', fontSize: '14px', fontWeight: '700',
                    color: c.darkText, marginBottom: '6px',
                  }}>
                    Email address
                  </label>
                  <input
                    id="wl-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    style={inputStyle(focusEmail)}
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                  />
                </div>

                {error && (
                  <p role="alert" style={{
                    color: c.errorRed, fontSize: '14px',
                    margin: 0, lineHeight: '1.5',
                  }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%', padding: '14px',
                    borderRadius: '8px', border: 'none',
                    backgroundColor: loading ? '#c4957a' : c.cinnamon,
                    color: c.white,
                    fontSize: '16px', fontWeight: '700',
                    fontFamily: '"Lora", Georgia, serif',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.2px',
                    transition: 'background-color 0.15s',
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#b05529'; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = c.cinnamon; }}
                >
                  {loading ? 'Adding you to the list...' : 'Join the waitlist'}
                </button>

                <p style={{
                  fontSize: '13px', color: c.lightText,
                  textAlign: 'center', margin: 0, lineHeight: '1.5',
                }}>
                  No spam, ever. Just a note when we launch.
                </p>

              </div>
            </form>
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: '20px',
        borderTop: `1px solid #ddd8d2`,
        backgroundColor: c.pageBg,
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '14px', color: c.midText,
          lineHeight: '1.7', margin: '0 auto', maxWidth: '500px',
        }}>
          Are you a health coach? We'd love to hear from you.{' '}
          <a
            href="mailto:hello@behallthy.com"
            style={{ color: c.blue, textDecoration: 'none', fontWeight: '700' }}
          >
            Email hello@behallthy.com
          </a>
        </p>
      </footer>

    </div>
  );
}

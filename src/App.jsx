import React, { useState } from 'react';

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
      src="/logo.png"
      alt="BeHallthy"
      style={{ height: '200px', display: 'block' }}
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Logo />
        </div>
      </header>

      {/* ── Main ── */}
      <main style={{
        flex: 1,
        padding: '52px 24px 64px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Headline */}
        <h1 style={{
          fontFamily: '"Nunito", sans-serif',
          fontSize: 'clamp(30px, 6vw, 46px)',
          fontWeight: '800',
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
          maxWidth: '460px',
          margin: '0 auto 40px',
        }}>
          BeHallthy connects you with qualified, insured health coaches who specialise in
          exactly what you are dealing with. Affordable group sessions and one-to-one
          coaching packages. Launching soon in the UK and Ireland.
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
                fontFamily: '"Nunito", sans-serif',
                fontSize: '22px', fontWeight: '800',
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
                fontFamily: '"Nunito", sans-serif',
                fontSize: '20px', fontWeight: '800',
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
                    fontFamily: '"Nunito", sans-serif',
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
        padding: '24px',
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

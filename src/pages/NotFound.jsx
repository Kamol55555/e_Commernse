import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={styles.main}>
      <div style={styles.content}>
        <p style={styles.code}>404</p>
        <h1 style={styles.title}>Sahifa topilmadi</h1>
        <p style={styles.description}>
          Siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi
          mumkin.
        </p>
        <Link to="/" style={styles.link}>
          Bosh sahifaga qaytish
        </Link>
      </div>
    </main>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  content: {
    maxWidth: '28rem',
    textAlign: 'center',
  },
  code: {
    margin: 0,
    fontSize: 'clamp(5rem, 18vw, 8rem)',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  title: {
    margin: '1rem 0 0.75rem',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 700,
    color: '#f8fafc',
  },
  description: {
    margin: '0 0 2rem',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#94a3b8',
  },
  link: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#0f172a',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
    borderRadius: '0.5rem',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
}

export default NotFound

import { Link } from 'react-router-dom'
import styles from '../css/Home.module.css'

function Home() {
  return (
    <section className={`page_card ${styles.hero}`}>
      <h1 className="page_title">Discover your next favorite product</h1>
      <p className="page_text">
        Browse curated items, manage your cart, and checkout with a smooth shopping
        experience built for everyday use.
      </p>
      <div className={styles.actions}>
        <Link to="/shop" className="btn_primary">
          Start shopping
        </Link>
        <Link to="/auth" className="btn_secondary">
          Sign in
        </Link>
      </div>
    </section>
  )
}

export default Home

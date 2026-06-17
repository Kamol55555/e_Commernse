import { Link } from 'react-router-dom'
import styles from '../css/Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Discover your next favorite product</h1>
      <p className={styles.subtitle}>
        Browse curated items, manage your cart, and checkout with a smooth shopping
        experience built for everyday use.
      </p>
      <div className={styles.actions}>
        <Link to="/shop" className={styles.primary_btn}>
          Start shopping
        </Link>
        <Link to="/auth" className={styles.secondary_btn}>
          Sign in
        </Link>
      </div>
    </section>
  )
}

export default Home

import { Link } from 'react-router-dom'
import styles from '../css/Footer.module.css'
import headerStyles from '../css/Header.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.footer_inner}`}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </p>
        <nav className={styles.footer_nav}>
          <Link to="/" className={headerStyles.footer_link}>
            Home
          </Link>
          <Link to="/shop" className={headerStyles.footer_link}>
            Shop
          </Link>
          <Link to="/contact" className={headerStyles.footer_link}>
            Contact
          </Link>
          <Link to="/about" className={headerStyles.footer_link}>
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

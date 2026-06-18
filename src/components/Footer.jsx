import styles from '../css/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.footer_inner}`}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </p>
        <nav className={styles.footer_nav}>
          {/* user contact info */}
          <div className={styles.contact_info}>
            <h3>Contact Us</h3>
            <p>Email: info@ecommerce.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
          <div className={styles.contact_info}>
            <h3>Follow Us</h3>
            <p>Facebook: @ecommerce</p>
            <p>Twitter: @ecommerce</p>
            <p>Instagram: @ecommerce</p>
          </div>
          
        </nav>
      </div>
    </footer>
  )
}

export default Footer

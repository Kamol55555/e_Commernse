import { Link } from 'react-router-dom'
import styles from '../css/NotFound.module.css'

function NotFound() {
  return (
    <section className={`page_card ${styles.main}`}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={`page_title ${styles.title}`}>Sahifa topilmadi</h1>
        <p className={`page_text ${styles.description}`}>
          Siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
        </p>
        <Link to="/" className="btn_primary">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </section>
  )
}

export default NotFound

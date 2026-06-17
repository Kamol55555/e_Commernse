import { Link } from 'react-router-dom'
import styles from '../css/NotFound.module.css'

function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Sahifa topilmadi</h1>
        <p className={styles.description}>
          Siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
        </p>
        <Link to="/" className={styles.link}>
          Bosh sahifaga qaytish
        </Link>
      </div>
    </main>
  )
}

export default NotFound

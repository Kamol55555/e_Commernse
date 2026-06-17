import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CiHeart } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoPersonCircleOutline } from 'react-icons/io5'
import styles from '../css/Header.module.css'
import favicon from '../assets/vite.svg'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.header_inner}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={favicon} alt="E-commerce logo" />
          </Link>
        </div>

        {user ? (
          <nav className={styles.nav}>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <button type="button" className={styles.sign_out} onClick={logout}>
              Sign out
            </button>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
        )}

        <div className={styles.search}>
          <input type="search" placeholder="Search products..." aria-label="Search" />
        </div>

        <div className={styles.user}>
          {user ? (
            <div className={styles.user_info}>
              <CiHeart aria-label="Wishlist" />
              <AiOutlineShoppingCart aria-label="Cart" />
              <IoPersonCircleOutline aria-label="Profile" />
            </div>
          ) : (
            <Link to="/auth" className={styles.login_btn}>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

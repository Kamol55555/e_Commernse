import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CiHeart } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoPersonCircleOutline, IoMenu, IoClose } from 'react-icons/io5'
import styles from '../css/Header.module.css'
import favicon from '../assets/vite.svg'

function Header() {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleLogout = () => {
    logout()
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.header_inner}`}>
        <div className={styles.top_row}>
          <div className={styles.logo}>
            <Link to="/" onClick={closeMenu}>
              <img src={favicon} alt="E-commerce logo" />
            </Link>
          </div>

          <div className={styles.top_actions}>
            <div className={styles.user}>
              {user ? (
                <div className={styles.user_info}>
                  <CiHeart aria-label="Wishlist" />
                  <AiOutlineShoppingCart aria-label="Cart" />
                  <IoPersonCircleOutline aria-label="Profile" />
                </div>
              ) : (
                <Link to="/auth" className={styles.login_btn} onClick={closeMenu}>
                  Login
                </Link>
              )}
            </div>

            <button
              type="button"
              className={styles.menu_btn}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        <div className={styles.search}>
          <input type="search" placeholder="Search products..." aria-label="Search" />
        </div>

        {user ? (
          <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ''}`}>
            <Link to="/shop" onClick={closeMenu}>Shop</Link>
            <Link to="/cart" onClick={closeMenu}>Cart</Link>
            <Link to="/profile" onClick={closeMenu}>Profile</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <button type="button" className={styles.sign_out} onClick={handleLogout}>
              Sign out
            </button>
          </nav>
        ) : (
          <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/auth" onClick={closeMenu}>Login</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from '../css/Login.module.css'

const panelContent = {
  '/auth': {
    title: 'Welcome back',
    text: 'Login to your account to continue shopping and manage your orders.',
  },
  '/auth/register': {
    title: 'Join us today',
    text: 'Create an account to explore products, save favorites, and checkout faster.',
  },
}

function Login() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useAuth()
  const content = panelContent[pathname] || panelContent['/auth']

  useEffect(() => {
    if (user) {
      navigate('/shop')
    }
  }, [user, navigate])

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <h1 className={styles.left_title}>{content.title}</h1>
        <p className={styles.left_text}>{content.text}</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Login

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllUsers } from '../utils/userStorage'
import styles from '../css/Login.module.css'

function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const matchedUser = getAllUsers().find(
      (u) => u.email === userData.email && u.password === userData.password
    )

    if (matchedUser) {
      login(matchedUser)
    } else {
      setError('Invalid email or password')
    }
  }

  const handleChange = (field) => (e) => {
    setUserData({ ...userData, [field]: e.target.value })
    setError('')
  }

  return (
    <div className={styles.login_form}>
      <h1 className={styles.form_title}>Login</h1>
      <p className={styles.form_subtitle}>Enter your credentials to access your account</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
            value={userData.email}
            onChange={handleChange('email')}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            placeholder="••••••••"
            value={userData.password}
            onChange={handleChange('password')}
          />
        </label>
        <div className={styles.actions}>
          <button
            className={styles.submit_btn}
            type="submit"
            disabled={!userData.email || !userData.password || !!error}
          >
            Login
          </button>
          <button
            className={styles.register_btn}
            type="button"
            onClick={() => navigate('/auth/register')}
          >
            Create an account
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}

export default LoginForm

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { registerUser } from '../utils/userStorage'
import styles from '../css/Login.module.css'

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const newUser = registerUser({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    })

    if (newUser) {
      login(newUser)
    } else {
      setError('Email already registered')
    }
  }

  const handleChange = (field) => (e) => {
    setUserData({ ...userData, [field]: e.target.value })
    setError('')
  }

  const isDisabled =
    !userData.name ||
    !userData.email ||
    !userData.password ||
    !userData.confirmPassword ||
    !!error

  return (
    <div className={styles.login_form}>
      <h1 className={styles.form_title}>Register</h1>
      <p className={styles.form_subtitle}>Create an account to continue</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            value={userData.name}
            onChange={handleChange('name')}
          />
        </label>
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
          <button className={styles.submit_btn} type="submit" disabled={isDisabled}>
            Register
          </button>
          <button
            className={styles.register_btn}
            type="button"
            onClick={() => navigate('/auth')}
          >
            Already have an account
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}

export default Register

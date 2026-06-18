import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoutes from './components/Protected_routes'
import Dashboard from './pages/Dashboard'
import Shop from './pages/shop'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginForm from './components/Login_form'
import './App.css'


function App() {
  return (
    <div className="app">
      <Header />
    
      <main className="content">
        <div className="shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoutes>
                  <Shop />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

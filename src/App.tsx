import React, { useEffect } from 'react'
import logo from './logo.svg'
import './index.css'
import Input from './components/Input'
import ContextWrappers from './context'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import { useAuth } from './context/auth'
import Login from './pages/login'

function App() {
  const navigate = useNavigate()
  const auth = useAuth()
  useEffect(() => {
    if (auth && !localStorage.getItem('logged_in')) {
      navigate('/login')
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!auth.loggedIn && <Route path="/login" element={<Login />} />}
    </Routes>
  )
}

export default App

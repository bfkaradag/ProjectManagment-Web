import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Container from '../components/Container'
import LoginForm from '../components/form/LoginForm'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth'

const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const storageIsLoggedIn = localStorage.getItem('logged_in')
    if (auth.loggedIn || storageIsLoggedIn) navigate('/')
  }, [])
  return (
    <Layout>
      <Container title="Login">
        <LoginForm />
      </Container>
    </Layout>
  )
}

export default Login

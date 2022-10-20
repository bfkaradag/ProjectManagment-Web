import React, { useEffect } from 'react'
import Container from '../components/Container'
import AdminForm from '../components/form/AdminForm'
import UserForm from '../components/form/UserForm'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  const role = localStorage.getItem('user_role')
  return (
    <Layout>
      <Container title="Home">
        {role === '1' ? <AdminForm /> : <UserForm />}
      </Container>
    </Layout>
  )
}

export default Home

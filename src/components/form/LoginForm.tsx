import { useState } from 'react'
import { useAuth } from '../../context/auth'
import Button from '../Button'
import Input from '../Input'
import md5 from 'md5'

const LoginForm = () => {
  const auth = useAuth()

  return (
    <div className="rounded-2xl">
      <form
        onSubmit={(e: any) => {
          e.preventDefault()
          console.log(md5(e.target.username.value))
          auth.login({
            username: e.target.username.value || '',
            password: md5(e.target.password.value) || '',
          })
        }}
      >
        <div className="flex flex-col gap-y-2">
          <Input name="username" placeHolder="Username" type={'text'} />
          <Input name="password" placeHolder="Password" type={'password'} />
          <Button type="submit">login</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

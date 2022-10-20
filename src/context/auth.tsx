import jwtDecode from 'jwt-decode'
import { createContext, useContext, useState } from 'react'
import _fetch from '../helpers/fetch'
import { _BaseResponse } from '../models'
import { LoginRequest, User } from '../models/User'
import { useMessage } from './message'

type _Context = { loggedIn: boolean; login: (req: LoginRequest) => void }

const Context = createContext<_Context>({} as _Context)

export function AuthWrapper({ children }: any) {
  const message = useMessage()
  const [user, setUser] = useState<User | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const login = async (req: LoginRequest) => {
    const response: _BaseResponse<any> = await _fetch(
      '/auth/login',
      'post',
      req,
    )

    if (response?.payload) {
      localStorage.setItem('access_token', response.payload.token)
      localStorage.setItem('logged_in', 'true')
      const decoded: any = jwtDecode(response.payload.token)

      localStorage.setItem('user_role', decoded['user_role'])
      message.showModal({
        title: response.friendlyMessage.title || '',
        message: response.friendlyMessage.message || '',
        status: 'Success',
        buttons: [
          {
            buttonText: 'Tamam',
            onClick: () => {
              message.closeModal()
              window.location.reload()
            },
          },
        ],
        closeWithReload: true,
      })
    } else {
      message.showModal({
        title: response.friendlyMessage.title || '',
        message: response.friendlyMessage.message || '',
        status: 'Error',
        buttons: [
          {
            buttonText: 'Tamam',
            onClick: () => {
              message.closeModal()
            },
          },
        ],
      })
    }
  }

  const logout = () => {
    console.log('logout triggered...')
    setUser(null)
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('logged_in')
    window.location.reload()
  }
  return (
    <Context.Provider value={{ loggedIn: loggedIn, login: login }}>
      {children}
    </Context.Provider>
  )
}

export function useAuth() {
  return useContext(Context)
}

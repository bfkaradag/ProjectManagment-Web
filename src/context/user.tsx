import React from 'react'
import { createContext, useContext, useState } from 'react'
import _fetch from '../helpers/fetch'
import { _BaseResponse } from '../models'
import { TaskRequest, TaskResponse } from '../models/Task'
import { LoginRequest, User } from '../models/User'
import { useMessage } from './message'

type _Context = {
  createTask: (req: TaskRequest) => void
  getUsers: (role: number) => void
  getAllTasks: () => void
  users: User[]
  tasks: TaskResponse[]
  assignTask: (taskId: string) => void
}

const Context = createContext<_Context>({} as _Context)

export function UserWrapper({ children }: any) {
  const message = useMessage()
  const [users, setUsers] = useState<User[]>([])
  const [tasks, setTasks] = useState<TaskResponse[]>([])
  //remove password from backend of user modal
  const createTask = async (req: TaskRequest) => {
    try {
      const response: _BaseResponse<any> = await _fetch(
        '/task/create',
        'post',
        req,
      )

      if (response?.payload) {
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
    } catch (error) {
      console.log(error)
    }
  }
  const getUsers = async (role: number) => {
    const response = await _fetch('/user/all?role=' + role.toString(), 'get')
    if (response.statusCode == 'OK') {
      setUsers(response.payload)
    }
  }
  const getAllTasks = async () => {
    const response = await _fetch('/task/all?', 'get')
    if (response.statusCode == 'OK') {
      setTasks(response.payload)
    }
  }
  const assignTask = async (taskId: string) => {
    const response = await _fetch('/task/assign-task/' + taskId, 'put')
    if (response.statusCode == 'OK') {
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
  return (
    <Context.Provider
      value={{
        createTask: createTask,
        getUsers: getUsers,
        users: users,
        getAllTasks: getAllTasks,
        tasks: tasks,
        assignTask: assignTask,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useUser() {
  return useContext(Context)
}

import React, { useEffect } from 'react'
import { useUser } from '../../context/user'
import Button from '../Button'

const UserForm = () => {
  const user = useUser()

  useEffect(() => {
    return () => user.getAllTasks()
  }, [])
  return (
    <div className="max-w-[600px]">
      <div className="grid grid-cols-5 gap-4 font-medium">
        <div className="col-span-2">TaskId</div>
        <div>Title</div>
        <div>Description</div>
        <div>AssignedTo</div>
      </div>
      {user.tasks.map((task) => {
        return (
          <div key={task.taskId} className="grid grid-cols-5 gap-x-4 mt-1">
            <div className="max-w-[150px] text-ellipsis whitespace-nowrap overflow-hidden col-span-2">
              {task.taskId}
            </div>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>
              {task.assignedTo ? (
                task.assignedTo
              ) : (
                <div className="text-xs">
                  <Button
                    type={'button'}
                    onClick={() => user.assignTask(task.taskId)}
                  >
                    Assign Me
                  </Button>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default UserForm

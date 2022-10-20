import React, { useEffect } from 'react'
import { useUser } from '../../context/user'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
const CreateTask = () => {
  const user = useUser()

  return (
    <div className="rounded-2xl">
      <form
        onSubmit={(e: any) => {
          e.preventDefault()
          user.createTask({
            title: e.target.title.value || '',
            description: e.target.description.value || '',
          })
        }}
      >
        <div className="flex flex-col gap-y-2">
          <Input name="title" placeHolder="Title" type={'text'} />
          <Input name="description" placeHolder="Description" type={'text'} />
          {/* <Select placeHolder="Assign To" label="Assign To" name="assignedTo">
            <option placeholder="Choose a user" defaultChecked>
              -
            </option>
            {user.users.map((user) => (
              <option disabled={!user.isAble} value={user.id}>
                {user.username}
              </option>
            ))}
          </Select> */}
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  )
}
export default CreateTask

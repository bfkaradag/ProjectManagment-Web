import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/auth'
import { useUser } from '../../context/user'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import CreateTask from './CreateTask'
import ShowTasks from './ShowTasks'

const AdminForm = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'show'>('create')
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 my-2">
        <div
          className="bg-brand-blue-primary text-white cursor-pointer rounded-xl p-1 justify-center"
          onClick={() => setActiveTab('create')}
        >
          Create Task
        </div>
        <div
          className="bg-brand-blue-primary text-white cursor-pointer rounded-xl p-1 flex justify-center"
          onClick={() => setActiveTab('show')}
        >
          Show Tasks
        </div>
      </div>
      {activeTab === 'create' ? <CreateTask /> : <ShowTasks />}
    </div>
  )
}

export default AdminForm

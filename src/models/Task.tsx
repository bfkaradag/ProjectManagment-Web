export type User = {
  username: string
  role: string
}
export type TaskRequest = {
  title: string
  description: string
}

export type TaskResponse = {
  assignedBy: string
  assignedTo: string
  description: string
  taskId: string
  title: string
}

export type _BaseResponse<T> = {
  statusCode: 'Success' | 'NotFound' | 'Error'
  friendlyMessage: {
    title?: string
    message?: string
  }
  payload: T
}

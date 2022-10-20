// src/context/state.js
import { createContext, useContext, useEffect, useState } from 'react'
import { _BaseResponse } from '../models'

type _Options = {
  status: _BaseResponse<unknown>['statusCode']
  title: string
  message: string
  buttons: {
    onClick: () => void
    buttonText: string
  }[]
  closeWithReload?: boolean
}

type _Context = {
  showModal: (fm: _Options) => void
  closeModal: () => void
  visible: boolean
  friendlyMessage?: _Options
}

const Context = createContext<_Context>({} as _Context)

export function MessageWrapper({ children }: any) {
  const [closeWithReload, setCloseWithReload] = useState(false)
  const [visible, setVisible] = useState(false)
  const [friendlyMessage, setFriendlyMessage] = useState<_Options>()

  function closeModal() {
    setVisible(false)
    setFriendlyMessage(undefined)
    if (closeWithReload) window.location.reload()
  }
  function showModal(fm: _Options) {
    setVisible(true)
    setFriendlyMessage(fm)
    if (fm.closeWithReload) setCloseWithReload(true)
  }

  return (
    <Context.Provider
      value={{
        showModal,
        closeModal, //
        visible,
        friendlyMessage,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useMessage() {
  return useContext(Context)
}

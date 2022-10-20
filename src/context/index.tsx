import React from 'react'
import { AuthWrapper } from './auth'
import { MessageWrapper } from './message'
import { UserWrapper } from './user'

const ContextWrappers = (props: React.PropsWithChildren) => {
  return (
    <MessageWrapper>
      <UserWrapper>
        <AuthWrapper>{props.children}</AuthWrapper>
      </UserWrapper>
    </MessageWrapper>
  )
}

export default ContextWrappers

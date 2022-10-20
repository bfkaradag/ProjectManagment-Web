import { Children } from 'react'
import { FriendlyMessage } from './FriendlyMessage'

const Layout = (props: { children: any }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-1">{props.children}</div>
      <FriendlyMessage />
    </div>
  )
}

export default Layout

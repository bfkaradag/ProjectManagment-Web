import React from 'react'
type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  children: any
  onClick?: () => void
}
const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick ? props.onClick : () => {}}
      className={
        'rounded-2xl p-2 border text-md bg-brand-blue-primary text-white'
      }
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Button

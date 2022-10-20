import React from 'react'
type Props = {
  name: string
  type: string
  placeHolder: string
}
const Input: React.FC<Props> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeHolder}
      className={'rounded-2xl p-2 border text-md'}
    />
  )
}

export default Input

import React from 'react'
type Props = {
  label: string
  name: string
  placeHolder: string
  children: any
}
const Select: React.FC<Props> = (props) => {
  return (
    <select
      name={props.name}
      placeholder={props.placeHolder}
      className={'rounded-2xl p-2 border text-md'}
    >
      {props.children}
    </select>
  )
}

export default Select

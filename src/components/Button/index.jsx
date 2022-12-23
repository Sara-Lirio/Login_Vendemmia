import React from 'react'
import style from './Button.module.css'

const Button = ({ type, onClick, text, disabled}) => {
  return (
    <button className={style.btn}
    type={type}
    onClick={onClick} disabled={disabled}
    >{text}</button>
  )
}

export default Button
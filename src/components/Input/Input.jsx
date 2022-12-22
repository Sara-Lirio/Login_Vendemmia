import React from 'react'
import style from './Input.module.css'

const Input = ({ label, type }) => {
  return (
    <fieldset className={style.fieldset}>
      <label>{label}</label>
      <input className={style.input}
        type={type} />
    </fieldset>
  )
}

export default Input
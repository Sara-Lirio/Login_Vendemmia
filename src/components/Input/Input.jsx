import React from 'react'
import style from './Input.module.css'

const Input = ({ label, type, value, onChange }) => {
  return (
    <fieldset className={style.fieldset}>
      <label className={style.label}>{label}</label>
      <input className={style.input}
        value={value}
        type={type}
        onChange={onChange}
        />
    </fieldset>
  )
}

export default Input
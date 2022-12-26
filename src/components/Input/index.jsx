import React from 'react'
import style from './Input.module.css'

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <fieldset className={style.fieldset}>
      <label className={style.label}>{label}</label>
      <input className={style.input}
        value={value}
        type={type}
        onChange={onChange}

        placeholder={placeholder}
        />
    </fieldset>
  )
}

export default Input
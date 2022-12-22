import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import style from './Login.module.css'

const Login = () => {
  return (
    <main className={style.main}>
      <div className={style.containerAnimation}>
      </div>
      <section className={style.containerLogin}>
        <Input type='text'/>
        <Input type='password'/>
        <Button />
      </section>
    </main>
  )
}

export default Login
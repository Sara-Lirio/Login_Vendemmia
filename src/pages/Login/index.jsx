import React, { useState, useContext } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import style from './Login.module.css'
import { AuthContext } from '../../contexts/auth'

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')

  const { authenticated, login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { user, password });
    login(user, password);
    if (user === '') {
      setMessage('Campo de Usuário obrigatório!')
      return false
    } else if (password === '') {
      setMessage('Campo de Senha obrigatório!')
      return false
    } else if (user !== 'vendemmia' || password !== '123123123') {
      setMessage('Senha e/ou usuário inválido(s)')
      return false
    }
    setMessage(' ')
  }

  return (
    <main className={style.main}>
      <div className={style.containerAnimation}>
      </div>
      <section className={style.containerLogin}>
        <Input
          label='Usuário'
          type='text'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          label='Senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message != '' &&
          <span className={style.msg}>{message}</span>
        }
        <Button
          type='submit'
          text='Entrar'
          onClick={handleSubmit}
        />
      </section>
    </main>
  )
}

export default Login
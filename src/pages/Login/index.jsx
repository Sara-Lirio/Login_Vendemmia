import React, { useState, useContext, useRef } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import style from './Login.module.css'
import { VscEye, VscEyeClosed } from "react-icons/vsc"
import { AuthContext } from '../../contexts/auth'

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);

  const { authenticated, login } = useContext(AuthContext);

 const togglePassword = () => {
  setPasswordShown(!passwordShown)
 }

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
          placeholder='Digite o usuário'
        />
        <fieldset className={style.inputPassword}>
        <Input
          label='Senha'
          type={passwordShown ? "text" : "password"}
          value={password}
          placeholder='Digite sua senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
        className={style.btnPasswordShow}
        onClick={togglePassword}>{passwordShown ? <VscEyeClosed/> : <VscEye />}</button>
      </fieldset>
        {message !== '' &&
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
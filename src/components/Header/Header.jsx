import React from 'react'
import style from './Header.module.css'
import logoHeader from '../../assets/logo_header.png'

const Header = () => {
  return (
    <header className={style.header}>
        <img className={style.logoHeader} src={logoHeader} alt=''/>
    </header>
  )
}

export default Header
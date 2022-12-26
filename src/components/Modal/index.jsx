import React from 'react'
import style from './Modal.module.css'
import Modal from '@mui/material/Modal';

const ModalUser = ({handleClose, open, avatarImage, onChange, id, createdAt, name}) => {
    

  return (
    <Modal
    open={open}
    onClose={handleClose}
    className={style.containerModal}>

    <section className={style.sectionModal} key={id}>

      <div className={style.containerImageAvatar} >
        <img className={style.imageAvatar}
          src={avatarImage}

          alt='Imagem avatar' />
      </div>

      <p className={style.infoUser}
        onChange={onChange}
      >Nome: {name}</p>

      <p className={style.infoUser}
       
      >Criado em: {createdAt}</p>



      <button onClick={handleClose}
        className={style.btnCloseModal}>Voltar</button>

    </section>
  </Modal>
  )
}

export default ModalUser 
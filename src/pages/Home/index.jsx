import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import style from './style.module.css'
import { getUser, getUsers } from '../../service/api'
import Modal from '@mui/material/Modal';
import TableUsers from '../../components/TableUsers';
import { MdClose } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button';


const Home = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false)
  const [infoUser, setInfoUser] = useState([])
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const params = useParams();
  const id = params.id

  async function request() {
    const response = await getUsers();
    setInfos(response)
  }

  async function requestUser() {
    const response = await getUser(id);
    setInfoUser(response)
  }


  useEffect(() => {
    setTimeout(() => {
      request();
      setLoading(true)
      requestUser()
    }, 2000)
  
  }, [])

  return (
    <>
      <section className={style.container}>
        {!loading && <Loader />}
        <table className={style.table}>
          <thead className={style.tableHead}>
            <tr className={style.tr}>
              <td className={style.td}>Id</td>
              <td className={style.td}>Nome</td>
              <td className={style.tdCreatAt}>Criado em</td>
              <td>Detalhes</td>
            </tr>
          </thead>
          <tbody>

            {infos.map((info, index) => {
              return (
                <TableUsers
                  key={index}
                  id={info.id}
                  name={info.name}
                  createdAt={info.createdAt}
                  onClick={handleOpen}
                />
              )
            })}

          </tbody>
        </table>
      

   
          <Modal
            open={open}
            onClose={handleClose}
            className={style.containerModal}
            
          >

            <section className={style.sectionModal}>
            <div className={style.containerImageAvatar}>
            <img className={style.imageAvatar}
            src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg' 
            alt='Imagem avatar'/>
            </div>
            
            <p className={style.infoUser}>Nome:</p>
            <p className={style.infoUser}>Criado em: </p>
         
            <button onClick={handleClose}
            className={style.btnCloseModal}>Voltar</button>
            
            </section>
          </Modal>
     
          <Link to='/' className={style.btnBackLogin}><Button text='Sair' /></Link>
          </section>
    </>

  )
}

export default Home
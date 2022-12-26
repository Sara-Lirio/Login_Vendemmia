import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import style from './style.module.css'
import { getUser, getUsers } from '../../service/api'

import TableUsers from '../../components/TableUsers';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import ModalUser from '../../components/Modal';


const Home = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showElement, setShowElement] = useState(false);
  
  const showOrHide = () => setShowElement(true);

  
  const handleClose = () => setOpen(false);
  
  async function request() {
    const response = await getUsers();
    setInfos(response)
  }

 
  const handleOpen = () => {
    setOpen(true);
  }

  

  useEffect(() => {
    setTimeout(() => {
      request();
      setLoading(true)
      showOrHide()
    }, 2000)

  }, [])

  return (
    <>

      <section className={style.container}>
        {!loading && <Loader />}
        {showElement ?
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
                  <>
                  <TableUsers
                    key={index}
                    id={info.id}
                    name={info.name}
                    createdAt={info.createdAt}
                    onClick={handleOpen}
                  />
                  {index ?
                  <ModalUser open={open} 
                  id={info.id}
                  handleClose={handleClose}
                  name={info.name}
                  avatarImage={info.avatar}
                  createdAt={info.createdAt}
               /> 
               : null }
                  
        
                  </>
                  
                )
              })}

            </tbody>
          </table>

          : null}

             
                
         
    
        {
          showElement ?
            <Link to='/' className={style.btnBackLogin}>
              <Button text='Sair' />
            </Link> :
            null
            }


      </section>
    </>

  )
}

export default Home
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import style from './style.module.css'
import { getUser, getUsers } from '../../service/api'

import TableUsers from '../../components/TableUsers';

const Home = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false)
  const [infoUser, setInfoUser] = useState([])

  async function request() {
    const response = await getUsers();
    setInfos(response)
  }

  async function requestUser() {
    const response = await getUser();
    setInfoUser(response)
  }
 

  useEffect(() => {
    setTimeout(() => {
      request();
      requestUser();
      setLoading(true)  
    }, 2000)
  }, [])

  return (
    <section className={style.container}>
    {!loading && <Loader/> }
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
            return(
              <TableUsers
              id={info.id}
              name={info.name}
              createdAt={info.createdAt}
              />
            )
          })}
          
        </tbody>
       {infoUser.map((user, index) => {
          return(
            <p>{user.name}</p>
          )
        })
       }
      </table>
      
    </section>
    
  )
}

export default Home
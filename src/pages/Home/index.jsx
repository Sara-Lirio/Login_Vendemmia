import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import style from './style.module.css'
import { getUsers } from '../../service/api'
import { HiOutlineZoomIn } from "react-icons/hi";

const Home = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false)

  async function request() {
    const response = await getUsers();
    setInfos(response)
  }

  useEffect(() => {
    setTimeout(() => {
      request();
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
              <tr className={style.tr}>
                <td className={style.td}>{info.id}</td>
                <td className={style.tdName}>{info.name}</td>
                <td className={style.tdCreatAt}>{info.createdAt}</td>
                <td className={style.tdDetails}><HiOutlineZoomIn/></td>
              </tr>
            )
          })}
          
        </tbody>
       
      </table>
      
    </section>
    
  )
}

export default Home
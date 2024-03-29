import React from 'react'
import { HiOutlineZoomIn } from "react-icons/hi";
import style from './TableUsers.module.css'

const TableUsers = ({ id, name, createdAt, onClick}) => {
   

    return (

        <tr className={style.tr} key={id}>
            <td className={style.td}> {id}</td>
            <td className={style.tdName} onClick={onClick}>{name}</td>
            <td className={style.tdCreatAt}>{createdAt}</td>
            <td className={style.tdDetails} onClick={onClick}><HiOutlineZoomIn /></td>
        </tr> 
        
    )
}

export default TableUsers
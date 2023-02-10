import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ProductDetial from '../page/ProductDetial'

export default function ProductCard({item,authenticate}) {
    const navigate = useNavigate()
  const handledetail = ()=>{
   navigate(`/detail/${item.id}`)
  }
  return (
    <div onClick={handledetail}>
      <img src={item.img}></img>
      <div>{item.choice == true ? "choice":null}</div>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.new == true ? "신제품" : null}</div>
    </div>
  )
}

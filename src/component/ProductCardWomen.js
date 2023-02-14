import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ProductDetial from '../page/ProductDetial'

export default function ProductCardWomen({item,authenticate}) {
    const navigate = useNavigate()
  const handledetail = ()=>{
   navigate(`/detail/${item.id}`)

  }
  if(item.gender == "women"){

  
 return (
    <div onClick={handledetail} className='women'>
      <img className='manimg' src={item.img}></img>
      <div>{item.choice == true ? "choice":null}</div>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.new == true ? "신제품" : null}</div>
    </div>
  )
}}

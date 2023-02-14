import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ProductDetial from '../page/ProductDetial'

export default function ProductAllcard({item,authenticate}) {
    const navigate = useNavigate()
  const handledetail = ()=>{
   navigate(`/detail/${item.id}`)

  }
  if(item.best){

  
 return  (<>

    <div className='HotTitle'>
      <div className='HotText'>HOT</div>
    </div>
    <div onClick={handledetail} className="all">
      <img className='manimg' src={item.img}></img>
     
      <div className='text'>{item.title}</div>
    

    </div>
    </>
  )
}else{return(
  <>
   
    <div onClick={handledetail} className="all">
      <img className='manimg' src={item.img}></img>
     
      <div className='text'>{item.title}</div>
    

    </div>
    </>)
} }

import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetial from './ProductDetial'

export default function ProductPrive({authenticate}) {
  return authenticate == true ? <ProductDetial/> : <Navigate to ='/login'/>
  
 
}

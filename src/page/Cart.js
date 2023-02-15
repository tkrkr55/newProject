import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { minus, pluscount } from '../store/userSlice'


export default function Cart() {

  let product = useSelector((state)=>state.products)

  let dispatch = useDispatch()
  
  return (
    <>
    
    <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      
      <th>수량</th>
      <th>변경하기</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
   {product.map((item,i)=> 
      <tr>
      <td>{product[i].id}</td>
      <td><img width={100} src={product[i].img}/>{product[i].title}</td>
      <td>{product[i].count}</td>
      <td> <button className='plus' onClick={()=>{dispatch(pluscount(product[i].id))}}> +</button>
      <button  className='plus' onClick={()=>{dispatch(minus(product[i].id))}}> -</button></td>
      <td>{product[i].price}</td>
    </tr>
   )}
      
      

  </tbody>
</Table> 

    </>
  )
}

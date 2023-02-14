import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { pluscount } from '../store'

export default function Cart() {

  let product = useSelector((state)=>state.products)
  console.log(product[0].title)
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
    </tr>
  </thead>
  <tbody>
   {product.map((item,i)=> 
      <tr>
      <td>{product[i].id}</td>
      <td><img width={100} src={product[i].img}/>{product[i].title}</td>
      <td>{product[i].count}</td>
       <button onClick={()=>{ dispatch(pluscount(1))}}> +</button>
    </tr>
   )}
      
      

  </tbody>
</Table> 

    </>
  )
}

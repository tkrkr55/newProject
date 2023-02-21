import React from 'react'
import { Tab, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addfilter, minus, pluscount } from '../store/userSlice'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { FiX } from "react-icons/fi";
import FooterCart from '../component/FooterCart';
export default function Cart() {
  let product = useSelector((state)=>state.products)
  let total = [0]
  let a = 0
  for(a =0; a<product.length; a++){
    let b = product[a].price*product[a].count;
    total.push(b)
  }
 const sum =total.reduce((x,y)=> x+y)

  let dispatch = useDispatch()
  
  return (
    <>
    <div className='장바구니title'>
    <h1>장바구니</h1>
    </div>
    <div className='장바구니전체wrap'>
    <div className='장바구니wrap'>
    
   
   
    <Table >
    
  <thead >
    <tr>
      <th >상품명</th>
      <th ></th>
    
      <th ></th>
      
    </tr>
  </thead>
  
  <tbody >
  
   {product.map((item,i)=> 
      
      <tr  className='his' >
      
      <td>
       
        <div className='imgendCart'>
          <img className='cartimg' width={100} src={product[i].img}/><p
      className='carttitle'> <strong>LoL Model</strong><br/><div className='무료배송'>무료배송 (내일출고)</div>
      {product[i].title}<p>{product[i].price}원</p></p></div></td>
     
      <div className='cartbtncount'>
       <button className='plus' onClick={()=>{dispatch(pluscount(product[i].id))}}><AiOutlinePlus/></button>
      <div className='cartcount'>{product[i].count}</div>
      <button  className='plus' onClick={()=>{dispatch(minus(product[i].id))}}> <AiOutlineMinus/></button></div>
      <td><div className='cartPrice'>{product[i].count*product[i].price}원</div></td>
      <td ><button className='cartFix' onClick={()=>{dispatch(addfilter(product[i].id))}} ><FiX/></button></td>
      

    </tr>
    
   )}

      </tbody>
    
    </Table> 
    </div>
   <div id='Tablepricewrap'>
   
    <dl className='pricerowTable'>
      <div className='paricerow'>
        <dt className='dttitle'>총 상품금액</dt>
        <dd className='ddtitle'>{sum}원</dd>
      </div>
      <div className='paricerow'>
        <dt className='dttitle'>상품할인</dt>
        <dd className='ddtitle'>-0원</dd>
      </div>
      <div className='paricerow'>
        <dt className='dttitle'>포장비</dt>
        <dd className='ddtitle'>+0원</dd>
      </div>
      <div className='paricerow'>
        <dt className='dttitle'>배송비</dt>
        <dd className='ddtitle'>+ 0 원</dd>
      </div>
      <div className='paricerow'>
        <dt className='dttitle'>결제금액</dt>
        <dd className='ddtitle'>{sum}원</dd>
      </div>
    </dl>
    <div>
      <button className='cartbtn' onClick={(()=>{alert('주문이 정상적으로 접수되었습니다.')})}>{product?.length}개 상품 구매하기</button>
    </div>
  
   </div>
   
 </div>

   

        <FooterCart/>

      
    </>
  )
}



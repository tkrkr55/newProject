import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { minus, pluscount } from '../store/userSlice'
import { FiPlusCircle,FiMinusCircle} from "react-icons/fi";

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
    <div className='장바구니wrap'>
    <Table  >
     
  <thead >
    <tr>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
      <th>가격</th>
    </tr>
  </thead>
  
  <tbody >
   {product.map((item,i)=> 
      
      <tr >
      
      <td>
        <div className='imgendCart'><img className='cartimg' width={100} src={product[i].img}/><p
      className='carttitle'> <strong>LoL Model</strong><br/><div className='무료배송'>무료배송 (내일출고)</div>{product[i].title}</p></div></td>
      <td ><div className='cartcount'>{product[i].count}</div></td>
      <td> <button className='plus' onClick={()=>{dispatch(pluscount(product[i].id))}}><FiPlusCircle/></button>
      <button  className='plus' onClick={()=>{dispatch(minus(product[i].id))}}> <FiMinusCircle/></button></td>
      <td>{product[i].count*product[i].price}</td>
      
    </tr>
    
   )}

총 금액 {sum}
   <div className='cartfoot'>
          <p>장바구니에 담긴 상품은 30일간 저장됩니다.<br/>
L&M"은 자사/입점사 제품별, 주문유형별 배송비 기준에 따라 배송비가 별도 부과됩니다.<br/>
L&M은 동일 고객(ID기준)의 배송지가 일치하는 여러 건의 주문이 있을 경우, 에코 프렌들리 정책 따른 친환경 소비를 위해 출고일을 기준으로<br/>
자사 상품에 한해 합배송 서비스를 제공합니다. (일부 예외 브랜드 제외)<br/>
만약 합배송 되어 상품을 수령하셨을 경우, 모든 주문이 배송완료된 후 결제한 배송비를 재계산하여 익일에 퍼플코인으로 돌려드립니다.<br/>
(단, 무료배송 쿠폰으로 결제한 배송비는 페이백 대상에서 제외)</p><br/>
        </div>
      </tbody>
    
</Table> 
</div>
        
        
    </>
  )
}



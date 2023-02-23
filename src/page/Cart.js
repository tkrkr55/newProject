import React, { useEffect, useState } from 'react'
import { Tab, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addfilter, minus, pluscount } from '../store/userSlice'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { FiX } from "react-icons/fi";
import FooterCart from '../component/FooterCart';
export default function Cart() {
  // 체크될 아이템을 담을 배열
  let product = useSelector((state)=>state.products)
  const [checkItems,setCheckItem] =useState([]);
  const [checkselect,setCheckSelect ]=useState(false)
 const [selectTotle,setSeletTotal] = useState(0)

  const [price,setPrice] = useState({})


  
  
  // 총금액 구하는공식
  let total = [0]
  let a = 0
  for(a =0; a<product.length; a++){
    let b = product[a].price*product[a].count;
    total.push(b)
  }
 const sum =total.reduce((x,y)=> x+y)

 // 하나의 금액  구하는 공식

 let totals = [0]
 let c = 0
 for(c =0; c<product.length; c++){
 
   let d = product[c].price*product[c].count;
   total.push(d)
 }
const sums =total.reduce((x,y)=> x+y)

  let dispatch = useDispatch()

   //체크박스 단일선택
 const handleSingleCheck =(checked,id,prices)=>{
  if(checked){
    //단일 선택시 체크된 아이템을 배열에 추가
    setCheckItem(prev => [...prev,id])
    console.log(checkItems,"무슨값이야?")
 
    
    

  }else{  
    //단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
    setCheckItem(checkItems.filter((el)=>el !== id))
    setCheckSelect(false)
    setPrice({...price,[id]:0})
  }
 }



 const handleAllCheck =(checked)=>{
  // 전체 선택시 데이터의 모든 아이템(id)를 담을 배열로 checkItem 상태 업데이트
  if(checked){
    const idArray =[];
    product.forEach((el)=>idArray.push(el.id))
    setCheckItem(idArray)
   
  }else{
    // 전체선택 해제시 checkItem를 빈 배열로 상태 업데이트
    setPrice({})
 
  }
 }

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
      <th > <input type='checkbox' name='select-all'
        onChange={(e)=>handleAllCheck(e.target.checked)}
        // 데이터 개수와 체크된 아이템 개수가 다를 경우 선택 해제
        checked={checkItems.length === product.length ? true : false}
        ></input></th>
    
      <th ></th>
      
    </tr>
  </thead>
  
  <tbody >
    
   {product.map((item,i)=> 
      
      <tr  className='his' key={i}>
      <td>
       <input type='checkbox' name={`select-${product.id}`}
       onChange={(e)=>handleSingleCheck(e.target.checked, item.id,price)}
       // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
       checked={checkItems.includes(item.id)?true:false}
       ></input>
        <div className='imgendCart'>
          <img className='cartimg' width={100} src={product[i].img}/><p
      className='carttitle'> <strong>LoL Model</strong><br/><div className='무료배송'>무료배송 (내일출고)</div>
      {product[i].title}<p>{product[i].price}원</p></p></div></td>
     
      <div className='cartbtncount'>
       <button className='plus' onClick={()=>{dispatch(pluscount(product[i].id))}}><AiOutlinePlus/></button>
      {product[i].count >= 0 ? <div className='cartcount'>{product[i].count}</div> : alert("수량을 입력 하세요!") }
      <button  className='plus' onClick={()=>{dispatch(minus(product[i].id))}}> <AiOutlineMinus/></button></div>
      {product[i].count >= 0 ? <td><div className='cartPrice'>{product[i].count*product[i].price}원</div></td> : <p>0 원</p>}
      <td ><button className='cartFix' onClick={()=>{dispatch(addfilter(product[i].id))}} ><FiX/></button></td>
      

    </tr>
    
   )}

      </tbody>
    
    </Table> 
    </div>
   <div id='Tablepricewrap'>
   
    <dl className='pricerowTable'>
      <div className='paricerow'>
        <dt className='dttitle'>상품금액</dt>
        {
         checkselect == true ? <dd className='ddtitle'>{sum}</dd> :null
           
          
          }
     
         
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
        <dt className='dttitle'>총 결제금액</dt>
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



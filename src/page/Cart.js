import React, { useEffect, useState } from 'react'
import { Tab, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addfilter, minus, pluscount } from '../store/userSlice'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { FiX } from "react-icons/fi";
import FooterCart from '../component/FooterCart';
export default function Cart() {
  const [totals,setTotals] = useState(0)
  let [checkList,setCheckList] = useState([])
  let product = useSelector((state)=>state.products)

  // 체크박스 id를 새로운 checkList에 true값만 넣고 빼는 코드
  const handleCheckList = (checked, id) =>{
    if(checked){
      setCheckList([...checkList,id])
    }else{
      setCheckList(checkList.filter((check)=>check !== id)) 
    }
    
  }
 


  let dispatch = useDispatch()

const handleAllCheck = (checked)=>{
  if(checked){
    const checkItems = []
    product.map((cart)=>checkItems.push(cart.id))
    setCheckList(checkItems)
  }else{
    setCheckList([])
  }
}


  const found = checkList.map((List)=>
    product.filter((el)=>el.id === List)
  );


  useEffect(()=>{
    if(found){
        const sum = found.map((item)=> item[0].price*item[0].count)
        const reducer = (acc,cur) => acc + cur
        console.log(sum)
        if(sum.length === 0){
          setTotals(0)
          return;
        }
        const itemTotal = sum.reduce(reducer)
        setTotals(itemTotal)
    }else{
      setTotals(0);
    }
  },[product,totals,found,setTotals])
 
  return (
    <>
    <div className='장바구니title'>
    <h1>장바구니</h1>
    </div>
    <div className='장바구니전체wrap'>
    <div className='장바구니wrap'>
   
    <Table >
     
    {product.length==0 ? "" :
    <thead >
    <tr>
      <th >상품명</th>
      <th></th>
      <th></th>
      
    </tr>
  </thead>
  }
  
  <input type="checkbox" onChange={(e)=>{
    handleAllCheck(e.currentTarget.checked)
    
  }} checked={checkList.length === 0 ? false : checkList.length === product.length ? true : false}></input>
  <tbody >
    
   {product.length == 0 ? 
   <div className='cart_wrap'>
   <div className='cart_blank'>
    <img src='https://i.pinimg.com/564x/7f/81/a6/7f81a60e9cc64c2c32138972aeff165d.jpg'></img>
    <h2>장바구니에 담긴 상품이 없습니다.</h2>
    <p> 원하는 상품을 장바구니에 담아주세요</p>
   </div>
   </div>
   :
   product.map((item,i)=> 
      
      <tr  className='his' key={i}>
      <td>
      
      
      <input type="checkbox" onChange={(e)=>{
        handleCheckList(e.currentTarget.checked, item.id)}}
         checked={checkList.indexOf(item.id) >= 0 ? true : false}
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
      <td ><button className='cartFix' onClick={()=>{dispatch(addfilter(product[i].id))
      setCheckList(checkList.filter((check)=>check  !== product[i].id))
      }} ><FiX/></button></td>
      

    </tr>
    
   )}

      </tbody>
    </Table> 
    </div>



    
    {product.length == 0 ? "" : 
     <div id='Tablepricewrap'>
   
     <dl className='pricerowTable'>
       <div className='paricerow'>
         <dt className='dttitle'>상품금액</dt>
          <dd>{totals}</dd>
      
          
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
         <dd className='ddtitle'>{totals}원</dd>
       </div>
     </dl>
     
     <div>
       <button className='cartbtn' onClick={(()=>{alert('주문이 정상적으로 접수되었습니다.')})}>{product?.length}개 상품 구매하기</button>
       
     </div>
  
    </div>
      
        
    }
  
   
 </div>
 <FooterCart/>
 

      

      
    </>
  )
}



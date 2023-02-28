import React, { useEffect, useState } from 'react'
import { Tab, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addfilter, minus, pluscount } from '../store/userSlice'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { FiX } from "react-icons/fi";
import FooterCart from '../component/FooterCart';
import CartFooter from '../component/CartFooter';
import Foolter from '../component/Foolter';
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

 // 체크가 되어있어서 체크리스트에 값이 들어가 있따면? 해당  값이  === 맞는지 확인후 배열로 반환한다.
//  원래 체크리스트는 배열인데 새로운 배열로 반환이 되면 [ [{id: 0 , img: 네이버 }] ] 이렇게 반환이  된다.
// 배열안에 배열이기 때문에 항상 0 번째에 product의 내용들이 들어가게 된다.
  const found = checkList.map((List)=>
    product.filter((el)=>el.id === List)
  );


 
  // 금액이 계속바뀌기 때문에 useEffect안에 바뀌는값을 [ 배열]안에 넣어준다
  useEffect(()=>{
    if(found){
      // found는 배열안에 0번째에 값이 들어가져 있기때문에 [0] 을 써 산수를 해준다.
      // map을 통해 아이템이 계속적으로 들어오면 값이 reducer의 연산을 걸쳐 합해준다.
        const sum = found.map((item)=> item[0].price*item[0].count)
        const reducer = (acc,cur) => acc + cur
        console.log(sum)
        // sum의 .length 즉 

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
  
  console.log(checkList,"체크리스트")

 

  return (
    <>
    <div className='장바구니title'>
    <h1>장바구니</h1>
    </div>
    <div className='장바구니전체wrap'>
    <div className='장바구니wrap'>
   
    <Table >
     
    {product.length==0 ? "" :
     <div className='모두선택'>
    
           <input type="checkbox" id="check_btn" onChange={(e)=>{
       handleAllCheck(e.currentTarget.checked)}} 
       checked={checkList.length === 0 ? false : checkList.length === product.length ? true : false}></input>
      <span className='select_btn'>모두선택</span>

     
     </div>  
     
  }
  {/* 전체 체크박스  */}
  
  <div className='tbody'>
   

  {/* 장바구니 안에 들어갈 내용 */}
  
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
      
    {/* 아이템 당 체크박스  */}

      <input type="checkbox" id="check_btn" onChange={(e)=>{
        handleCheckList(e.currentTarget.checked, item.id)}}
         checked={checkList.indexOf(item.id) >= 0 ? true : false}
        ></input>
     
     {/* 장바구니 내용 */}
    
        <div className='imgendCart'>
          <img className='cartimg' width={100} src={product[i].img}/><p
      className='carttitle'> <strong>LoL Model</strong><br/><div className='무료배송'>무료배송 (내일출고)</div>
      {product[i].title}<p>{product[i].price.toLocaleString()}원</p></p></div></td>
     
      <div className='cartbtncount'>
       <button className='plus' onClick={()=>{dispatch(pluscount(product[i].id))}}><AiOutlinePlus/></button>
      {product[i].count >= 0 ? <div className='cartcount'>{product[i].count}</div> : alert("수량을 입력 하세요!") }
      <button  className='plus' onClick={()=>{dispatch(minus(product[i].id))}}> <AiOutlineMinus/></button></div>
      {product[i].count >= 0 ? <td><div className='cartPrice'>{product[i].count*product[i].price }원</div></td> : <p>0 원</p>}
      <td ><button className='cartFix' onClick={()=>{dispatch(addfilter(product[i].id))
      setCheckList(checkList.filter((check)=>check  !== product[i].id))
      }} ><FiX/></button></td>
      

    </tr>
    
   )}

      </div>
    </Table> 
    </div>



    
  
     <div id='Tablepricewrap' >
   
     <dl className='pricerowTable'>
       <div className='paricerow'>
         <dt className='dttitle'>상품금액</dt>
          <dd className='ddtitle'>{totals.toLocaleString()}원</dd>
      
          
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
         <dd className='ddtitle'>{totals.toLocaleString()}원</dd>
       </div>
     </dl>
     
     <div>
       <button className='cartbtn' onClick={(()=>{alert('주문이 정상적으로 접수되었습니다.')})}>{found.length}개 상품 구매하기</button>
       
     </div>
     
    </div>
    
        
    
   
 
  
 </div>

 
 

      

 <div className='footercart'>
      <FooterCart/>
      </div>
    </>
  )
}



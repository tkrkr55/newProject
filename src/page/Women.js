import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import ProductCardWomen from '../component/ProductCardWomen';

export default function Women({authenticate}) {
  const[productList,setProductList] =useState([])
  const[qurey,setQurey] = useSearchParams();
  const getProducts= ()=>{

    
    let serchQurey =qurey.get('q')||''
   
    axios.get(`http://localhost:5000/products?q=${serchQurey}`)
    .then((data)=>{
      setProductList(data.data)
      console.log("무슨값?",productList)
    })
     
      .catch(console.error)
  }

  //api 호출하기! api호출은 useEffect에서 해야한다.

  useEffect(()=>{
   
      getProducts()

  },[qurey])
  return (
    <>
    
    <div className='womenTitle'>
    <div className='womens'>WOMEN</div>
    <div className='womentext'> 하우스가 디자인한 여성 레디-투-웨어 컬렉션에서는 실크 드레스, 트위드 앙상블 및 장식이 조화를 이룹니다.</div>
    </div>
    
    <Container>
      
      <Row>
        {productList.map((item)=>(
          <Col lg={4}><ProductCardWomen item={item}authenticate={authenticate} /></Col>
        ))}
       
    
      </Row>
    </Container>
    </>
  )
}

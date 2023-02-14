import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

export default function Men({authenticate}) {
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
    <div className='womens'>MEN</div>
    <div className='womentext'>하우스가 디자인한 남성 레디-투-웨어 컬렉션에서 선보이는 다양한 테일러드 수트, 울 코트, 볼링 셔츠, 데님 및 액티브웨어를 포함합니다.</div>
    </div>
    
    <Container>
      <Row>
        {productList.map((item)=>(
          <Col lg={6}><ProductCard item={item}authenticate={authenticate} /></Col>
        ))}
       
    
      </Row>
    </Container>
    </>
  )
}

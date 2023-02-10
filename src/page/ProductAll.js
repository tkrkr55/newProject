import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import ProductCard from '../component/ProductCard'
import { Container ,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
export default function ProductAll({authenticate}) {
  const[productList,setProductList] =useState([])
  const[qurey,setQurey] = useSearchParams();
  const getProducts= ()=>{
    let serchQurey =qurey.get('q')||''
    console.log("쿼리값은?",serchQurey)
    axios.get(`http://localhost:5000/products?q=${serchQurey}`)
    .then((data)=>{
      setProductList(data.data)
    console.log(data.data)
    })
     
      .catch(console.error)
  }

  //api 호출하기! api호출은 useEffect에서 해야한다.

  useEffect(()=>{
   
      getProducts()

  },[qurey])

  
  return (
    <>
    <Container>
      <Row>
        {productList.map((item)=>(
          <Col lg={3}><ProductCard item={item}authenticate={authenticate} /></Col>
        ))}
       
    
      </Row>
    </Container>
    
    </>
  )
}

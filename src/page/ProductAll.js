import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import ProductCard from '../component/ProductCard'
import { Container ,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import ProductAllcard from '../component/ProductAllcard';
import Foolter from '../component/Foolter';
import { useSelector } from 'react-redux';

export default function ProductAll({authenticate}) {
  const[productList,setProductList] =useState([])
  const[qurey,setQurey] = useSearchParams();
  
  const getProducts= ()=>{
    let serchQurey =qurey.get('q')||''
    axios.get(`http://localhost:5000/products?q=${serchQurey}`)
    .then((data)=>{
      setProductList(data.data)
   
    })
     
      .catch(console.error)
  }
 

  //api 호출하기! api호출은 useEffect에서 해야한다.

  useEffect(()=>{
   
      getProducts()

  },[qurey])

  const sortprice=()=>{
    let copy =  [...productList]
    copy.sort((a,b)=> a.price - b.price)
    setProductList(copy)
  }
  const sorthigth=()=>{
    let copy =  [...productList]
    copy.sort((a,b)=>  b.price -a.price)
    setProductList(copy)
  }
  const sortBest = ()=>{
    let copy = [...productList]
    copy.sort((a,b)=> {
      if(a.best){
        return -1;
      }else{
        return 1;
      }
    } )
  setProductList(copy)
  }
  
  return (
    <>
    
    <div className='womenTitle'>
    <h1 className='womens'>ALL Product</h1>
    </div>
    <div className='sortwrap'>
      <button className='sortprice' onClick={sortprice}>가격 낮은순</button>
      |
      <button className='sortprice' onClick={sorthigth}>가격 높은순</button>|
      <button className='sortprice' onClick={sortBest}>HOT 아이템</button>
    </div>
    <Container>
      <Row>
        {productList.map((item)=>(
          <Col lg={3}><ProductAllcard item={item}authenticate={authenticate} /></Col>
        ))}
       
    
      </Row>
    </Container>
    <Foolter/>
    </>
  )
}

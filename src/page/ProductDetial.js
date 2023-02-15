import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addItem } from '../store/userSlice'

export default function ProductDetial() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data,setDate] = useState(null)
  let {id} = useParams()
  const getProduct=()=>{
    axios.get(`http://localhost:5000/products/${id}`).then((item)=>{ 
    setDate(item.data)

      if(data?.id === id){
        return data
      }
    })
  }

  useEffect(()=>{
    getProduct()
  },[])

  let Oder = ()=>{
   
      dispatch(addItem(
        {id:data?.id,
          img : data?.img,
         title:data?.title,
         count:1,
        price: data?.price
        }
      ))
    navigate('/cart')
   
  }
  

  

  return (
    <>
    <Container>
      <Row>
        <Col lg={6} className="product-img">
        <img className='detail_img' src={data?.img}></img>
        </Col>
        <Col  lg={6} className="product_text">
        <div className='product_title'>{data?.title}</div>
        <div className='product_price'>₩ {data?.price}</div>
        
        <div><Dropdown className='product_size'>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" >
        사이즈 선택
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">s</Dropdown.Item>
        <Dropdown.Item href="#/action-2">m</Dropdown.Item>
        <Dropdown.Item href="#/action-3">l</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </div>
    <Button className='Oder' variant="outline-dark" onClick={Oder }
    
    >주문하기</Button>{' '}
        </Col>
      </Row>
    </Container>
    </>
  )
}

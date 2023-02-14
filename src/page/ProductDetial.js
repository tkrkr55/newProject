import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function ProductDetial() {
  
  const [data,setDate] = useState(null)
  let {id} = useParams()
  const getProduct=()=>{
    axios.get(`http://localhost:5000/products/${id}`).then((item)=>{ 
    setDate(item.data)
    })
  }
 
  useEffect(()=>{
    getProduct()
  })


  

  return (
    <>
    <Container>
      <Row>
        <Col lg={6} className="product-img">
        <img src={data?.img}></img>
        </Col>
        <Col  lg={6}>
        <div>{data?.title}</div>
        <div>{data?.price}</div>
        <div></div>
        <div><Dropdown as={ButtonGroup}>
      <Button variant="success">사이즈 선택</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </div>
    <Button variant="outline-dark">주문하기</Button>{' '}
        </Col>
      </Row>
    </Container>
    </>
  )
}

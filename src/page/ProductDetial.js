import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addItem, minus, pluscount } from '../store/userSlice'
import { BiShareAlt } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsSuitHeartFill, BsSuitHeart} from "react-icons/bs";
import Randomimg from '../component/Randomimg'
import Foolter from '../component/Foolter'
export default function ProductDetial() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data,setDate] = useState(null)
  const [changed, setChanged] = useState(false);
  const [count,setCount]=useState(0)
  const[prices,setprices] = useState(0)
  let {id} = useParams()
  let product = useSelector((state)=>state.products)
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
  
 let handleheart = ()=>{
 
 }
  

  return (
    <>
    <Container>
      <Row>
        <Col lg={6} className="product-img">
        <img className='detail_img' src={data?.img}></img>
        </Col>
        <Col  lg={6} className="product_text">
          <div className='detailtitle'> LOLMODEL</div>
          <div className='공유'>
        <div className='product_title'>{data?.title}</div>
        <div className='공유이미지'><BiShareAlt/></div>
        
        </div>
       
        <div className='product_price'>₩{data?.price}원 </div>
        
        <div>
        <div className='heartCount'>
          <div className='heart' onClick={()=>{ setChanged(!changed)
          
          }}>{changed ? <BsSuitHeartFill/> : <BsSuitHeart/>}</div>
          <div className='Count'>{changed?count+1 :count}</div>
        </div>
        <div>
          <dl>
            <dt>카드할인</dt><dd>하나카드 8개월 무이자  할부</dd>
            <dt>배송방법</dt>
            <dd>
              <p>
              <>택배배송</><br/>
              무료배송/18시 이전주문 시
              <span> 오늘출고 예정</span>
              </p>
              <p>
                <strong>매장픽업</strong> 
                온라인 구매후 지정 매장에서 수령
              </p>
            </dd>
          </dl>
          </div>
        </div>
       
         
          
        <div className='select'>
     <input type="radio" id="select" name="shop"/><label for="select">S</label>
     <input type="radio" id="select2" name="shop"/><label for="select2">M</label>
     <input type="radio" id="select3" name="shop"/><label for="select3">L</label>
      </div>
          
          <div>
           
             
               
                
                
              
            
            
          </div>
      
    
   <div className='주문btn'>
    <Button  variant="outline-dark" className='product_size'  onClick={Oder }
    
    >장바구니 담기</Button>{' '}
    <Button  variant="dark" className='product_size'  onClick={Oder }
    
    >바로 주문하기</Button>{' '}
    </div>
        </Col>
      </Row>
    </Container>
    
    <div className='배너광고'>
      <img src='/신발이미지/배너디자인.jpg'></img>
      
    </div>
    <div className='bestLook'>
    <Randomimg/>
    </div>
    <Foolter/>
    </>
  )
}

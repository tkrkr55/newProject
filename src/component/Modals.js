import React,{useState} from 'react'
import {Modal,Button, Container,Row,Col} from 'react-bootstrap'
import {SlMagnifier } from 'react-icons/sl';
import {HiHeart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export const Modals = ({show,onHide}) => {
  const navigate = useNavigate()
  const [검색어,set검색어] = useState(["원피스"])

  const handledelet =  ()=>{
    let copy  =[...검색어];
    copy.splice(0,1)
    set검색어(copy)
   
  }

  const hendlequrey = (e)=>{
    if( e.key == "Enter" ){
      let keyword =e.target.value
      navigate(`?q=${keyword}`)
      let copy =[...검색어]
      copy.unshift(keyword)
      set검색어(copy)
    }
  }
  
    return (
    <>
    
    <Modal
        size="lg"
        show={show}
        onHide={() => onHide(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className='title'>
          <SlMagnifier/>
          <input  className='input'
        
          onKeyPress={(e)=>hendlequrey(e) } placeholder="Search for it !"></input>
          </Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6}>
                <strong>금주의 Bset Top one </strong>
                <img className='shadow-pop-tr' width={300} src='https://image.msscdn.net/images/goods_img/20220830/2753174/2753174_1_500.jpg'></img>
                <br/>
                
              </Col>
              <Col lg={6}>
               <strong> 최근 검색 <HiHeart/></strong>
                {검색어.map((item)=>{
                 return <div className='last'><div>{item} </div> 
                 <div className='엑스' onClick={handledelet}> X </div>
                 </div>
                })}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      </>
  )
}

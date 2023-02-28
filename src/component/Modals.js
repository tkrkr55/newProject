import React,{useState} from 'react'
import {Modal,Button, Container,Row,Col} from 'react-bootstrap'
import {SlMagnifier } from 'react-icons/sl';
import {HiHeart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export const Modals = ({show,onHide}) => {
  const navigate = useNavigate()
  const [검색어,set검색어] = useState([])

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
          <input  className='inputs'
        
          onKeyPress={(e)=>hendlequrey(e) } placeholder="Search for the product"></input>
          </Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6}>
                <strong>Best Item ✨ </strong>
                <img className='scale-in-hor-center' width={300} src='https://media.gucci.com/style/HEXF1E9FB_Center_0_0_490x490/1669921214/711768_ZJV75_1000_002_100_0000_Light-.jpg'></img>
                <br/>
                
              </Col>
              <Col lg={6}>
               <strong> 최근 검색어</strong>
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

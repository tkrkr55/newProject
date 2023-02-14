import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import ProductAll from './ProductAll'
export default function Login({setAuthenticate}) {
 
  const navigate = useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault()
    setAuthenticate(true)
    navigate('/')
  }

  return (
    <div className='logincenter'>
      
       <Form onSubmit={(e)=>handleLogin(e)} className="loginForm">
       <div>
       <img width={100} src='https://d2v80xjmx68n4w.cloudfront.net/gigs/Fd0lI1654561714.jpg'/>
       <p className='소개글'>안녕하세요 LoL Modal 입니다. 회원가입 없이 이메일로 이용 가능합니다<br></br>
        더 많은 상품을 보시려면 로그인을 진행해 주세요 thank you :)
       </p>
       </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="dark" type="submit">
        로그인
      </Button>
    </Form>
    </div>
  )
}


import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { HiOutlineUserCircle } from 'react-icons/hi';
import {AiFillSkin } from 'react-icons/ai';
import {SlMagnifier } from 'react-icons/sl';
import { Modals } from './Modals';
import { BsHandIndex, IconName } from "react-icons/bs";

export default function Product_Navbar({authenticate ,setAuthenticate}) {
  const[signUpModalOn,setSiginUpModal] =useState(false)
  const navigate = useNavigate()
  
  return (
    <>
    <Modals show={signUpModalOn} onHide={()=>setSiginUpModal(false)}/>
    <div className='login'>
         
        {
          authenticate ? ( 
        
        
          <div className='navb-login' >
            <span className='nav_text_title'
            onClick={()=>{navigate('/')}}
            > LOL MODEL</span>
            <span className='dropdown'>  
            <button className='dropbtn'>
            <span className='nav_text '>ALL Product</span> 
            </button>
            <div className='dropdown-content'>
            <Link to ='/women' href='#'>WOMAN</Link>
            <Link to='/men' href='#'>MAN</Link>
            <Link to ='/' href='#'>ALL</Link>
            </div>
            </span>


            <span className='nav_text'> | </span>
           
            
            <span className='dropdown'>  
            <button className='dropbtn'>
            <span  className='nav_text'>  event shop </span>
            </button>
            <div className='dropdown-content'>
            <Link to ='/women' href='#'>기획전</Link>
            <Link to='/men' href='#'>what's New</Link>
            <Link to ='/product' href='#'>Trend Now</Link>
            </div>
            </span>


            <span className='nav_text'> | </span>
            <span className='nav_text'> 
            
            <button className='돋보기' onClick={()=>setSiginUpModal(true)}><SlMagnifier/> </button>
            <div className='바구니' onClick={()=>{navigate('/cart')}}><AiFillSkin/></div>
            </span>
            <span className='nav_text' onClick={()=>setAuthenticate(false) }>로그아웃</span>
          </div>
          
          
          
          ) :(
          <div className='navb-login' >
          <button className='돋보기' onClick={()=>setSiginUpModal(true)}><SlMagnifier/> </button>
          <span className='nav_text' onClick={()=>navigate('/login')}>로그인</span>
        </div>)
        }
     
    </div>           
    <div className='버튼wrap'>
      <div className='home_title'>
      <div className='logo'> L & M </div> 
      {authenticate ? null :
      <div className='버튼'><BsHandIndex/></div>}
      
      </div>
    
  
    </div></>
  )
}

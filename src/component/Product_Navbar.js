
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Product_Navbar() {
  const [목록,목록변경] = useState(['여성','Dvided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'])
  const navigate = useNavigate()
  const [qurey,setQurey] = useState()
  const handleQurey = ()=>{
    navigate(`/?q=${qurey}`)
  }
  const handlechagne = (e)=>{
    if(e.key === 'Enter'){
      setQurey(e.target.value)
     
    } 
  }
  useEffect(()=>{
    handleQurey()
  },[qurey])
  return (
    <>
    <div className='login'>
      <img className='login_user' src='https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png'></img>
      <div onClick={()=>{ navigate('/login')}} className='login_text'>
        {}
      </div>
    </div>
    <div className='img'>
      <img width={100} onClick={()=>{navigate('/')}} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'/></div>
    <div>
    <ul className='목록정렬'>
     {목록.map((item)=>{
      return <li>{item}</li>
     })}
     <div className='search'>
      <img width={20} src='https://cdn-icons-png.flaticon.com/512/13/13267.png'/>
      <input onKeyPress={handlechagne} ></input>
     </div>
    </ul>
    </div></>
  )
}

import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetial from './page/ProductDetial';
import Login from './page/Login';
import Product_Navbar from './component/Product_Navbar';
import React,{useState} from 'react'
import ProductPrive from './page/ProductPrive';
function App() {
  const[authenticate,setAuthenticate] = useState(false)
  console.log("무슨값?",authenticate)
  return (
    // 전체 상품페이지 , 로그인, 상품상세 페이지
    // 전체 상품페이지에서는 전체 상품을 볼 수 있다.
    // 상품 디테일 페이지를 눌렀으나 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다.
    <div className="App">
        <Product_Navbar authenticate={authenticate}/>
       <Routes>
    <Route path="/" element={<ProductAll authenticate={authenticate}/>}/>
    <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
    <Route path="/detail/:id" element={<ProductPrive authenticate={authenticate}/>}/>

   </Routes>
    </div>
  );
}

export default App;

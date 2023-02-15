import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetial from './page/ProductDetial';
import Login from './page/Login';
import Product_Navbar from './component/Product_Navbar';
import React,{useState} from 'react'
import ProductPrive from './page/ProductPrive';
import Cart from './page/Cart';
import Home from './page/Home';
import Men from './page/Men';
import Women from './page/Women';





function App() {
  const[authenticate,setAuthenticate] = useState(false)
  
  return (

    // 전체 상품페이지 , 로그인, 상품상세 페이지
    // 전체 상품페이지에서는 전체 상품을 볼 수 있다.
    // 상품 디테일 페이지를 눌렀으나 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다.
    <div className="App">
      
        <Product_Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
        
       <Routes>
       { authenticate == false ? <Route path='/' element={<Home/>}/> : <Route path="/" element={<ProductAll authenticate={authenticate}/>}/>}
    
    <Route path="/men" element={<Men authenticate={authenticate}/>}/>
    <Route path="/women" element={<Women authenticate={authenticate}/>}/>
    
    <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
    <Route path="/detail/:id" element={<ProductPrive authenticate={authenticate}/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    
    </div>
    
  );
}

export default App;

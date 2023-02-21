import React from 'react'


export default function Randomimg() {
  const backgroundArr = ['/img/베스트1.avif','/img/베스트2.avif','/img/베스트3.avif']
  const  randomIndex = Math.floor(Math.random()*backgroundArr.length)
  const backgroundImg = backgroundArr[randomIndex]
  console.log(backgroundImg)
  return (
    <div className='bestLook'>
      <div>
        <h3>이달의 TOP3 상품</h3>
      </div>
      <img src={backgroundImg}></img>
     </div>
  )
}

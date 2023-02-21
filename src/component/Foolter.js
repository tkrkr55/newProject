import React, { useEffect } from 'react'
import {FiArrowUp } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Foolter() {
 
  return (
    <div className='foot'>
      <p>
        롤모델(LOLMODEL)주식회사 | 04539 서울특별시 중구 을지로5길 19, 26층(수하동) | 사업자등록번호: 120-81-74197 <br/>
대표자: KIM HYE IN | 통신판매업 신고번호: 2021-서울중구-01116 | 사업자정보확인 <br/>
개인정보관리책임자: 김지혜I 고객센터: 02-3480-0104 (contactdiorkr@dior.com) | 호스팅 서비스: Smile Hosting <br/>
COPYRIGHT © CHRISTIAN DIOR COUTURE KOREA ALL RIGHTS RESERVED. <br/>
이니시스 구매안전 서비스 가입함
</p>
<div className='maingo' > <FiArrowUp/></div>
    </div>
  )
}

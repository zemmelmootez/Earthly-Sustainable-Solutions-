import React, { useEffect, useRef, useState } from 'react'
import Slide from 'react-reveal/Slide';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './product.css'
import './shop.css'

function Shop() {
    const [products,setProduct]=useState(
        [
            {name:"Plant Based Reusable Cups",img:"https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg",price:"2.39£"},
            {name:"Sustainability Starter Kit",img:"https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg",price:"10.99£"},
            {name:"Reusable Bamboo Straws",img:"https://static.wixstatic.com/media/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg",price:"1.99£"},
            {name:"Natural Bamboo Loofah",img:"https://static.wixstatic.com/media/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg",price:"2.99£"},
            {name:"Bamboo Toothbrush",img:"https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg",price:"3.59£"},
            {name:"Plant Based Reusable Containers",img:"https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg",price:"2.99£"}
    ]
    )
    const re=useRef()
    const[filtred,setFilter]=useState(products)
   
    const filterproduct=()=>{
      
       

       setFilter( filtred.filter(e=>e.name.toUpperCase().includes(re.current.value.toUpperCase())))
       
    }
  return (
    <div className='shopmain'>
      <input type ="text" onChange={filterproduct} placeholder="enter your search" ref={re}/>
      <Slide left>
            <div  className='group shop'>
            {filtred?.map(e=>
        <div>
            <img variant="top" src={e.img} />
            <div className='info'>
            <h1>{e.name}</h1>
            <span>
                    {e.price}
            </span>
            </div>
          
        </div>
      )}
        </div>
        </Slide>
    </div>
  )
}

export default Shop

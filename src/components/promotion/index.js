import React, { useEffect, useRef, useState } from 'react'
import { PromotionContainer, PromotionContent, PromotionMessage } from '../../styles/promotion'
import { Slide } from '@mui/material'
const promotionText = ['20%off sale of Men Wear','100% off on Women ','20%off sale of Men Wear','off on Women Clothes']
   
const Promotion = () => {
    const [promotionIndex, setPromotionIndex] = useState(0)
    const [show, setShow] = useState(true)
    const containerRef = useRef()
    useEffect(()=>{

        setTimeout(()=>{
     setShow(false)
        },3000)
        const intervalId = setInterval(()=>{

   setPromotionIndex(i=>(i+1)% promotionText.length)
     setShow(true)
     setTimeout(()=>{
        setShow(false)
           },3000)
        },4000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
  return (
    <>
        <PromotionContainer ref={containerRef}>
        <Slide 
        container={containerRef.current}
        direction={show?'left':'right'}
         in={show}
         timeout={{
            enter:500,
            exit:100,
         }}
        >

   <PromotionContent>
            <PromotionMessage>
             {promotionText[promotionIndex]}   
            </PromotionMessage>
            </PromotionContent>
            </Slide>
        </PromotionContainer>
    </>
  )
}

export default  Promotion
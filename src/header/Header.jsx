import React from 'react'
import {Container,HeaderTitles,Span, Span1, Img} from './style'
import img2 from '../assets/img/img2.jpg'
const Header = () => {
  return (
    <Container>


        <HeaderTitles>

            <Span>React & Node</Span>
            <Span1>Blog</Span1>

        </HeaderTitles>

        <Img src={img2} alt="" />

     

        
    </Container>
  )
}

export default Header
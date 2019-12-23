import styled from 'styled-components'

export const HeroStyled = styled.div`
height: 100vh;
width: 100%;
background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #ff4825 74%);
/* background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
background-position: 0 0, 25px 25px;
background-size: 50px 50px; */
opacity: .9;
padding-top: 66px;
display: flex;
justify-content: center;
align-items: center;
`

export const HeroImage = styled.div`
width: 100%;
height: 40vh;

 & img{
     width: 100%;
     height: 100%;
 }
 @media screen and (min-width: 768px){
    height: 50vh;
 }
`
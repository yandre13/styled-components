import styled from 'styled-components'

//Button
export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 24px;
width: 24px;
background: transparent;
border: none;
&:hover{
    cursor: pointer;
}
margin: 0 .8rem 0 0;
`

//A div for lines to button
export const Line = styled.div`
width: 24px;
height: 2px;
content: '';
background: #fff;
`
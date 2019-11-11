import styled from 'styled-components'


export const BackImage = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: url('https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
background-size: cover;
filter: blur(2px);
`

export const Error = styled.section`
position: relative;
width: 100%;
min-height: 100vh;
background: #000;

& img{
    max-width: 100%;
    margin: 50px 0 0;
}
`

export const Light = styled.div`
position: absolute;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
`
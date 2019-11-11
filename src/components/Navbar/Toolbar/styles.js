import styled from 'styled-components'
import theme from 'styled-theming'

//Theme
const navbarBackgroundColor = theme('mode', {
    light: '#fff',
    dark: '#000',
  });


//This needs a Header
export const Header = styled.header`
position: fixed;
display: flex;
justify-content: center;
height: 56px;
width: 100%;
background: ${props=>props.transparent ? 'rgba(0,0,0,.3)' : navbarBackgroundColor};
top: 0;
left: 0;
@media (max-width: 769px) {
    & {
        justify-content: flex-start;
    }
}
`
//A nav
export const Nav = styled.nav`
height: 100%;
width: 100%;
display: flex;
flex-direction: ${props=>props.right ? 'row-reverse' : 'row'};
align-items: center;
@media (min-width: 769px) {
    div:first-child {
        display: none;
    }
}
`
//A logo in a div
export const Logo = styled.div`
& a{
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 1.5;
}
`
//A div for the items
export const Items = styled.div`
width: 100%;
& ul{
    list-style: none;
    display: flex;
    justify-content: ${props=>props.right ? 'flex-start' : 'flex-end'};
}
& li{
    padding: 0 .5rem;
} a{
    text-decoration: none;
    color: #fff;
} a:hover, :active{
    color: #333;
}
@media (max-width: 768px) {
    &{
        display: none;
    }
}
`
import styled, {css} from 'styled-components'

import theme from 'styled-theming'

const backgroundColorNavDrawer = theme('mode', {
    light: '#fff',
    dark: 'rgba(0,0,0,.7)'
})

export const NavDrawer = styled.nav`
height: 100%;
background: ${backgroundColorNavDrawer};
box-shadow: 1px 0 8px rgba(0,0,0,.5);
position: fixed;
top: 0;
left: 0;
width: 78vw;
max-width: 300px;
z-index: 200;
${props=>props.show ? css`
transform: translateX(0);
transition: transform .2s ease-out;
`:
css`
transform: translateX(-100%);
transition: transform .2s ease-out;
`
}

& ul{
    display: flex;
    flex-direction: column;
}

@media (min-width: 769px) {
    &{
        display: none;
    }
}

`

import {createGlobalStyle} from 'styled-components'

//Theming
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
    dark: '#283747',
    light: '#eee'
}),
    color = theme('mode', {
        dark: '#f2f2f2',
        light: '#000'
    })

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
    background: ${backgroundColor};
    color: ${color};
}
`
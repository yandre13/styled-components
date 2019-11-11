import React from 'react';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles';
import { Container } from './components/Container';
//Theming
import {ThemeProvider} from 'styled-components'
import { Error404 } from './pages/404';


function App() {
  return (
    <>
    <ThemeProvider theme={{mode: 'dark'}}>
      <GlobalStyle/>
        <Navbar/>
    </ThemeProvider>
    </> 
  )
}

export default App;

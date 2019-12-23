import React from 'react';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles';
import { Container } from './components/Container';
//Theming
import {ThemeProvider} from 'styled-components'
import { Error404 } from './pages/404';
import { Hero } from './components/Hero';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { Grid } from './components/Grid';
import { Row, Col, RowCustom, ColCustom } from './components/Grid/styles';

import imgs from './header-image.png'
import { HeroImage } from './components/Hero/styles';


function App() {
  return (
    <>
    <ThemeProvider theme={{mode: 'dark'}}>
      <GlobalStyle/>
        <Navbar/>
        <Hero>
          <Container center={true}>
            <RowCustom tracks={2} gutter={'20px'}>
              <ColCustom nspan={1}>
                <Text type={{tag:'h2'}} weight={'normal'} align={'left'}>¿Necesitas un increíble sitio web?</Text>
                <br></br>
                <Text type={{tag:'h3'}} weight={'normal'} align={'left'}>Un sitio hermoso, moderno, resonsive y personalizado para tu compañía, negocio, marca, servicio o producto.</Text>
              </ColCustom>
              <ColCustom nspan={1}>
                <HeroImage>
                  <img src={imgs}/>
                </HeroImage>
              </ColCustom>
            </RowCustom>
          </Container>
        </Hero>
        <Container paddingTopAndBottom={'50px'}>
          <Row tracks={15} gutter={'30px'}>
            {[...new Array(18)].map((el,i)=><Col key={i} nspan={3}><Card border={true}></Card></Col>)}
          </Row>
          <br></br>
          <RowCustom tracks={3} gutter={'20px'}>
            <ColCustom nspan={1}>
              <div style={{background: '#212121'}}>Hola</div>
            </ColCustom>
            <ColCustom nspan={2}>
              <div style={{background: '#212121'}}>Hola</div>
            </ColCustom>
          </RowCustom>
        </Container>
    </ThemeProvider>
    </> 
  )
}

export default App;

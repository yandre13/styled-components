import React from 'react'
import { Header, Nav, Logo, Items } from './styles'
import { ToggleButton } from '../ToogleButton'
import { Container } from '../../Container'

export const Toolbar = ({setShow, width, right, transparent})=>(
    <Header transparent={transparent}>
        <Container nav={true}>
            <Nav right={right}>
                <div>
                {width < 768 && 
                    <ToggleButton setShow={setShow}/>
                }
                </div>
                <Logo><a href='/'>LOGO</a></Logo>
                <Items right={right}>
                    <ul>
                        <li><a href='/'>Products</a></li>
                        <li><a href='/'>Users</a></li>
                    </ul>
                </Items>
            </Nav>
        </Container>
    </Header>
)
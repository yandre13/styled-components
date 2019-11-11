import React from 'react'
import { NavDrawer } from './styles'


export const SideDrawer = ({show})=>(
    <NavDrawer show={show}>
        <ul>
            <li><a href='/'>Products</a></li>
            <li><a href='/'>Users</a></li>
        </ul>
    </NavDrawer>
)
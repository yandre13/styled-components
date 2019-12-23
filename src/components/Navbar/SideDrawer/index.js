import React from 'react'
import { NavDrawer } from './styles'
import { Card } from '../../Card'


export const SideDrawer = ({show, right})=>(
    <NavDrawer show={show} right={right}>
        <ul>
            <Card></Card>
        </ul>
    </NavDrawer>
)
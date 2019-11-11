import React from 'react'
import { Button, Line } from './styles'


export const ToggleButton = ({setShow})=>(

    <Button onClick={setShow}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
    </Button>
)
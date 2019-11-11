import React from 'react'
import { ContainerOwn } from './styles'

export const Container = ({nav, children}) =>(
    <ContainerOwn nav={nav}>
        {children}
    </ContainerOwn>
)
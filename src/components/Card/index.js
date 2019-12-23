import React from 'react'
import { CardContainer, ImgContainer, Content } from './styles'
import { Text } from '../Text'

export const Card = ({border})=>(
    <CardContainer border={border}>
        <ImgContainer border={border}>
            <img src='https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/RxJs.png'/>
        </ImgContainer>
        <Content>
            <Text type={{tag:'h4'}} align={'left'}>On ya way</Text>
            <Text type={{tag:'p'}} align={'left'}>Lorem ipsum</Text>
        </Content>
    </CardContainer>
)
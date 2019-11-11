import React, {useRef} from 'react'
import { Error, Light, BackImage } from './styles'

export const Error404 = ({light})=>{

    const refLight = useRef(null),
        refBack = useRef(null),
        handleMovement = (e)=>{
            const pageX = light ? e.pageX : e.pageX * -1/15,
                pageY = light ? e.pageY : e.pageY * -1/15
            light ? refLight.current.style.background = `radial-gradient(circle at ${pageX}px ${pageY}px, transparent, #000 40%)`
            : refBack.current.style.backgroundPosition = `${pageX}px ${pageY}px`
            
        }

    return (
        <Error>
            <Light ref={refLight} onMouseMove={handleMovement} />
            { light ? <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            : <BackImage ref={refBack} onMouseMove={handleMovement} />}
        </Error>
    )
}
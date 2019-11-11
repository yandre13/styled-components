import React, {useState, useEffect} from 'react'
import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'
import { BackDrop } from './BackDrop'


export const Navbar = ()=>{

    const [show, setShow] = useState(false),
        [width, setWidth] = useState(()=>window.innerWidth)

    const handleShow = ()=>setShow(!show)


    useEffect(()=>{
        window.addEventListener('resize', ()=>setWidth(window.innerWidth))
    }, [width])

    return(
        <>
        <Toolbar width={width} setShow={handleShow} right={false} transparent={true}/>
        {width < 768 && <SideDrawer show={show}/>}
        {
            show && <BackDrop setShow={handleShow}/>
        }
    </>
    )
}
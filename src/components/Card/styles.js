import styled, {css} from 'styled-components'

export const CardContainer = styled.article`
display: flex;
flex-direction: column;
width: 100%;
background: transparent;
${props=>props.border &&  
css`
border: 2px solid #212121;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
`
}
`

export const ImgContainer = styled.div`
position: relative;
${props=>props.border &&  
css`
border-top-left-radius: 4px;
border-top-right-radius: 4px;
`
}

width: 100%;
padding-bottom: 56.25%;
overflow: hidden;
    & img{
        position: absolute;
        width: 100% ;
    }
`

export const Content = styled.div`
padding: 10px 20px;
border-top: 0;

`
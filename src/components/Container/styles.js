import styled from 'styled-components'

export const ContainerOwn = styled.div`
margin: 0 auto;
max-width: 1280px;
width: 90%;

@media only screen and (min-width: 601px) {
  & {
    width: ${props=>props.nav ? '90%' : '85%'};
  }
}

@media only screen and (min-width: 993px) {
  & {
    width: 75%;
  }
}
`
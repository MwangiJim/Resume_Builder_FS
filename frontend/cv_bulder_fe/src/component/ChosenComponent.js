import React from 'react'
import styled from 'styled-components'

const ChosenComponent = ({skill}) => {
  return (
    <Container>
        <p>{skill}</p>
    </Container>
  )
}

export default ChosenComponent

let Container = styled.div`
 background-color:#f4f4f4;
 width:100px;
 height:30px;
 box-shadow:2px 2px 4px #000;
 color:#000;
 border-radius:6px;
 p{
    font-size:13px;
    text-align:center;
    padding-top:6px;
 }
`
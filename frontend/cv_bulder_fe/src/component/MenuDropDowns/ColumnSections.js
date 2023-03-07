import React from 'react'
import styled from 'styled-components'

const ColumnSections = ({image,header,text}) => {
  return (
    <Container>
      <img src={image}/>
      <div className="info">
        <h4>{header}</h4>
        <small>{text}</small>
      </div>
    </Container>
  )
}

export default ColumnSections
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 padding:13px 12px;
 cursor:pointer;
 :hover{
  background:#f4f4f4;
 }
 img{
    width:20px;
    height:20px;
 }
 .info{
    flex:0.9;
    h4{
        margin-bottom:10px;
        font-weight:400;
        color:black;
    }
 }
`
import React from 'react'
import styled from 'styled-components'

const TemplateNavigation = () => {
  return (
   <Template>
      <div>
        <img src='/images/copy.png'/>
         <h5>All Templates</h5>     
      </div>
     <Line></Line>
      <div>
        <img src='/images/unicorn.png'/>
         <h5>Creative</h5>     
      </div>
      <div>
        <img src='/images/sparkles.png'/>
         <h5>Simple</h5>     
      </div>
      <div>
        <img src='/images/work.png'/>
         <h5>Professional</h5>     
      </div>
      <div>
        <img src='/images/cool.png'/>
         <h5>Modern</h5>     
      </div>
   </Template>
  )
}

export default TemplateNavigation
let Template = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:4% 10%;
  border-bottom:4px solid #333;
  position:relative;
  div{
    margin-bottom:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img{
        width:30px;
        height:30px;
    }
  }
`
let Line = styled.div`
background-color:purple;
width:150px;
top:34.4px;
height:4px;
border-radius:8px;
position:absolute;
`
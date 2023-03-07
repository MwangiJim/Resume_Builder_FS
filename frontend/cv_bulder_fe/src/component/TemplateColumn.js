import React from 'react'
import styled from 'styled-components'

const TemplateColumn = ({image,name,description}) => {
  return (
    <Container>
      <div className='content'>
      <img src={image}/>
        <div className='spans'>
            <span className='white'></span>
            <span className='purple'></span>
            <span className='red'></span>
            <span className='black'></span>
            <span className='cyan'></span>
        </div>
      </div>
        <h2>{name}</h2>
        <small>{description}</small>
    </Container>
  )
}

export default TemplateColumn
let Container = styled.div`
flex-basis:33%;
margin:0 1%;
cursor:pointer;
h2{
    font-size:19px;
    font-weight:500;
    transition:0.5s;
 }
 small{
    color:gray;
    font-size:13px;
 }
:hover h2{
    color:cyan;
}
.content{
    border:10px solid gray;
padding:3px;
 img{
    width:300px;
    height:350px;
    object-fit:cover;
 }
 .spans{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1% 0;
    span{
        height:15px;
        width:15px;
        border-radius:50%;
        display:block;
        margin:0 1%;
    }
    .white{
        background-color:#fff;
        box-shadow:3px 3px 8px #000;
    }
    .purple{
        background-color:purple;
        box-shadow:3px 3px 8px #000;
    }
    .red{
        background-color:red;
        box-shadow:3px 3px 8px #000;
    }
    .black{
        background-color:black;
        box-shadow:3px 3px 8px #fff;
    }
    .cyan{
        background-color:cyan;
        box-shadow:3px 3px 8px #000;
    }
 }
}
`
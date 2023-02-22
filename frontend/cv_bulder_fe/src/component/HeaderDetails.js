import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderDetails = () => {
    const{UserDetails}=useSelector((state)=>state.CV_Canvas);
    console.log(UserDetails)
  return (
    <Container>
         <h2>Hi {UserDetails.Email}</h2>
    </Container>
  )
}

export default HeaderDetails
let Container = styled.div`
width:100%;
height:20vh;
background-color:#fff;
.photo{
    h2{
        font-size:18px;
    }
}
`
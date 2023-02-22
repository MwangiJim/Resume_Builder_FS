import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import {getAuth} from 'firebase/auth'

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth()
  return (
    <Container>
       <h3>CVCanvas</h3>
      <div className='left_side'>
         <li onClick={()=>navigate('/')}>Resume
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
         </li>
         <li onClick={()=>navigate('/editcoverletter')}>Cover Letter
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
         </li>
         <li>Resume Writing
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
         </li>
         <li>Blog
         </li>
         <button onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </Container>
  )
}

export default Header
let Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:9px 6px;
  top:0;
  left:0;
  position:fixed;
  width:100%;
  z-index:4;
  margin-right:3%;
  background-color:#fff;
  h3{
    color:purple;
    font-size:25px;
  }
  .left_side{
    flex:0.6;
    display:flex;
  justify-content:space-between;
  align-items:center;
  li{
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:17px;
    cursor:pointer;
    :hover{
        color:grey;
    }
  }
  }
  button{
    background-color:purple;
    color:#fff;
    padding:10px 30px;
    border-radius:6px;
    border:none;
    cursor:pointer;
  }
`
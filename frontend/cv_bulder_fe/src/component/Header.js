import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import {getAuth} from 'firebase/auth'
import ResumeDropDown from './MenuDropDowns/ResumeDropDown'
import CoverLetterDropDown from './MenuDropDowns/CoverLetterDropDown'
import BlogDropDown from './MenuDropDowns/BlogDropDown'

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  return (
    <Container>
      <div className='HD'>
      <h3>CVCanvas</h3>
      <div className='left_side'>
         <li onClick={()=>navigate('/')} className="link_one">Resume
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
            <div className='drop_down'>
               <ResumeDropDown/>
            </div>
         </li>
          <li onClick={()=>navigate('/editcoverletter')} className="link_two">Cover Letter
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
            <div className='drop_down'>
                <CoverLetterDropDown/>
            </div>
         </li>
         <li className='link_three'>Resume Writing
            <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
            <div className='drop_down'>
                
             </div>
         </li>
         <li className='link_four'> Career Blog
         <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'13px'}}/>
             <div className='drop_down'>
                <BlogDropDown/>
              </div>
         </li>
         <button>MY ACCOUNT</button>
         <button onClick={()=>auth.signOut()}>Logout</button>
      </div>
      </div>
    </Container>
  )
}

export default Header
let Container = styled.div`
top:0;
left:0%;
position:fixed;
width:97%;
z-index:5;
background-color:#fff;
.HD{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 6px;
  margin-right:10%;
  margin-left:10%;
  h3{
    color:purple;
    font-size:25px;
  }
  .left_side{
    flex:0.8;
    display:flex;
  justify-content:space-between;
  align-items:center;
  .link_one .drop_down{
    top:45px;
    position:absolute;
    display:none;
  }
  .link_one:hover .drop_down{
    display:block;
  }
  .link_two .drop_down{
    top:45px;
    position:absolute;
    display:none;
  }
  .link_two:hover .drop_down{
    display:block;
  }
  .link_three:hover .drop_down{
    display:block;
  }
  .link_four .drop_down{
    top:45px;
    position:absolute;
    display:none;
  }
  .link_four:hover .drop_down{
    display:block;
  }
  li{
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:17px;
    position:relative;
    cursor:pointer;
    :hover{
      color:gray;
    }
  }
  }
  button{
    background-color:rgba(99, 159, 199, 0.5);
    color:rgba(20, 125, 211, 1);
    padding:10px 30px;
    border-radius:6px;
    border:none;
    cursor:pointer;
    text-transform:uppercase;
    font-weight:bold;
  }
}
`
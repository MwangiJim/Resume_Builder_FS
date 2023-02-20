import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp,faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

const Hobbies = (props) => {
  return (
    <Container>
             <h2>Hobbies</h2>
            <small>What do you like?</small>
            <input
             type={'text'}
             placeholder='e.g Skiing,SkyDiving,Gaming,Travelling'
             name='Hobby'
             value={props.HobbyDetails.Hobby}
             onChange={props.fnHobby}
            />
    </Container>
  )
}

export default Hobbies
let Container = styled.div`
 width:95%;
 padding:6px;
 margin:3% 0;
 height:max-content;
 text-align:left;
 small{
    color:gray;
 }
 input{
    width:100%;
    height:45px;
    outline:none;
    border:none;
    background-color:#f4f4f4;
    border-radius:7px;
    ::placeholder{
        color:grey;
        font-weight:600;
    }
 }
`
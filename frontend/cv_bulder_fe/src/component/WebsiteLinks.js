import { faAngleUp,faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setPreviewValues } from '../redux/SliceReducer'

function WebsiteLinks(props) {
    let[LinksSection,setLinksSection]=React.useState(false);
    function HideLinksSection(){
       setLinksSection((prevState)=>!prevState)
    }
    let styles = {
        display:LinksSection?'none':'block'
    }
  return (
    <Container style={styles}>
       <div className='header'>
          <p>{props.WebDetails.linkname?props.WebDetails.linkname:`(not specified)`}</p>
          <FontAwesomeIcon icon={faAngleUp} onClick={HideLinksSection} style={{cursor:'pointer'}}/>
       </div>
       <div className='row'>
        <div className='col'>
            <label>Label</label>
            <br/>
            <input
             type={'text'}
             placeholder='Name of Link'
             value={props.WebDetails.linkname}
             name='linkname'
             onChange={props.WebHandler}
            />

        </div>
        <div className='col'>
            <label>Link</label>
            <br/>
            <input
             type={'text'}
             placeholder='https://......'
             value={props.WebDetails.link}
             name='link'
             onChange={props.WebHandler}
            />    
        </div>
       </div>
    </Container>
  )
}

export default WebsiteLinks
let Container = styled.div`
 border:1px solid grey;
 border-radius:5px;
 padding:6px;
 height:max-content;
 width:96%;
 background-color:#fff;
 .header{
    display:flex;
    justify-content:space-between;
    align-items:center;
 }
 .row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:3% 0;
    .col{
      flex:0.45;
      text-align:left;
      .dates{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
    }
  }
  label{
    color:grey;
  }
  input{
    background-color:#f4f4f4;
    width:90%;
    height:45px;
    margin:0 2px;
    border-radius:5px;
    padding:0 10px;
    border:none;
    outline:none;
    ::placeholder{
      color:#000;
    }
    button{
      width:60px;
      height:35px;
      border-radius:5px;
      color:#fff;
      cursor:pointer;
      background:rgba(15, 124, 196, 0.856);
      border:none;
      outline:none;
    }
`
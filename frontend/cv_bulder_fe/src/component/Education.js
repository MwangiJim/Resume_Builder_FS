import { faAngleDown, faAngleUp,faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Education = (props) => {
    let[FormState,setFormState]=React.useState(false);
    function HideForm(){
        setFormState((prevState)=>!prevState)
    }
    let styles ={
        display:FormState?'none':'block'
    }
  return (
    <Container style={styles}>
      <div className='header'>
        <p>{!props.EducationDetails.school?`(not specified)`:`${props.EducationDetails.school}`}</p>
        <FontAwesomeIcon icon={faAngleUp} style={{cursor:'pointer'}} onClick={HideForm}/>
      </div>
      <div className='row'>
        <div className='col'>
            <label>School</label>
            <br/>
            <input
             type={'text'}
             onChange={props.EduHandler}
             value={props.EducationDetails.school}
             name='school'
            />
            <br/>
        </div>
        <div className='col'>
            <label>Degree</label>
            <br/>
            <input
             type={'text'}
             onChange={props.EduHandler}
             value={props.EducationDetails.degree}
             name='degree'
            />
            <br/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
            <label>Start & End Date</label>
            <br/>
            <div className='dates'>
            <input
             type={'date'}
             onChange={props.EduHandler}
             value={props.EducationDetails.startdate}
             name='startdate'
            />
            <input
             type={'date'}
             onChange={props.EduHandler}
             value={props.EducationDetails.enddate}
             name='enddate'
            />
            </div>
            <br/>
        </div>
        <div className='col'>
            <label>City</label>
            <br/>
            <input
             type={'text'}
             onChange={props.EduHandler}
             value={props.EducationDetails.city}
             name='city'
            />
            <br/>
        </div>
      </div>
      <textarea
       type='text'
       onChange={props.EduHandler}
       name='description'
       value={props.EducationDetails.description}
       className='textarea'
       placeholder='e.g Write down what you did while you were there'
      ></textarea>
    </Container>
  )
}

export default Education
let Container = styled.div`
padding:5px;
border:1px solid gray;
border-radius:5px;
margin-top:5%;
width:94%;
height:max-content;
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
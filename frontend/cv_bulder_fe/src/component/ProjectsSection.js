import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'

const ProjectsSection = (props) => {
  return (
    <Container>
        <h2>Projects</h2>
        <p>Projects are vital to a Recruiter as they showcase the developers ability to code and refactor it. </p>
       <div className='row'>
        <div  className='col'>
         <label>Project Title</label>
        <input 
         type={'text'}
         placeholder='Project Name'
         name='Projectname'
         value={props.ProjectDetails.Projectname}
         onChange={props.ProjectHandler}
        />
        </div>
        <div className='col'>
            <label>Project Link</label>
            <br/>
            <input
             type={'text'}
             placeholder='Github Link'
             name='projectlink'
             value={props.ProjectDetails.projectlink}
             onChange={props.ProjectHandler}
            />
        </div>
       </div>
       <textarea
        type={"text"}
        placeholder='Description of your project,tools used,the end Result'
        value={props.ProjectDetails.Description}
        name='Description'
        onChange={props.ProjectHandler}
        className='textarea'
       ></textarea>
    </Container>
  )
}

export default ProjectsSection
let Container  =styled.div`
margin:2% 0;
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
.row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:3% 0;
    .col{
      flex:0.45;
      text-align:left;
    }
  }
  label{
    color:grey;
  }
  input{
    background-color:#f4f4f4;
    width:97%;
    height:45px;
    border-radius:5px;
    padding:0 10px;
    border:none;
    outline:none;
    ::placeholder{
      color:#000;
    }
  }
`
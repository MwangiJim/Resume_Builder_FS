import React from 'react'
import styled from 'styled-components'
import ColumnSections from './ColumnSections'

const ResumeDropDown = () => {
  return (
    <Container>
       <div className='top_section'>
         <img src='/images/resume.png'/>
         <div className='right_side'>
            <h4>Resume Builder</h4>
            <small>Create a resume in 5 minutes.Get the Job you want</small>
         </div>
       </div>
       <ColumnSections
       header='Resume Templates'
        image='/images/resumeTemplate.png'
        text='Find the perfect Resume Template'
       />
       <ColumnSections
       header='Resume Examples'
        image='/images/resumeexample.png'
        text='See perfect resume examples that get jobs'
       />
       <ColumnSections
       header='Resume Format'
       image='/images/resumeTemplate.png'
       text='Pick the right resume for your situation'
       />
       <ColumnSections
       header='Resume Checker'
       image='/images/resumecheck.png'
       text='Get your resume checked with one click'
       />
       <ColumnSections
       header='Resume Help'
       image='/images/resumehelp.png'
       text='Get help creating a resume from experts'
       />
       <button className='bTn'>Create Your Resume</button>
    </Container>
  )
}

export default ResumeDropDown
let Container = styled.div`
  height:max-content;
  width:400px;
  background-color:#fff;
  padding:5px;
  box-shadow:2px 3px 7px #000;
  .bTn{
    width:100%;
  }
  .top_section{
    background:#fff;
    height:20vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
        width:60px;
        height:60px;
    }
    .right_side{
        flex:0.9;
        text-align:left;
        color:black;
        small{
            font-size:17px;
        }
        h4{
            font-weight:300;
            font-size:20px;
            margin-bottom:10px;
        }
    }
  }
`
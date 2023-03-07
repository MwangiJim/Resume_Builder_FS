import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ColumnSections from './ColumnSections'

const CoverLetterDropDown = () => {
  const navigate = useNavigate();
  return (
    <Container>
     <div className='top_section'>
         <img src='/images/resume.png'/>
         <div className='right_side'>
            <h4>Cover  Letter Builder</h4>
            <small>Create a cover Letter in 5 minutes.Get the Job you want</small>
         </div>
       </div>
       <ColumnSections
       header='Cover Letter Templates'
        image='/images/resumeTemplate.png'
        text='Find the perfect Cover Letter Template'
       />
       <ColumnSections
       header='Cover Letter Examples'
        image='/images/resumeexample.png'
        text='See perfect cover letter examples that get jobs'
       />
       <ColumnSections
       header='Cover Letter Format'
       image='/images/resumeTemplate.png'
       text='Pick the right cover letter template for your situation'
       />
       <ColumnSections
       header='Cover Letter Checker'
       image='/images/resumecheck.png'
       text='Get your resume checked with one click'
       />
       <ColumnSections
       header='Cover Letter  Help'
       image='/images/resumehelp.png'
       text='Get help creating a resume from experts'
       />
       <button className='bTn' onClick={()=>navigate('/editcoverletter')}>Create Cover Letter Now</button>
    </Container>
  )
}

export default CoverLetterDropDown
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
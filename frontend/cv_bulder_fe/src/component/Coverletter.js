import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CoverletterTemplateOne from './CoverletterTemplateOne'
import CoverLetterTemplateThree from './CoverLetterTemplateThree'
import CoverLetterTemplateTwo from './CoverLetterTemplateTwo'
import TemplateNavigation from './TemplateNavigation'
import {useNavigate} from 'react-router-dom'

const Coverletter = () => {
  const navigate = useNavigate();
  const{coverLetterTemplate}=useSelector((state)=>state.CV_Canvas);

  function MoveToForm(){
    if(coverLetterTemplate){
       navigate('/coverletterform')
    }
    else{
      alert('Please select a template to proceed...')
    }
  }
  let[LetterDetails,setLetterDetails]=React.useState([]);
  useEffect(()=>{
    async function getCoverLetter(){
      await fetch('http://localhost:8080/getCoverLetterDetails')
      .then((res)=>res.json())
      .then((data)=>{
        let fetchedLetter = data.msg.map((item,i)=>{
          return(
            {
               fullname:item.FullName,
               jobTitle:item.JobTitle,
               address:item.Address,
               email:item.Email,
               location:item.Location,
               companyName:item.CompanyName,
               hrName:item.Hr_Name,
               letter:item.CoverLetter,
               Id:item._id,
               date:item.Date
            }
          )
        })
        setLetterDetails(fetchedLetter)
      })
    }
    return ()=>{
      getCoverLetter();
    }
    })
  return (
    <Container>
        <div className='textbox'>
            <h2>Create a <br/> Job winning Cover Letter.</h2>
            <p>A Cover Letter is essentail especially for Entry level job seekers.It is <br/>important to show your interest to your employer and why you want to join the company</p>
            {LetterDetails.length>0? <div className='continue_progress'>
            <img src='/images/resume1.png'/>
            <br/>
            <button onClick={()=>navigate('/coverletterform')}>Continue Progress</button>
            </div>:<button onClick={MoveToForm}>Create Cover Letter</button>}
        </div>
        <TemplateNavigation/>
        <Row>
          <CoverletterTemplateOne/>
          <CoverLetterTemplateTwo/>
          <CoverLetterTemplateThree/>
        </Row>
    </Container>
  )
}

export default Coverletter

let Container = styled.div`
.textbox{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    margin-top:10%;
    margin-left:25%;
    margin-bottom:10%;
    text-align:center;
    width:50%;
    .box{
      display:flex;
      justify-content:space-between;
    flex-direction:column;
    img{
      width:150px;
      height:100px;
    }
    }
    h2{
        font-size:45px;
        font-weight:400;
    }
    p{
        font-size:14px;
        margin:2% 0;
    }
    button{
        font-size:17px;
        border:none;
        cursor:pointer;
        outline:none;
        border-radius:7px;
        color:#000;
        background-color:#fff;
        padding:12px 40px;
        box-shadow:3px 3px 8px #000;
    }
}
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:1% 9%;
`
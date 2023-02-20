import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import DetailsFilling from './DetailsFilling'
import Header from './Header'
import SecondTemplate from './SecondTemplate'
import TemplateExample from './TemplateExample'
import TemplateNavigation from './TemplateNavigation'

const Home = () => {
    let[Form,setForm]=React.useState(false);
    function ShowDetailsForm(){
        setForm((prevState)=>!prevState)
    }
    let[CVState,setCVState]=React.useState([])
    const navigate = useNavigate();
    useEffect(()=>{
      const fetchCVDetails = async()=>{
           await fetch('http://localhost:8080/getCvDetails')
           .then((res)=>res.json())
           .then((data)=>{
            let fetchedData = data.msg.map((item,i)=>{
              return(
                {
                  jobtitle:item.JobTitle,
                  f_name:item.FirstName,
                  l_name:item.LastName,
                  email:item.Email,
                  p_Number:item.PhoneNumber,
                  country:item.Country,
                  city:item.City,
                  address:item.Address,
                  postalcode:item.PostalCode,
                  D_Lisence:item.DrivingLisence,
                  Schoolname:item.Edu_SchoolName,
                  Degree:item.Edu_Degree,
                  Edu_startdate:item.Edu_StartDate,
                  Edu_Enddate:item.Edu_EndDate,
                  Edu_Description:item.EducationDescription,
                  EmpJobTitle:item.Emp_JobTitle,
                  employer:item.Employer,
                  emp_startdate:item.Emp_StartDate,
                  emp_enddate:item.Emp_EndDate,
                  emp_city:item.Emp_City,
                  emp_description:item.EmploymentDescription,
                  hobbies:item.Hobbies,
                  objective:item.Objective,
                  projecttitle:item.ProjectTitle,
                  githublink:item.GithubLink,
                  projectDescription:item.ProjectDescription,
                  skills:item.Skills,
                  websitename:item.WebsiteName,
                  websitelink:item.WebsiteLink,
                  Id:item._id
                }
              )
            })
            setCVState(fetchedData);
           })
      }
      return ()=>{
        fetchCVDetails();
      }
    })
    if(CVState){
   
    }
  return (
    <Container>
        {Form?<DetailsFilling/>:''}
       <TextBox>
          <h3>Create a <br/> professional resume</h3>
          <p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
           {CVState.length > 0?'':<button onClick={ShowDetailsForm}>Create My Resume</button>}
           {CVState.length > 0 && <div className='continue_progress'>
            <img src='/images/resume1.png'/>
            <br/>
            <button onClick={()=>navigate('/editcv')}>Continue Progress</button>
          </div>}
       </TextBox>
       <TemplateNavigation/>
       <Row>
         <TemplateExample/>
          <SecondTemplate/>
         <TemplateExample/>
       </Row>
    </Container>
  )
}

export default Home

let Container = styled.div`

`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:2% 5%;
`
let TextBox = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 margin-top:10%;
 margin-left:25%;
 width:50%;
 h3{
    text-align:center;
    font-size:50px;
    font-weight:600;
 }
 p{
    font-size:15px;
    font-weight:500;
 }
 button{
    background-color:purple;
    color:#fff;
    padding:13px 30px;
    border-radius:6px;
    border:none;
    cursor:pointer;
 }
 .continue_progress{
   margin-top:3%;
 }
`

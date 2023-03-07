import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import DetailsFilling from './DetailsFilling'
import Header from './Header'
import SecondTemplate from './SecondTemplate'
import TemplateColumn from './TemplateColumn'
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
  return (
    <Container>
        {Form?<DetailsFilling/>:''}
       <TextBox>
         <div className="left_part">
         <div className="color_bg"></div>
          <h3>Canvas Online Builder.</h3>
         <h3>Create a <br/> professional resume</h3>
          <p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
           {CVState.length > 0?'':<button onClick={ShowDetailsForm}>Create Your Resume</button>}
           {CVState.length > 0 && <div className='continue_progress'>
            <br/>
            <button onClick={()=>navigate('/editcv')}>Continue Progress</button>
          </div>}
         </div>
         <div className="right_part">
           <img src="/images/banner.png"/>
          </div>
       </TextBox>
       <TemplateNavigation/>
       <Row>
         <TemplateExample/>
          <SecondTemplate/>
         <TemplateExample/>
       </Row>
       <Row>
        <TemplateColumn
         image={'/images/resume1.png'}
         name='Toronto'
         description='A web-inspired resume template perfect for chatting up your achievements.'
        />
        <TemplateColumn
         image={'/images/resume2.jfif'}
         name='Stockholm'
         description='Perfect balance of fresh and balanced resume'
        />
        <TemplateColumn
         image={'/images/resume3.jfif'}
         name='New York'
         description='Professional and elegant resume template'
        />
       </Row>
       <Row>
        <TemplateColumn
         image={'/images/resume4.jfif'}
         name='Vienna'
         description='Classically structured resume'
        />
        <TemplateColumn
         image={'/images/resume5.jfif'}
         name='Sydney'
         description='Classically structured resume'
        />
        <TemplateColumn
         image={'/images/resume6.png'}
         name='London'
         description='Classically structured resume'
        />
       </Row>
       <Row>
        <TemplateColumn
         image={'/images/resume7.jfif'}
         name='Dublin'
         description=''
        />
        <TemplateColumn
         image={'/images/resume8.jfif'}
         name='Moscow'
         description='Modern minimalist template with graceful clarity'
        />
        <TemplateColumn
         image={'/images/resume9.png'}
         name='London'
         description='A touch of personality with well organised features'
        />
       </Row>
       <Row>
        <TemplateColumn
         image={'/images/resume10.jfif'}
         name='Amsterdam'
         description='Open whitespace template.Excellent readability'
        />
        <TemplateColumn
         image={'/images/resume11.jfif'}
         name='Eldoret'
         description='Powerful modern template'
        />
        <TemplateColumn
         image={'/images/resume12.jfif'}
         name='Madrid'
         description='Clean orderly template'
        />
       </Row>
       <Row>
        <TemplateColumn
         image={'/images/resume13.jfif'}
         name='Santiago'
         description='Classic Full page resume'
        />
        <TemplateColumn
         image={'/images/resume14.jfif'}
         name='Singapore'
         description='Classically structured resume'
        />
        <TemplateColumn
         image={'/images/resume15.png'}
         name='Oslo'
         description='Modern Eye catching Template'
        />
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
 width:100%;
 height:90vh;
 overflow:hidden;
 position:relative;
 margin-top:5%;
 .left_part{
  flex-basis:45%;
  text-align:left;
  position:relative;
  z-index:3;
  .color_bg{
    background-color:rgba(99, 159, 199, 0.5);
    height:150vh;
    width:100%;
    z-index:-1;
    top:-20vh;
    position:absolute;
    left:-33%;
    transform:rotate(135deg);
  }
  h3{
    font-size:50px;
    font-weight:400;
 }
 p{
    font-size:18px;
    font-weight:500;
    margin:1% 0;
    line-height:30px;
    color:gray;
 }
 button{
    background-color:#f44336;
    color:#fff;
    padding:14px 50px;
    border-radius:25px;
    border:none;
    font-size:19px;
    text-transform:uppercase;
    cursor:pointer;
 }
 .continue_progress{
   margin-top:3%;
   display:flex;
   justify-content:center;
   align-items:center;
 }
 }
 .right_part{
  flex-basis:40%;
  img{
    width:90%;
    object-fit:cover;
  }
 }

`

import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faCheck, faCloudArrowDown, faList, faListDots, faListNumeric, faRepeat, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setDataStore, setInputCounts, setPreviewValues, setSkillsSelected } from '../redux/SliceReducer'
import AdditionalDetails from './AdditionalDetails'
import ChosenComponent from './ChosenComponent'
import Education from './Education'
import EmployementSection from './EmployementSection'
import Hobbies from './Hobbies'
import LoadingDocument from './LoadingDocument'
import PreviewDocument from './PreviewDocument'
import ProjectsSection from './ProjectsSection'
import TemplateExample from './TemplateExample'
import UpdateView from './UpdateView'
import WebsiteLinks from './WebsiteLinks'

function FormattingSection() {
  const{SkillsSelected,BasicDetails,InputCounts,previewInputValues}=useSelector((state)=>state.CV_Canvas)
  //console.log(previewInputValues)
  const dispatch = useDispatch();
  let[Form,setForm]=React.useState({
    jobTitle:'',
    city:'',
    country:'',
  })
  let[Phone,setPhone]=React.useState('')
  let[firstName,setfirstName]=React.useState('')
  let[lastName,setlastName]=React.useState('')
  let[email,setemail]=React.useState('')
  //state lifted from AdditionalSection
  const[formData,setformData]=React.useState({
    address:'',
    postalcode:'',
    drivinglisence:'',
    nationality:'',
    place_of_birth:'',
    date_of_birth:''
})
function handleInputState(e){
    setformData((prevState)=>{
        return{
            ...prevState,
            [e.target.name]:e.target.value
        }
    })
}
let[TextArea,setTextArea]=React.useState('')
function handleInput(e){
  setForm((prevForm)=>{
    return{
      ...prevForm,
      [e.target.name]:e.target.value
    }
  })
}
//state lifted up from Employmentsection
const[form,setform]=React.useState({
  jobTitle:'',
  employer:'',
  startdate:'',
  enddate:'',
  city:'',
  description:'',
})
function handleInputEmployement(e){
  setform((prevState)=>{
      return{
          ...prevState,
          [e.target.name]:e.target.value
      }
  })
}
//state lifted up from education
const[formEducation,setformEducation]=React.useState({
  school:'',
  degree:'',
  startdate:'',
  enddate:'',
  city:'',
  description:'',
})
function handleInputEducation(e){
  setformEducation((prevState)=>{
      return{
          ...prevState,
          [e.target.name]:e.target.value
      }
  })
}
//state lifted up from website
const[FormWeb,setFormWeb]=React.useState({
  linkname:'',
  link:''
})
function handleLinks(e){
  setFormWeb((prevFormData)=>{
      return{
          ...prevFormData,
          [e.target.name]:e.target.value
      }
  })
  if(FormWeb.link.startsWith('https://')){
  }
}
//state lifted up from hobbies
const[Hobby,setHobby]=React.useState('');
function HandleHobby(e){
  setHobby(e.target.value)
}
//state lifted up from projects
const[FormProject,setFormProject]=React.useState({
  Projectname:'',
  projectlink:'',
  Description:''
});
function HandleInputProject(e){
  setFormProject((prevState)=>{
    return{
      ...prevState,
      [e.target.name]:e.target.value
    }
  })
}
//Updates section for the inputs

//console.log(FormProject)
async function captureCVDetails(e){
  e.preventDefault();
  await fetch('http://localhost:8080/createCV',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      jobtitle:Form.jobTitle, 
      firstname:firstName, 
      lastname:lastName,
      email:email,
      phonenumber:Phone,
      country:Form.country,  city:Form.city,  address:formData.address, 
      postalcode:formData.postalcode,
      drivinglisence:formData.drivinglisence,
      objective:TextArea,
      E_Jobtitle:form.jobTitle, E_Employer:form.employer,
      E_startdate:form.startdate, E_Enddate:form.enddate,
      E_City:form.city, E_Description:form.description, 
      Edu_SchoolName:formEducation.school,Edu_Degree:formEducation.degree,
      Edu_Startdate:formEducation.startdate,  Edu_Enddate:formEducation.enddate,
      Edu_City:formEducation.city,Edu_Description:formEducation.description,
      WebSiteName:FormWeb.linkname,WebsiteLink:FormWeb.link,skills:SkillsSelected,
      hobbies:Hobby,projectTitle:FormProject.Projectname,projectLink:FormProject.projectlink,
      projectDescription:FormProject.Description
    })
  })
}
let[CVdata,setCVData]=React.useState([]);
//console.log(CVdata)
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
        setCVData(fetchedData);
       })
       .catch((err)=>{
        console.log(err);
       })
  }
  return ()=>{
    fetchCVDetails();
  }
})
  useEffect(()=>{
    setPhone(BasicDetails.P_Number)
    setemail(BasicDetails.Email)
    setlastName(BasicDetails.S_Name)
    setfirstName(BasicDetails.F_Name)
  },[BasicDetails])
  let[Choices,setChoices]=React.useState({
    chosen:'',
    first:'HTML',
    second:'CSS',
    third:'Javascript',
    fourth:'Java',
    fifth:'Python',
    sixth:'Django',
    seventh:'React',
    eigth:'Angular',
    ninth:'Vue Js',
    tenth:'Flask',
    eleventh:'Go Lang',
    twelvth:'Ruby on Rails',
    thirteenth:'Swift',
    forteenth:'Node js',
    fifteenth:'PHP Laravel'
  })
  function handleSelection(e){
    setChoices((prevState)=>{
      return{
        ...prevState,
        [e.target.name]:e.target.value
      }
    })
    dispatch(setSkillsSelected({
      Skill:Choices.chosen
    }))
  }
  let[AdditonalDetailsState,setState]=React.useState(false);
  function ShowDetails(){
    setState((prevState)=>!prevState)
  }
  let[Styles,setStyles]=React.useState({});
  let presetBold ={
    fontweight:'bold'
  }
  function HandleBold(){
     setStyles(presetBold);
  }
  const[EmployementHistory,setEmployementHistory]=React.useState(false);
  function ShowForm(){
    setEmployementHistory((prevState)=>!prevState)
  }
  const[EducationSection,setEducationSection]=React.useState(false);
  function ShowEducation(){
    setEducationSection((prevState)=>!prevState)
  }
  const[Links,setLinks]=React.useState(false);
  function ShowLinks(){
    setLinks((prevState)=>!prevState)
  }
  let[ProjectState,setProjectState]=React.useState(false);
  function ShowProjects(){
    setProjectState((prevState)=>!prevState)
  }
  window.addEventListener('load',()=>{
    alert('On Refresh the data will be lost.Are you  sure?')
  })
  return (
    <Container>
      {CVdata.length > 0?<UpdateView data={CVdata}/>:<div className='left_side'>
         <div className='form'>
          <h4>Untitled</h4>
          <div className='country'>
            <img src='/images/flag.png'/>
            <small>English</small>
          </div>
          <div className='profile_completeness'>
             <small><p>0%</p>Profile Complete</small>
             <div className='complete'>
              {[...Array(17)].map((item,i)=>{
                return(
                  <span key={i}></span>
                )
              })}
             </div>
          </div>
          <div className='form_section'>
            <h3>Personal Details</h3>
            <form>
              <label>Job Title</label>
              <br/>
              <input
               type={'text'}
               placeholder='e.g React Developer'
               value={Form.jobTitle}
               name='jobTitle'
               onChange={handleInput}
               className='jobInput'
              />
              <br/>
              <div className='row'>
                <div className='col'>
                  <label>First Name</label>
                  <br/>
                  <input
                  type={'text'}
                  placeholder={'Your First Name'}
                  value={firstName}
                  name='firstName'
                  onChange={(e)=>setfirstName(e.target.value)}
                  />
                  <br/>
                </div>
                <div className='col'>
                  <label>Last Name</label>
                  <br/>
                  <input
                  type={'text'}
                  placeholder={'Your Last Name'}
                  value={lastName}
                  name='lastName'
                  onChange={(e)=>setlastName(e.target.value)}
                  />
                  <br/>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label>Email Address</label>
                  <br/>
                  <input
                  type={'email'}
                  placeholder={'Your Email Address'}
                  value={email}
                  name='email'
                  onChange={(e)=>setemail(e.target.value)}
                  />
                  <br/>
                </div>
                <div className='col'>
                  <label>Phone Number</label>
                  <br/>
                  <input
                  type={'number'}
                  placeholder={'phone number'}
                  value={Phone}
                  name='Phone'
                  onChange={(e)=>setPhone(e.target.value)}
                  />
                  <br/>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label>Country</label>
                  <br/>
                  <input
                  type={'text'}
                  placeholder={'e.g Kenya'}
                  value={Form.country}
                  name='country'
                  onChange={handleInput}
                  />
                  <br/>
                </div>
                <div className='col'>
                  <label>City</label>
                  <br/>
                  <input
                  type={'text'}
                  placeholder={'City'}
                  value={Form.city}
                  name='city'
                  onChange={handleInput}
                  />
                  <br/>
                </div>
              </div>
              {AdditonalDetailsState?<AdditionalDetails inputHandler = {handleInputState} AdditionalInfo={formData}/>:''}
            </form>
          </div>
          <button  className="Btn"onClick={ShowDetails}>{AdditonalDetailsState?'Hide Additional Details':'Edit Additional Details'} 
          <FontAwesomeIcon icon={AdditonalDetailsState?faAngleUp:faAngleDown}/></button>
          <div className='professional_summary'>
             <h3>Professional Summary</h3>
             <small>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience 
              & most importantly - your biggest achievements, best qualities and skills.</small>
              <div className='summary_section'>
                <div className='buttons'>
                  <button onClick={HandleBold}>B</button>
                  <button >U</button>
                  <button >I</button>
                  <FontAwesomeIcon style={{marginRight:'12px',cursor:'pointer',fontSize:'17px'}} icon={faListNumeric}/>
                  <FontAwesomeIcon style={{marginRight:'12px',cursor:'pointer',fontSize:'17px'}} icon={faListDots}/>
                </div>
                <textarea 
                 type='text'
                 placeholder='e.g Developer for 2 1/2 years of experience'
                 value={TextArea}
                 name='TextArea'
                 onChange={(e)=>setTextArea(e.target.value)}
                 style={Styles}
                ></textarea>
              </div>
          </div>
          <div className='employement'>
            <h2>Employement History</h2>
            <small>Show your relevant work experience(last 4-5 years).Use Bullet Points to note your Achievements<br/>
             Use The S.T.A.R  method to show this.
            </small>
            {EmployementHistory?<EmployementSection EmployementDetails={form} EmpHandler={handleInputEmployement} jobName={Form.jobTitle}/>:''}
            <br/>
            <button onClick={ShowForm} className='button'>+ Add Employement</button>
          </div>
          <div className='education'>
            <h2>Education</h2>
            <small>Write down your recent levels of Education.Companies may vary.Some may want Primary Level too.</small>
             {EducationSection?<Education EducationDetails={formEducation} EduHandler={handleInputEducation}/>:''}
             <br/>
            <button onClick={ShowEducation} className='button'>+ Add Education</button>
          </div>
          <div className='weblinks'>
            <h2>Website & Social Links</h2>
            <small>Portfolio links,linkedin links,github links and twitter links(optional) are
               a few of links developers are required to have</small>
               {Links?<WebsiteLinks WebDetails={FormWeb} WebHandler={handleLinks}/>:''}
               <br/>
               <button onClick={ShowLinks} className='button'>+ Add Links</button>
          </div>
          <div className='skills'>
            <h2>Skills</h2>
            <p>Choose at least 5 skills to show your employer</p>
            <select className="select" onChange={handleSelection} name='chosen' value={Choices.chosen}>
              <option>Select a Skill</option>
              <option value={Choices.first}>HTML</option>
              <option value={Choices.second}>CSS</option>
              <option value={Choices.third}>Javascript</option>
              <option value={Choices.fourth}>Java</option>
              <option value={Choices.fifth}>Python</option>
              <option value={Choices.sixth}>Django</option>
              <option value={Choices.seventh}>React</option>
              <option value={Choices.eigth}>Angular</option>
              <option value={Choices.ninth}>Vue Js</option>
              <option value={Choices.tenth}>Flask</option>
              <option value={Choices.eleventh}>Go Lang</option>
              <option value={Choices.twelvth}>Ruby on Rails</option>
              <option value={Choices.thirteenth}>Swift</option>
              <option value={Choices.forteenth}>Node js</option>
              <option value={Choices.fifteenth}>PHP Laravel</option>
            </select>
            <br/>
            {SkillsSelected.length >0?<div className='row_skills'>
            {SkillsSelected.map((item,i)=>{
              return(
                <ChosenComponent
                 key={item.Skill}
                 skill = {item.Skill}
                />
              )
            })}
          </div>:'Please select a skill or more to guarantee an interview'}
          <br/>
          </div>
          {ProjectState && <ProjectsSection ProjectHandler = {HandleInputProject} ProjectDetails={FormProject}/>}
          <Hobbies HobbyDetails={Hobby} fnHobby={HandleHobby}/>
          <div className='addSection'>
            <h2>Add Section</h2>
           <React.Fragment>
           <div className='layer'>
              <img src='/images/vase.png'/>
              <p>Extra Curricular Activities</p>
            </div>
            <div className='layer disable'>
              <img src='/images/hobby.png'/>
              <p>Hobbies</p>
            </div>
            <div className='layer'>
              <img src='/images/horn.png'/>
              <p>References</p>
            </div>
            <div className={ProjectState?'disable':'layer'} onClick={ShowProjects}>
              <img src='/images/work.png'/>
              <p> Projects</p>
            </div>
            <div className='layer'>
              <img src='/images/courses.png'/>
              <p>Courses</p>
            </div>
           </React.Fragment>
          </div>
          <button className='saveBtn' onClick={captureCVDetails}>{CVdata.length>0?'Update CV':'Save CV'} <FontAwesomeIcon icon={CVdata.length>0?faRepeat:faCloudArrowDown}/></button>
          <div className='quote'>
             <img src='/images/sparkles.png'/>
             <small>Preparation can take you only so far.After that you've got to take some leaps of faith</small>
             <img src='/images/sparkles.png'/>
           </div>
         </div>
       </div>}
       <div className='right_side'>
         <div className='header'>
           <div className='left'>
           <FontAwesomeIcon icon={faCloudArrowDown}/>
           <small>{navigator.onLine?'Saved':'Offline Mode'}</small>
           </div>
           <div className='right'>
            <FontAwesomeIcon  style={{color:'gray'}}icon={faAngleLeft}/>
            {CVdata.length > 0 &&  <small style={{fontSize:'14px'}}>1 /{CVdata.length}</small>}
            <FontAwesomeIcon  style={{color:'gray'}}icon={faAngleRight}/>
           </div>
         </div>
         <div className='avatar'>
           <img src='/images/avatar.png'/>
         </div>
         {CVdata.length>0?<>
         {CVdata.map((item,i)=>{
          return(
            <PreviewDocument
             key={i}
             username={item.f_name}
             l_name={item.l_name}
             email={item.email}
             city={item.city}
             postalcode={item.postalcode}
             phonenumber={item.p_Number}
             country={item.country}
             websitelink={item.websitelink}
             objective={item.objective}
             company={item.employer}
             position={item.EmpJobTitle}
             emp_description={item.emp_description}
             emp_startdate={item.emp_startdate}
             emp_enddate={item.emp_enddate}
             edu_startdate={item.Edu_startdate}
             edu_enddate={item.Edu_Enddate}
             school={item.Schoolname}
             schooldescription={item.Edu_Description}
             degree={item.Degree}
             skill={item.skills}
             projectTitle={item.projecttitle}
             projectDesc={item.projectDescription}
             githublink={item.githublink}
             hobbies={item.hobbies}
             id={item.Id}
            />
          )
         })}</>:<LoadingDocument/>}
       </div>
    </Container>
  )
}

export default FormattingSection

let Container = styled.div`
  top:0;
  left:0;
  position:fixed;
  width:100%;
  height:100vh;
  background-color:#fff;
  z-index:7;
  display:flex;
  justify-content:space-between;
  .left_side{
    height:100vh;
    max-height:100vh;
    overflow-y:scroll;
    ::-webkit-scrollbar{
      width:0;
    }
    flex-basis:50%;
    .form{
      padding:10px;
      margin-top:5%;
      .professional_summary{
        margin:2% 0;
        text-align:left;
        h3{
          font-size:20px;
          font-weight:300;
        }
        small{
          color:grey;
          font-size:13px;
        }
        .summary_section{
          background-color:grey;
          width:94%;
          height:max-content;
          border-radius:6px;
          padding:6px;
          h2{
            font-weight:300;
          }
          .buttons{
            button{
              background:transparent;
              border:none;
              outline:none;
              padding:5px;
              color:black;
              cursor:pointer;
              font-size:17px;
              margin:0 1%;
            }
          }
          textarea{
            width:100%;
            height:100px;
            background:transparent;
            resize:none;
            outline:none;
            border:none;
            ::placeholder{
              color:black;
            }
          }
          .employement{
            margin:3% 0;
            padding:2px;
            text-align:left;
            h2{
              font-weight:300;
            }
           .button{
              background:transparent;
              outline:none;
              border:none;
              color:cyan;
              cursor:pointer;
              padding:12px 45px;
            }
            small{
              color:gray;
              font-size:11px;
            }
          }
          .education{
            text-align:left;
            padding:6px;
            margin:3% 0; 
            h2{
              font-weight:300;
            }
            small{
              color:gray;
              font-size:11px;
            }
          }
          .weblinks{
            text-align:left;
            padding:6px;
            margin:1% 0;
            h2{
              font-weight:300;
            }
            small{
              color:gray;
              font-size:11px;
            }
          }
          .skills{
            text-align:left;
            padding:6px;
            margin:1% 0;
            h2{
              font-weight:300;
            }
          }
        }
      }
      .Btn{
        background:transparent;
        border:none;
        outline:none;
        padding:12px 40px;
        color:cyan;
        cursor:pointer;
        font-size:17px;
      }
      .form_section{
        padding:0 15px;
        h3{
          font-weight:300;
        }
        form{
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
          label{
            color:grey;
          }
          input{
            background-color:#f4f4f4;
            width:100%;
            height:45px;
            border-radius:5px;
            padding:0 10px;
            border:none;
            outline:none;
            ::placeholder{
              color:#000;
            }
          }
        }
      }
      h4{
        text-align:center;
        font-size:30px;
        font-weight:300;
      }
      .country{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width:20px;
          height:20px;
          margin-right:5px;
        }
        small{
          font-size:13px;
        }
      }
      .profile_completeness{
        text-align:left;
        margin:0 3%;
        small{
          color:gray;
          display:flex;
          font-size:16px;
          font-weight:bold;
        }
        p{
          color:#f44336;
        }
        .complete{
          display:flex;
          justify-content:space-between;
          align-items:center;
          span{
            height:4px;
            width:100%;
            border-radius:15px;
            display:block;
            background-color:gray;
            margin:2% 1px;
          }
        }
      }
    }
  }
  .right_side{
    background-color:#333;
    flex-basis:50%;
    position:relative;
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#fff;
      left:10%;
      top:20px;
      position:relative;
      .left{
        flex:0.3;
        display:flex;
        justify-content:center;
        small{
          margin-left:3px;
        }
      }
      .right{
        flex:0.6;
      }
    }
  }
`
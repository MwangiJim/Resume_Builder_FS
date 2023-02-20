import { faListDots, faListNumeric, faRepeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components'
import { setSkillsSelected } from '../redux/SliceReducer'
import ChosenComponent from './ChosenComponent'

const UpdateView = ({data}) => {
    const{SkillsSelected}=useSelector((state)=>state.CV_Canvas)
    let dispatch = useDispatch();
    let[Form,setForm]=React.useState({
        jobTitle:'',
        city:'',
        country:'',
        address:'',
        postalcode:'',
        drivinglisence:'',
        nationality:'',
        place_of_birth:'',
        date_of_birth:'',
        Phone:'',
        firstName:'',
        lastName:'',
        email:'',
        TextAreaObjective:'',
        E_jobTitle:'',
        employer:'',
        E_startdate:'',
        E_enddate:'',
        E_city:'',
        E_description:'',
        school:'',
        degree:'',
        Edu_startdate:'',
        Edu_enddate:'',
        Edu_city:'',
        Edu_description:'',
        linkname:'',
        link:'',
        Hobby:'',
        Projectname:'',
        projectlink:'',
        Description:''
      })
      const handleInput=(e)=>{
         setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
         })
      }
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
      function updateCVDetails(event){
        event.preventDefault();
        data.map(async(item,i)=>{
            return(
                <>
               { 
                 await fetch('http://localhost:8080/updateCvDetails'+item.Id,{
                    method:'PUT',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        jobtitle:Form.jobTitle,  firstname:Form.firstName, lastname:Form.lastName,
                        email:Form.email,
                        phonenumber:Form.Phone,  country:Form.country,  city:Form.city,  address:Form.address,
                        postalcode:Form.postalcode, drivinglisence:Form.drivinglisence, 
                        objective:Form.TextAreaObjective,
                        E_Jobtitle:Form.E_jobTitle, E_Employer:Form.employer, E_startdate:Form.E_startdate,
                        E_Enddate:Form.E_enddate,  E_City:Form.E_city, E_Description:Form.E_description, 
                        Edu_SchoolName:Form.school,Edu_Degree:Form.degree, Edu_Startdate:Form.Edu_startdate,
                        Edu_Enddate:Form.Edu_enddate, Edu_City:Form.Edu_city,Edu_Description:Form.Edu_description,
                        WebSiteName:Form.linkname,WebsiteLink:Form.link,skills:SkillsSelected,
                        hobbies:Form.Hobby,projectTitle:Form.Projectname,projectLink:Form.projectlink,
                        projectDescription:Form.Description
                    })
                 })
                .then((res)=>res.json())
                }
                </>
            )
        })
      }
  return (
    <Container>
        <div className='form'>
            <div className='form_section'>
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
            <label>Job Title</label>
              <br/>
              <form>
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
                  value={Form.firstName}
                  name='firstName'
                  onChange={handleInput}
                  />
                  <br/>
                </div>
                <div className='col'>
                  <label>Last Name</label>
                  <br/>
                  <input
                  type={'text'}
                  placeholder={'Your Last Name'}
                  value={Form.lastName}
                  name='lastName'
                  onChange={handleInput}
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
                  value={Form.email}
                  name='email'
                  onChange={handleInput}
                  />
                  <br/>
                </div>
                <div className='col'>
                  <label>Phone Number</label>
                  <br/>
                  <input
                  type={'number'}
                  placeholder={'phone number'}
                  value={Form.Phone}
                  name='Phone'
                  onChange={handleInput}
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
              <div className='row'>
         <div className='col'>
          <label>Address</label>
          <br/>
          <input
           type={'text'}
           placeholder='Address'
           value={Form.address}
           name='address'
           onChange={handleInput}
          />
         </div>
         <div className='col'>
          <label>Postal Code</label>
          <br/>
          <input
           type={'text'}
           placeholder='Postal Code'
           value={Form.postalcode}
           name='postalcode'
           onChange={handleInput}
          />
         </div>
      </div>
      <div className='row'>
          <div className='col'>
                  <label>Driving Lisence</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='DL'
                   value={Form.drivinglisence}
                   name='drivinglisence'
                   onChange={handleInput}
                  />    
        </div>      
        <div className='col'>
                  <label>Nationality</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='Nationality'
                   value={Form.nationality}
                   name='nationality'
                   onChange={handleInput}
                  />    
        </div>       
      </div>
      <div className='row'>
          <div className='col'>
                  <label>Place of Birth</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='Place of Birth'
                   value={Form.place_of_birth}
                   name='place_of_birth'
                   onChange={handleInput}
                  />    
        </div>
        <div className='col'>
                  <label>Date of Birth</label>
                  <br/>
                  <input
                   type={'date'}
                   placeholder='Date of Birth'
                   value={Form.date_of_birth}
                   name='date_of_birth'
                   onChange={handleInput}
                  />    
        </div>              
      </div>
      </form>
            </div>
      <div className='professional_summary'>
             <h3>Professional Summary</h3>
             <small>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience 
              & most importantly - your biggest achievements, best qualities and skills.</small>
              <div className='summary_section'>
                <div className='buttons'>
                  <button >B</button>
                  <button >U</button>
                  <button >I</button>
                  <FontAwesomeIcon style={{marginRight:'12px',cursor:'pointer',fontSize:'17px'}} icon={faListNumeric}/>
                  <FontAwesomeIcon style={{marginRight:'12px',cursor:'pointer',fontSize:'17px'}} icon={faListDots}/>
                </div>
                <textarea 
                 type='text'
                 placeholder='e.g Developer for 2 1/2 years of experience'
                 value={Form.TextAreaObjective}
                 name='TextAreaObjective'
                 onChange={handleInput}
                ></textarea>
              </div>
          </div>
          <div className='employement'>
            <h2>Employement History</h2>
            <small>Show your relevant work experience(last 4-5 years).Use Bullet Points to note your Achievements<br/>
             Use The S.T.A.R  method to show this.
            </small>
            <div className='header'>
            <p>{!Form.jobTitle && !Form.E_jobTitle?`(not specified)`:
        `${Form.jobTitle || Form.jobTitle}`}</p>
          </div>
      <div className='row'>
        <div className='col'>
            <label>Job Title</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.E_jobTitle}
             name='E_jobTitle'
            />
            <br/>
        </div>
        <div className='col'>
            <label>Employer</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.employer}
             name='employer'
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
             onChange={handleInput}
             value={Form.E_startdate}
             name='E_startdate'
            />
            <input
             type={'date'}
             onChange={handleInput}
             value={Form.E_enddate}
             name='E_enddate'
            />
            </div>
            <br/>
          </div>
           <div className='col'>
            <label>City</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.E_city}
             name='E_city'
            />
             <br/>
             </div>
           </div>
                <textarea
                type='text'
                onChange={handleInput}
                name='E_description'
                value={Form.E_description}
                className='textarea'
                placeholder='e.g Write down what you did while you were there'
                ></textarea>
            <br/>
          </div>
          <div className='education'>
            <h2>Education</h2>
            <small>Write down your recent levels of Education.Companies may vary.Some may want Primary Level too.</small>
            <div className='header'>
        <p>{!Form.school?`(not specified)`:`${Form.school}`}</p>
      </div>
      <div className='row'>
        <div className='col'>
            <label>School</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.school}
             name='school'
            />
            <br/>
        </div>
        <div className='col'>
            <label>Degree</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.degree}
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
             onChange={handleInput}
             value={Form.Edu_startdate}
             name='Edu_startdate'
            />
            <input
             type={'date'}
             onChange={handleInput}
             value={Form.Edu_enddate}
             name='Edu_enddate'
            />
            </div>
            <br/>
        </div>
        <div className='col'>
            <label>City</label>
            <br/>
            <input
             type={'text'}
             onChange={handleInput}
             value={Form.Edu_city}
             name='Edu_city'
            />
             <br/>
         </div>
        </div>
            <textarea
            type='text'
            onChange={handleInput}
            name='Edu_description'
            value={Form.Edu_description}
            className='textarea'
            placeholder='e.g Write down what you did while you were there'
            ></textarea>
             <br/>
          </div>
         <div className='weblinks'>
            <h2>Website & Social Links</h2>
            <small>Portfolio links,linkedin links,github links and twitter links(optional) are
               a few of links developers are required to have</small>
               <div className='header'>
          <p>{Form.linkname?Form.linkname:`(not specified)`}</p>
          </div>
          <div className='row'>
          <div className='col'>
            <label>Label</label>
            <br/>
            <input
             type={'text'}
             placeholder='Name of Link'
             value={Form.linkname}
             name='linkname'
             onChange={handleInput}
            />

          </div>
         <div className='col'>
            <label>Link</label>
            <br/>
            <input
             type={'text'}
             placeholder='https://......'
             value={Form.link}
             name='link'
             onChange={handleInput}
            />    
          </div>
          </div>
               <br/>
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
          <div className='projects'>
          <h2>Projects</h2>
        <p>Projects are vital to a Recruiter as they showcase the developers ability to code and refactor it. </p>
       <div className='row'>
        <div  className='col'>
         <label>Project Title</label>
        <input 
         type={'text'}
         placeholder='Project Name'
         name='Projectname'
         value={Form.Projectname}
         onChange={handleInput}
        />
        </div>
        <div className='col'>
            <label>Project Link</label>
            <br/>
            <input
             type={'text'}
             placeholder='Github Link'
             name='projectlink'
             value={Form.projectlink}
             onChange={handleInput}
            />
        </div>
       </div>
       <textarea
        type={"text"}
        placeholder='Description of your project,tools used,the end Result'
        value={Form.Description}
        name='Description'
        onChange={handleInput}
        className='textarea'
       ></textarea>
          </div>
          <div className='hobby'>
          <h2>Hobbies</h2>
            <small>What do you like?</small>
            <input
             type={'text'}
             placeholder='e.g Skiing,SkyDiving,Gaming,Travelling'
             name='Hobby'
             value={Form.Hobby}
             onChange={handleInput}
            />
          </div>
          <button className='saveBtn' onClick={updateCVDetails}>Update CV <FontAwesomeIcon icon={faRepeat}/></button>
          <div className='quote'>
             <img src='/images/sparkles.png'/>
             <small>Preparation can take you only so far.After that you've got to take some leaps of faith</small>
             <img src='/images/sparkles.png'/>
           </div>
            </div>
    </Container>
  )
}

export default UpdateView

let Container = styled.div`
flex-basis:50%;
height:100vh;
max-height:100vh;
overflow-y:scroll;
::-webkit-scrollbar{
  width:0;
}
.form{
    .form_section{
        padding:10px;
      margin-top:5%;
        h3{
          font-weight:300;
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
        form{
            padding:6px;
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
            width:100%;
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
          font-size:19px;
        }
      }
      }
}
`
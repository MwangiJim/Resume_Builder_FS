import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import {  faListDots, faListNumeric,faCloudArrowDown, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PreviewCoverLetter from './PreviewCoverLetter'
import LoadingCoverLetter from './LoadingCoverLetter'
import UpdateCoverLetter from './UpdateCoverLetter'

const CoverLetterForm = () => {
  let[Form,setForm]=React.useState({
    fullname:'',
    jobTitle:'',
    address:'',
    Email:'',
    phonenumber:'',
    CompanyName:'',
    HR_Name:'',
    companyLocation:'',
    letter:''
  })
  function HandleInput(e){
    setForm((prevForm)=>{
      return{
        ...prevForm,
        [e.target.name]:e.target.value
      }
    })
  }
  async function SaveDetails(e){
    e.preventDefault();
    await fetch('http://localhost:8080/postCoverLetterDetails',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        fullName:Form.fullname,
        jobTitle:Form.jobTitle,
        address:Form.address,
        email:Form.Email,
        phoneNumber:Form.phonenumber,
        Location:Form.companyLocation,
        companyName:Form.CompanyName,
        HR_Name:Form.HR_Name,
        CoverLetter:Form.letter,
        date:new Date().toLocaleDateString()
      })
    })
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
               date:item.Date,
               phone:item.PhoneNumber,
            }
          )
        })
        setLetterDetails(fetchedLetter)
      })
    }
    return ()=>{
      getCoverLetter()
    }
  })
  //console.log(LetterDetails)
  window.addEventListener('load',()=>{
    
  })
  return (
    <Container>
    <div className='overflow'>
    {LetterDetails.length > 0?
<UpdateCoverLetter data={LetterDetails}/>: 
<div className='left'>
     <div className='top_section'>
       <h4>Untitled</h4>
          <div className='country'>
            <img src='/images/flag.png'/>
            <small>English</small>
          </div>
       </div>
       <form>
        <h3>Personal Details</h3>
         <div className='row'>
          <div className='col'>
            <label>Full Name</label>
            <input
             type={'text'}
             placeholder='Full Name'
             value={Form.fullname}
             name='fullname'
             onChange={HandleInput}
            />
          </div>
          <div className='col'>
            <label>Job Title</label>
            <input
             type={'text'}
             placeholder='Job Title'
             value={Form.jobTitle}
             name='jobTitle'
             onChange={HandleInput}
            />
          </div>
         </div>
         <div className='row'>
          <div className='col'>
            <label>Address</label>
            <input
             type={'text'}
             placeholder='Address'
             value={Form.address}
             name='address'
             onChange={HandleInput}
            />
          </div>
          <div className='col'>
            <label>Email</label>
            <input
             type={'text'}
             placeholder='Email'
             value={Form.Email}
             name='Email'
             onChange={HandleInput}
            />
          </div>
         </div>
         <div className='row'>
          <div className='col'>
            <label>Phone Number</label>
            <input
             type={'number'}
             placeholder='Phonenumber'
             value={Form.phonenumber}
             name='phonenumber'
             onChange={HandleInput}
            />
          </div>
          <div className='col'>
            <label>Company Location</label>
            <input
             type={'text'}
             placeholder='Company Location'
             value={Form.companyLocation}
             name='companyLocation'
             onChange={HandleInput}
            />
          </div>
         </div>
         <h2>Employer Details</h2>
         <div className='row'>
          <div className='col'>
            <label>Company Name</label>
            <input
             type={'text'}
             placeholder='Company Name'
             value={Form.CompanyName}
             name='CompanyName'
             onChange={HandleInput}
            />
          </div>
          <div className='col'>
            <label>Hiring Manager Name</label>
            <input
             type={'text'}
             placeholder='Hiring Manager Name'
             value={Form.HR_Name}
             name='HR_Name'
             onChange={HandleInput}
            />
          </div>
         </div>
         <div className='letter'>
          <h3>Letter Details</h3>
          <small style={{color:'gray',fontSize:'13px'}}>3–4 paragraphs explaining why you're the perfect candidate for a specific job</small>
          <div className='letter_area'>
                <br/>
                <textarea
                 type={'text'}
                 value={Form.letter}
                 name='letter'
                 onChange={HandleInput}
                ></textarea>
          </div>
         </div>
         <button onClick={SaveDetails} style={{fontSize:'12px'}}>Save <FontAwesomeIcon icon={faCloudArrowDown}/></button>
       </form>
     </div>}
    </div>
     <div className='right-side'>
        <div className='header-side'>
           <div className='left-side'>
              <FontAwesomeIcon icon={faCloudArrowDown}/>
              <small>Saved</small>
           </div>
           <div className='right'>
             <FontAwesomeIcon icon={faAngleLeft}/>
            {LetterDetails.length>0 &&  <small>1 / {LetterDetails.length}</small>}
             <FontAwesomeIcon icon={faAngleRight}/>
           </div>
        </div>
           <div className='avatar'>
            <img src='/images/avatar.png'/>
           </div>
            {LetterDetails.length>0?
            <div>
              {LetterDetails.map((item,i)=>{
                return(
                  <PreviewCoverLetter
                      key={i}
                      name={item.fullname}
                      address={item.address}
                      jobTitle={item.jobTitle}
                      hrname={item.hrName}
                      companyLocation={item.location}
                      email={item.email}
                      date={item.date}
                      Id={item.Id}
                      companyName={item.companyName}
                      lettercontent={item.letter}
                      phone={item.phone}
                  />
                )
              })}
            </div>:<LoadingCoverLetter/>}
     </div>
    </Container>
  )
}

export default CoverLetterForm

let Container = styled.div`
height:100vh;
width:100%;
top:0;
left:0;
position:absolute;
z-index:10;
background:#fff;
display:flex;
justify-content:space-between;
.overflow{
  max-height:100vh;
  overflow-y:scroll;
  ::-webkit-scrollbar{
  width:0;
  }
}
.left{
  flex-basis:50%;
  padding:5px;
  .top_section{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    margin-top:5%;
    h4{
    font-size:20px;
   }
   .country{
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
      width:30px;
      height:30px;
    }
    small{
      font-size:15px;
    }
   }
}
form{
  margin-top:7%;
   .letter{
    small{
      color:gray;
      font-size:12px;
    }
    margin:2% 0;
   }
   button{
    background-color:cyan;
    padding:8px 20px;
    font-size:7px;
    border:none;
    border-radius:6px;
    color:#fff;
    cursor:pointer;
    font-size:17px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:12px 0 25px;
   }
 }
`
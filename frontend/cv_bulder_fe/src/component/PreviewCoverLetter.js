import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const PreviewCoverLetter = ({Id,companyName,phone,name,email,address,location,companyLocation,hrname,lettercontent,date,jobTitle}) => {
   async function deleteCoverLetter(){
    await fetch('http://localhost:8080/deletCoverLetter'+Id,{
      method:'DELETE'
    })
    .then((res)=>{
      alert(`deleted file with id ${Id}`)
    })
    .catch((err)=>{
      console.log(err.message)
    })
   }
   console.log(hrname,lettercontent)
  return (
    <Container>
      <div className='letter-box'>
         <div className='top'>
            <h2>{name}</h2>
            <h5>+254 {phone} {email} {address},{location}</h5>
            <small>https://portfolio-personal.vercel.app</small>
         </div>
         <div className='intro'>
          <div className='left'>
            <p>{email}</p>
            <p>PO.BOX {address}</p>
            <p>{location}</p>
            <p>{companyLocation}</p>
            <p>{companyName}</p>
          </div>
          <small>{date}</small>
         </div>
         <h3>RE:Application for {jobTitle}</h3>
         <div className='content'>
         <h4>Hello {hrname},</h4>
         <small>{lettercontent}</small>
          <div className='end'>
              <small>Yours Sincerely,</small>
            <small>{name}</small>
          </div>
         </div>
      </div>
        <div className='buttons_cl'>
         <button className='deleteBtn' onClick={deleteCoverLetter}>Delete Letter <FontAwesomeIcon icon={faTrash}/></button>
         <button className='downloadButton'>Download Letter <FontAwesomeIcon icon={faDownload}/></button>
       </div> 
    </Container>
  )
}

export default PreviewCoverLetter
let Container = styled.div`
.letter-box{
  height:450px;
  width:400px;
  background-color:#fff;
  border-radius:5px;
  padding:5px;
  margin:9% 6%;
  .top{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:black;
    font-size:12px;
    margin:2% 0;
    h5{
      font-weight:300;
    }
  }
  .intro{
    display:flex;
    justify-content:space-between;
    color:gray;
    font-size:12px;
  }
  .end{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    margin:4% 0;
  }
  .content{
    padding:5px;
    small{
      font-size:12px;
      color:gray;
    }
    h4{
      font-size:12px;
      margin:1% 0;
      font-weight:300;
    }
  }
  h3{
    margin:3% 1%;
    font-weight:300;
    font-size:15px;
    border-bottom:1px solid #000;
  }
}
.buttons_cl{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  position: absolute;
  left:75%;
  top:20%;
  .downloadButton{
    background-color: #3b5998; 
   height:30px;
   width:150px;
   display:flex;
   margin:2% 0;
   justify-content: center;
   align-items: center;
   font-size: 14px;
    border-radius: 7px;
    color: #f4f4f4;
    cursor: pointer;
    border: none;
    outline: none;
  }
  .deleteBtn{
    background-color: #f44336;
   height:30px;
   width:150px;
   display:flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
    border-radius: 7px;
    color: #f4f4f4;
    cursor: pointer;
    border: none;
    outline: none;
  }
}
`
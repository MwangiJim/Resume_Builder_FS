import { faTrashCan ,faDownload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect, useRef} from 'react'
import styled from 'styled-components'

const PreviewDocument = ({username,l_name,email,city,postalcode,phonenumber,country,websitelink,objective,company,
position,emp_description,emp_startdate,emp_enddate,edu_enddate,edu_startdate,school,schooldescription,degree,skill,
projectTitle,projectDesc,githublink,hobbies,id,
}) => {
  async function DeleteCV(){
    await fetch('http://localhost:8080/deleteCvDetails'+id,{
      method:'DELETE',
    })
  }
  let CountCompleteRef = React.useRef(null);
 // console.log(CountCompleteRef)
  return (
    <Preview>
       <h3 className='Name' style={{fontSize:'16px',textAlign:'center'}}>{username} {l_name}</h3>
       <p style={{fontSize:'9px',textAlign:'center'}}>{email} {city},{postalcode} {phonenumber},{country}</p>
       <p style={{color:'gray',fontSize:'8px',textAlign:'center'}}>{websitelink}</p>
       <p style={{color:'gray',fontSize:'8px',textAlign:'center'}}>https://github.com/MwangiJim</p>
       <div className='objective'>
        <h3>My Objective</h3>
        <div className='row'>
          <p>{objective}</p>
        </div>
       </div>
        <div className='employement'>
        <h4 style={{fontWeight:'300',fontSize:'13px'}}>Employment History</h4>
        <div className='rows'>
        <h4>{position}</h4>
            <div className='content'>
                <h5>{company}</h5>
                <p>{emp_description}</p>
            </div>
            <small>{emp_startdate} - {emp_enddate}</small>
        </div>
       </div>
       <div className='education'>
         <h2>Education</h2>
         <div className='dates'>
            <small>{degree}</small>
            <div className='school'>
                <h4>{school}</h4>
                <p>{schooldescription}</p>
            </div>
            <small>{edu_startdate} - {edu_enddate}</small>
         </div>
       </div>
       <div className='skills'>
        <h3>Skills</h3>
         <div className='skill-doc'>
          {skill.map((item,i)=>{
             return(
           <>
              {item.Skill!==''? <li key={i}>{item.Skill}</li>:''}
           </>
             )
          })}
         </div>
       </div>
       <div className='achievements'>
        <h3>Projects</h3>
         <div className='project'>
          <strong><li>{projectTitle}</li></strong>
          <li>{projectDesc}</li>
          <li>{githublink}</li>
         </div>
       </div>
       <div className='hobbies'>
        <h3>Hobbies and Interests</h3>
        <div className='hobby'>
        <p>{hobbies}</p>
        </div>
       </div>
       <div className='buttons_bottom'>
          <div className='deleteBtn' onClick={DeleteCV}>Delete CV <FontAwesomeIcon icon={faTrashCan}/></div>
          <div className='downloadButton'>Download PDF <FontAwesomeIcon icon={faDownload}/></div>
       </div>
    </Preview>
  )
}

export default PreviewDocument
let Preview = styled.div`
  width:400px;
  height:555px;
  background-color:#fff;
  border-radius:7px;
  left:50%;
  position:absolute;
  top:50%;
  padding:4px;
  transform:translate(-50%,-50%);
   .objective{
     display:flex;
     margin-top:1%;
     justify-content:space-between;
     flex-direction:column;
     border-top:3px dashed #333;
     border-bottom:2px dashed #333;
     padding:12px 4px;
     h3{
      font-size:15px;
      font-weight:300;
     }
     .row{
         flex:0.8;
         text-align:left;
         p{
             font-size:7px;
         }
     }
   }
   .employement{
     padding:4px;
     border-bottom:2px dashed #333;
     padding:12px 4px;
    .rows{
     display:flex;
     justify-content:space-between;
     h5,h4{
         font-size:8px;
         font-weight:300;
     }
     .content{
         text-align:left;
         flex:0.5;
         p{
             font-size:8px;
         }
         h4{
             font-size:7px;
             margin-bottom:1%;
         }
     }
     small{
      font-size:7px;
     }
    }
   }
   .education{
     padding:4px;
     border-bottom:2px dashed #333;
     padding:12px 4px;
     h2{
         font-size:9px;
         font-weight:300;
     }
     .dates{
         display:flex;
         justify-content:space-between;
         small{
             font-size:8px;
         }
         .school{
             font-size:8px;
             flex-basis:40%;
         }
     }
   }
   .skills{
    padding:18px 4px;
     display:block;
     border-bottom:2px dotted #333;
     h3{
         font-size:13px;
         font-weight:300;
     }
     .skill{
         margin-top:5%;
         li{
             font-size:8px;
         }
     }
   }
   .achievements{
    padding:10px 4px;
     display:block;
     border-bottom:2px dashed #333;
     h3{
      font-weight:300;
      font-size:13px;
     }
     .project{
      text-align:left;
      li{
        font-size:10px;
        font-weight:200;
      }
      h4{
        font-weight:300;
        font-size:10px;
      }
     }
     p{
         font-size:8px;
     }
   }
   .hobbies{
    padding:6px;
    h3{
      font-weight:300;
      font-size:11px;
    }
    .hobby{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin:0% 1%;
      p{
        font-size:12px;
      }
    }
   }
   button{
     background-color:purple;
     padding:12px 30px;
     color:#fff;
     border-radius:6px;
     cursor:pointer;
     opacity:0;
   }
`
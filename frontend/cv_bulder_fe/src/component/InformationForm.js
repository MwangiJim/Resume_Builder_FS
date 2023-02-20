import React, { useEffect } from 'react'
import styled from 'styled-components'
import dataQuiz from '../Data/QuizStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAngleDown,faStar,faTimes,faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBasicDetails } from '../redux/SliceReducer'

function InformationForm() {
  const dispatch = useDispatch();
    let[Form,setForm]=React.useState({
        firstName:'',
        secondName:'',
        phoneNumber:'',
        emailAdress:''
    })
    function HandleInput(e){
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    let[Index,setIndex]=React.useState(0);
    let[Error,setError]=React.useState(null);
    const navigation = useNavigate();
    function nextBtn(){
      if(Index < dataQuiz.length-1 && Form.firstName && Form.secondName){
        setIndex((prevState)=>prevState+1)
      }
      if(Index === 1){
         navigation('/editcv')
         dispatch(setBasicDetails({
          F_Name:Form.firstName,
          S_Name:Form.secondName,
          P_Number:Form.phoneNumber,
          Email:Form.emailAdress
        }))
      }
      else{
        setError('Please Fill in the Blanks');
      }
    }

    function prevBTN(){
       if(Index >= dataQuiz.length-1){
        setIndex((prevState)=>prevState-1)
       }
       //alert('hi')
    }
    //console.log(Index)
  return (
    <FormBox>
       {dataQuiz.map((quiz,i)=>{
        return(
        <div className={Index===i?'active':'inactive'}>
             <h1>{quiz.Header}</h1>
             <small>{quiz.remark}</small>
            <form>
                <label>{quiz.firstQuiz}</label>
                <br/>
                <input
                type={Index === 1?'email':'text'}
                placeholder={Index === 1?'Email Address':'First Name'}
                value={Index === 1?Form.emailAdress:Form.firstName}
                name= {Index === 1?'emailAdress':'firstName'}
                onChange={HandleInput}
                style={{border:Error?'2px solid red':'2px solid grey'}}
                />
                <br/>
                {Error?<p style={{color:'red'}}><FontAwesomeIcon icon={faTriangleExclamation}/>{Error}</p>:''}
                <br/>
                <label>{quiz.SecondQuiz}</label>
                <br/>
                <input
                type={Index === 1?'number':'text'}
                placeholder={Index === 1?'Phone Number':'Last Name'}
                value={Index ===1?Form.phoneNumber:Form.secondName}
                name={Index === 1?'phoneNumber':'secondName'}
                onChange={HandleInput}
                style={{border:Error?'2px solid red':''}}
                />
                <br/>
                {Error?<p style={{color:'red'}}><FontAwesomeIcon icon={faTriangleExclamation} style={{color:'red'}}/>{Error}</p>:''}
       </form>
        </div>
        )
       })}
       <div className='controls'>
            <button onClick={prevBTN} className='backBtn'>Back</button>
            <button onClick={nextBtn} className='contBtn'>Continue</button>
         </div>
       <small>By signing up via your social profile or by email you agree with our Terms of use and
             Privacy Policy, and topresume.com's Terms & Conditions and Privacy Policy.</small>
    </FormBox>
  )
}

export default InformationForm
let FormBox = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:440px;
  height:max-content;
  left:50%;
  top:50%;
  position:absolute;
  transform:translate(-50%,-50%);
  h1{
    color:cyan;
    font-size:45px;
    font-weight:600;
  }
  small{
    font-size:14px;
  }
  form{
    input{
        width:400px;
        height:50px;
        background-color:grey;
        border-bottom:cyan;
        outline:none;
        padding:0 5px;
        color:#000;
        margin:2% 0;
        border:2px solid black;
        border-radius:5px;
        ::placeholder{
            color:black;
        }
    }
  }
  .controls{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .backBtn{
        background-color:grey;
        color:#000;
        border:2px solid #333;
    }
    .contBtn{
        background-color:cyan;
        color:#fff;
        border:none;
    }
    button{
        border-radius:7px;
        padding:12px 35px;
        outline:none;
        cursor:pointer;
    }
}
`
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAngleDown,faStar,faTimes} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import TemplateExample from './TemplateExample'
import SecondTemplate from './SecondTemplate'
import InformationForm from './InformationForm'
import { setCanvasState } from '../redux/SliceReducer'

const DetailsFilling = () => {
  let dispatch = useDispatch();
    const {canvasState} = useSelector((state)=>state.CV_Canvas)
    console.log(canvasState)
    let[Form,setForm]=React.useState(false);
    function HideDetailsForm(){
        setForm((prevForm)=>!prevForm)
        dispatch(setCanvasState(false))
    }
    let styles = {
        display:Form?'none':'block'
    }
  return (
    <Container style={styles}>
       <div className='header'>
         <h4>CVCanvas</h4>
         <div className='controls'>
            <div className='first'>
                <p style={{backgroundColor:!canvasState?'cyan':'grey'}}>1</p>
                <small>Choose Template</small>
            </div>
            <div className='line'></div>
            <div className='first'>
                <p>2</p>
                <small>Fill in Details</small>
            </div>
            <div className='line'></div>
            <div className='first'>
                <p>3</p>
                <small>Download Template</small>
            </div>
         </div>
         <FontAwesomeIcon icon={faTimes} style={{color:'grey',fontSize:'20px'}} onClick={HideDetailsForm}/>
       </div>
       {!canvasState?<div className='selections'>
          <TemplateExample/>
          <SecondTemplate/>
       </div>:<InformationForm/>}
    </Container>
  )
}

export default DetailsFilling

let Container = styled.div`
top:0;
left:0;
position:fixed;
height:100vh;
width:100%;
background-color:#fff;
z-index:10;
.selections{
  display:flex;
  justify-content:center;
  align-items:center;
}
 .header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:3% 7%;
    h4{
        color:purple;
        font-size:20px;
    }
    .controls{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex:0.7;
        .line{
            background-color:grey;
            height:2px;
            width:80%;
          }
        div{
            display:flex;
            p{
                margin-right:7px;
                padding:6px 12px;
                border-radius:50%;
                background-color:grey;
                color:#fff;
            }
        }
    }
 }
`
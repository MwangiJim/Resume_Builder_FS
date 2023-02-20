import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { setCanvasState } from '../redux/SliceReducer';

const TemplateExample = () => {
  const{previewInputValues}=useSelector((state)=>state.CV_Canvas);
  //console.log(previewInputValues)
    const dispatch = useDispatch();
    function SelectTemplate(){
          dispatch(setCanvasState(true))
    }
  return (
    <FirstTemplate>
       <h3 className='Name' style={{fontSize:'16px',textAlign:'center'}}>Jimmy Mwangi</h3>
       <p style={{fontSize:'9px',textAlign:'center'}}>kingongomwangi@gmail.com Nairobi (0232),100 0797950171</p>
       <div className='first_part'>
         <h2 style={{fontSize:'16px'}}>PROFILE</h2>
         <div className='left_side'>
            <p>Qui vero autem sed aperiam saepe et quam laboriosam. Sed dolores itaque ad enim facere ut voluptatem animi eos consequuntur suscipit eum galisum vitae. Aut iste dolorum et quibusdam suscipit aut repudiandae pariatur! Qui neque numquam rem sint possimus sed consequuntur sunt et voluptatem libero. </p><p>Rem quas voluptatibus qui molestias voluptatem et dolorem voluptas. Quo perferendis sequi nam cupiditate dolor ad quos reiciendis sit sunt dicta sed neque esse. Vel minus sequi ut omnis  </p>
         </div>
       </div>
       <div className='employement'>
        <h4>Employment History</h4>
        <div className='rows'>
            <h2>Maxsoft Systems</h2>
            <div className='content'>
                <h4>FrontEnd Intern</h4>
                <p>Rem quas voluptatibus qui molestias voluptatem et dolorem  dicta sed neque esse. Vel minus sequi ut omnis  </p>
            </div>
            <small>2nd Jan 2023 - 4th April 2023</small>
        </div>
       </div>
       <div className='education'>
         <h2>EDUCATION</h2>
         <div className='dates'>
            <small>13th Aug 2014 - 29 Nov 2017</small>
            <div className='school'>
                <h4>Mang'u High school</h4>
                <p>Got a B+</p>
            </div>
            <small>High School</small>
         </div>
         <div className='dates'>
            <small>13th Aug 2014 - 29 Nov 2017</small>
            <div className='school'>
                <h4>Mang'u High school</h4>
                <p>Got a B+</p>
            </div>
            <small>High School</small>
         </div>
       </div>
       <div className='skills'>
        <h3>SKILLS</h3>
         <div className='skill'>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>MongoDb</li>
            <li>React js</li>
         </div>
       </div>
       <div className='achievements'>
        <h3>ACHIEVEMENTS</h3>
        <p>FreecodeCamp React Js Certificate</p>
        <p>ProfitWithJs certficate</p>
        <p>AWS Cloud Certificate</p>
       </div>
       <button onClick={SelectTemplate}>Select Template</button>
    </FirstTemplate>
  )
}

export default TemplateExample

let FirstTemplate = styled.div`
  height:max-content;
  width: 320px;
  border:20px solid gray;
  background-color: #fff;
  border-radius: 7px;
  padding:5px;
  cursor:pointer;
  :hover button{
    bottom:150px;
    position:relative;
    opacity:1;
    left:80px;
    transition:0.5s;
  }
  .first_part{
    display:flex;
    margin-top:1%;
    justify-content:space-between;
    border-top:3px dashed #333;
    border-bottom:3px dashed #333;
    .left_side{
        flex:0.7;
        text-align:left;
        p{
            font-size:6px;
        }
    }
  }
  .employement{
    padding:4px;
    border-bottom:4px dashed #333;
   .rows{
    display:flex;
    justify-content:space-between;
    h2{
        font-size:14px;
        font-weight:400;
    }
    .content{
        text-align:left;
        flex:0.7;
        p{
            font-size:8px;
        }
        h4{
            font-size:11px;
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
    border-bottom:4px dashed #333;
    h2{
        font-size:15px;
    }
    .dates{
        display:flex;
        justify-content:space-between;
        small{
            font-size:8px;
        }
        .school{
            font-size:10px;
        }
    }
  }
  .skills{
    display:block;
    border-bottom:4px dotted #333;
    h2{
        font-size:15px;
    }
    .skill{
        margin-top:3%;
        li{
            font-size:8px;
        }
    }
  }
  .achievements{
    display:block;
    border-bottom:4px dashed #333;
    h3{
        font-size:15px;
    }
    p{
        font-size:8px;
    }
  }
  button{
    background-color:purple;
    padding:12px 30px;
    color:#fff;
    border-radius:6px;
    cursor:pointer;
    opacity:0;
    bottom:0;
    position:relative;
    transition:1s;
    left:80px;
  }
`
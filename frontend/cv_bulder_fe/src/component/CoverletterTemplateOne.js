import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { setCoverletterState } from '../redux/SliceReducer';

const CoverletterTemplateOne = () => {
  let dispatch = useDispatch();
  function selectTemplate(){
    dispatch(setCoverletterState(true))
  }
  return (
    <Container>
       <div className='cover-header'>
       <h3>Jimmy Mwangi</h3>
       <p>kingongomwangi@gmail.com ,Nairobi (0232),100,Teleposta Towers,Kenyatta Avenue</p>
       <small>https://portfolio-website.vercel.app</small>
       </div>
       <div className='title'>
          <div className='left'>
            <p>Nairobi (0232),100,</p>
            <p>Gamers Engine</p>
            <p>Compton,Carlifornia</p>
          </div>
          <small>13th Feb 2023</small>
       </div>
       <div className='context'>
           <small>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
             essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
             Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
             Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           </small>
       </div>
       <button className='selectBtn' onClick={selectTemplate}>Select Template</button>
    </Container>
  )
}

export default CoverletterTemplateOne
let Container = styled.div`
//transform:scale(0.5);
 height:350px;
 width:300px;
 background-color:#fff;
 border-radius:6px;
 padding:5px;
 box-shadow:3px 3px 7px #333;
 .selectBtn{
  padding:12px 30px;
  border-radius:25px;
  font-size:18px;
  text-transform:uppercase;
  color:#fff;
  background-color:#f44336;
  border:none;
  outline:none;
  cursor:pointer;
  left:50px;
  opacity:0;
  position:relative;
  bottom:0;
 }
 :hover .selectBtn{
  bottom:150px;
  position:relative;
  opacity:1;
  left:50px;
  transition:0.5s;
}
 .cover-header{
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    text-align:center;
    h3{
        font-size:18px;
        font-weight:300;
    }
    small{
        color:gray;
        font-size:9px;
    }
    p{
        font-size:11px;

    }
 }
 .title{
    display:flex;
    justify-content:space-between;
    .left{
        text-align:left;
        font-size:9px;
    }
    small{
        font-size:8px;
        color:gray;
    }
 }
 .context{
    font-size:12px;
    color:gray;
    margin:1% 0;
 }
`
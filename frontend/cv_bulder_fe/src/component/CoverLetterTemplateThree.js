import React from 'react'
import styled from 'styled-components'

const CoverLetterTemplateThree = () => {
  return (
    <Container>
     <div className='Header'>
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
           <button className='selectBtn'>Select Template</button>
       </div>
    </Container>
  )
}

export default CoverLetterTemplateThree

let Container = styled.div`
height:350px;
width:300px;
background-color:#fff;
border-radius:6px;
box-shadow:3px 3px 7px #333;
overflow:hidden;
display:flex;
justify-content:space-between;
.selectBtn{
    padding:12px 40px;
    border-radius:6px;
    background-color:purple;
    color:#000;
    border:none;
    outline:none;
    cursor:pointer;
    left:20px;
    opacity:0;
    position:relative;
    bottom:0;
   }
   :hover .selectBtn{
    bottom:150px;
    position:relative;
    opacity:1;
    left:20px;
    transition:0.5s;
  }
.Header{
    background-color:#000;
    color:#fff;
    display:block;
    flex-basis:10%;
    padding:4px;
    .cover-header{
        flex:0.4;
        h3{
            font-size:15px;
            font-weight:600;
        }
        small{
            color:gray;
            font-size:9px;
        }
        p{
            font-size:8px;
    
        }
    }
    .title{
        flex:0.3;
        .left{
            text-align:left;
            font-size:9px;
        }
        small{
            font-size:8px;
            color:gray;
        }
    }
}
.context{
    flex-basis:80%;
    font-size:9px;
    color:gray;
    margin:1% 0;
    padding:5px;
}
`
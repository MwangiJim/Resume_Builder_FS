import React from 'react'
import styled from 'styled-components'
import ColumnSections from './ColumnSections'


const BlogDropDown = () => {
  return (
    <Container>
        <div className='top_section'>
                <img src='/images/tv.png'/>
                <div className='right_side'>
                    <h4>See All Posts</h4>
                    <small>Find out how you can get a new job or improve the one you have</small>
                </div>
            </div>
      <ColumnSections
       header='Job Search'
        image='/images/search.png'
        text='Learn how to find the right Job and get it'
       />
       <ColumnSections
       header='Job Interviews'
        image='/images/interview.png'
        text='Prepare for any interview and ace it'
       />
       <ColumnSections
       header='Career Advice'
       image='/images/horn.png'
       text='Improve your career with expert tips and strategies'
       />
       <ColumnSections
       header='Resume Help'
       image='/images/resumehelp.png'
       text='Improve your resume with expert guides'
       />
       <ColumnSections
       header='CV Help'
       image='/images/resumehelp.png'
       text='Improve your CV with help from expert guides'
       />
    </Container>
  )
}

export default BlogDropDown
let Container = styled.div`
height:max-content;
width:400px;
background-color:#fff;
padding:5px;
box-shadow:2px 3px 7px #000;
.bTn{
    width:100%;
    background:red;
    color:white;
}
.top_section{
    background:#fff;
    height:20vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
        width:60px;
        height:60px;
    }
    .right_side{
        flex:0.9;
        text-align:left;
        color:black;
        small{
            font-size:17px;
        }
        h4{
            font-weight:300;
            font-size:20px;
            margin-bottom:10px;
        }
    }
  }
`
import React from 'react'
import styled from 'styled-components'

const LoadingDocument = () => {
  return (
    <Container>
      <div className='loader_line'></div>
      <div className='header_line'></div>
      <div className='second-section'></div>
      <div className='second-section'></div>
      <div className='second-section'></div>
      <div className='third-section'></div>
      <div className='header_line'></div>
      <div className='fourth-section'></div>
      <div className='header_line'></div>
      <div className='fourth-section'></div>
      <div className='skills-section-header'></div>
      <div className='skills-section-lines'></div>
      <div className='skills-section-lines'></div>
      <div className='skills-section-lines'></div>
      <div className='projects-section-header'></div>
      <div className='projects-section-lines'></div>
      <div className='projects-section-lines'></div>
      <div className='projects-section-lines'></div>
      <div className='header_line'></div>
      <div className='projects-section-lines'></div>
      <div className='projects-section-lines'></div>
    </Container>
  )
}

export default LoadingDocument

let Container = styled.div`
 width:400px;
 height:570px;
 border-radius:7px;
 padding:7px;
 background-color:#fff;
 left:140px;
  position:absolute;
  top:8%;
`
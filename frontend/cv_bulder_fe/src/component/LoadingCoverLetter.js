import React from 'react'
import styled from 'styled-components'

const LoadingCoverLetter = () => {
  return (
    <Container>
      <div className='header_cover'>
        <div className='cl_header'></div>
        <div className='cl_second'></div>
        <div className='cl_third'></div>
      </div>
      <div className='cl_intro'>
        <div className='lines'></div>
        <div className='lines'></div>
        <div className='lines'></div>
        <div className='lines small'></div>
      </div>
      <div className='line'></div>
      <div className='context-section'>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines'></div>
        <div className='area-lines area-line-small'></div>
        <div className='return'>
            <div className='line'></div>
            <div className='line'></div>
        </div>
      </div>
    </Container>
  )
}

export default LoadingCoverLetter
let Container = styled.div`
 height:500px;
 width:450px;
 padding:5px;
 border-radius:6px;
 top:12%;
 position:absolute;
 left:50px;
 background-color:#fff;
`
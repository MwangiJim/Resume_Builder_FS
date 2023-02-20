import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

function AdditionalDetails(props) {
  return (
    <Container>
      <div className='row'>
         <div className='column'>
          <label>Address</label>
          <br/>
          <input
           type={'text'}
           placeholder='Address'
           value={props.AdditionalInfo.address}
           name='address'
           onChange={props.inputHandler}
          />
         </div>
         <div className='column'>
          <label>Postal Code</label>
          <br/>
          <input
           type={'text'}
           placeholder='Postal Code'
           value={props.AdditionalInfo.postalcode}
           name='postalcode'
           onChange={props.inputHandler}
          />
         </div>
      </div>
      <div className='row'>
          <div className='column'>
                  <label>Driving Lisence</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='DL'
                   value={props.AdditionalInfo.drivinglisence}
                   name='drivinglisence'
                   onChange={props.inputHandler}
                  />    
        </div>      
        <div className='column'>
                  <label>Nationality</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='Nationality'
                   value={props.AdditionalInfo.nationality}
                   name='nationality'
                   onChange={props.inputHandler}
                  />    
        </div>       
      </div>
      <div className='row'>
          <div className='column'>
                  <label>Place of Birth</label>
                  <br/>
                  <input
                   type={'text'}
                   placeholder='Place of Birth'
                   value={props.AdditionalInfo.place_of_birth}
                   name='place_of_birth'
                   onChange={props.inputHandler}
                  />    
        </div>
        <div className='column'>
                  <label>Date of Birth</label>
                  <br/>
                  <input
                   type={'date'}
                   placeholder='Date of Birth'
                   value={props.AdditionalInfo.date_of_birth}
                   name='date_of_birth'
                   onChange={props.inputHandler}
                  />    
        </div>              
      </div>
    </Container>
  )
}

export default AdditionalDetails
let Container = styled.div`
    .row{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin:3% 0;
      .column{
        flex:0.45;
        text-align:left;
      }
    }
    label{
      color:grey;
    }
    input{
      background-color:#f4f4f4;
      width:100%;
      height:45px;
      border-radius:5px;
      padding:0 10px;
      border:none;
      outline:none;
      ::placeholder{
        color:#000;
      }
    }
`
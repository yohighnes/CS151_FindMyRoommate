import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import logo from "../../pic/logo.png";

function SignupForm() {
    return (

        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <div>
          <img style={{height: "100px",marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%'}} src={logo}/>
          </div>
          <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Last Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='SJSU ID' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='School Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
  
        <MDBBtn className="mb-4" style={{backgroundColor: '#F4B183'}}>Sign up</MDBBtn>
  
        <div className="text-center">
          <p>Already a member? <a href="/login" style={{color: '#F4B183'}}>Log in</a></p>
          <p>or sign up with:</p>
  
          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>
  
          </div>
        </div>
  
      </MDBContainer>
    );

}

export default SignupForm;
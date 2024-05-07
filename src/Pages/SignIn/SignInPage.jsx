import React from 'react'
import './signInPage.css'
import Title from '../../Components/HomePage/Title/Title'
import SignIn from '../../Components/SignIn/SignIn'

const SignInPage = () => {
  return (
    <div className='signInPage_main'>
      <Title/>
      <SignIn/>
    </div>
  )
}

export default SignInPage
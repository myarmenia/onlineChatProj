import React from 'react'
import './signIn.css'
import img from '../../Images/8-01 1.png'

const SignIn = () => {
  return (
    <div className='signIn_main'>
        <div className="signIn_content">
            <div className="inner">
            <img src={img} alt="" />
            <h3>Sign in</h3>
            <h4>Welcome</h4>
            <p>Sign to your account</p>
            <div className="sign_with">Sign In With Google</div>
            <div className="sign_with">Sign In With Facebook</div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
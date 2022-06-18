import React from 'react'

const Verify = () => {
  return (
    <div>
    <h2>Hey John!</h2>
    <p>Thank you for patiently providing all the details. We have sent a verification code to your personal email account.</p>
    <h5>Johnsmith@gmail.com</h5>
    <div className='veriftyCode'>
        <h4>Verificaiton code</h4>
        <label >
            <input type="text" placeholder='enter' className='verifyDetails' />
            <button type='submit' className='verifySubmit'>VERIFY</button>
            <h5>Not yet received </h5>
            <h5>Resend code</h5>
        </label>
    </div>
    
    </div>
  )
}

export default Verify
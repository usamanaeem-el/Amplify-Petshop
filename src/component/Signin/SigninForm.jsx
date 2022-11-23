import React, { useState } from 'react';
import './signin.css';
import { Auth } from 'aws-amplify';
const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let handelsubmit = async function (e) {
    e.preventDefault();
    await Auth.signIn(email, password);
    // console.log(res.signInUserSession.accessToken);
  };

  const getJwt = async () => {
    try {
      const userCurrentSession = await Auth.currentSession();
      const accessToken = userCurrentSession.getAccessToken();
      const JWTvalue = accessToken.getJwtToken();
      console.log({JWTvalue});
      return JWTvalue;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handelsubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className='form-group mt-3'>
            <label>Enter your email address</label>
            <input
              type='email'
              name='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-control mt-3'
            />
            <label>Enter your password</label>
            <input
              type='password'
              name='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control mt-3'
            />
            <input
              type='submit'
              className='bt mt-3 d-flex align-items-center justify-center'
            />
            <button onClick={getJwt}>Get token</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;

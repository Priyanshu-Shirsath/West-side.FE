import { getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { provider } from './firebase';


const LoginPage = () => {

  const auth=getAuth()
  const handleloginclick=()=>{
    signInWithPopup(auth,provider)
    .then(()=>console.log(object))
    .catch((err)=>console.log(err))
  }
  // Handle Google sign-in
  
  return (
    <div className="login-container mb-5 my-5">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <br />
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>

      <hr />

      <button className="google-button" onClick={handleloginclick}>
        <img 
          src="https://images.bewakoof.com/web/group-3-2x-1558356035.png" 
          alt="Google logo" 
          className="google-logo"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;

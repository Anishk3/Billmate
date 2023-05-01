import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import app from '../firebase';

import '../Styles/login.css'

function Login() {

  const auth = getAuth(app);
  const [email, setEmail] = useState("anish@gmail.com")
  const [password, setPassword] = useState("password")
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(email,password)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/home')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  }

  return (
    <div className="login">
      {/* <Navbar login={false} /> */}
      <main class="main">
        <div class="container">
          <section class="wrapper">
            <div class="heading">
              <h1 class="text text-large">Sign In</h1>
              <p class="text text-normal">
                Welcome
              </p>
            </div>
            <form name="signin" class="form">


              <div class="input-control">
                <label for="email" class="input-label" hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="input-field"
                  placeholder="Email Address"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div class="input-control">
                <label for="password" class="input-label" hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="input-field"
                  placeholder="Password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div class="input-control">
                {/* <a href="#" class="text text-links"> */}
                {/* Forgot Password */}
                {/* </a> */}
                <input
                  type="submit"
                  name="submit"
                  class="input-submit"
                  value="Sign In"
                  onClick={(e) => {
                    handleSubmit(e)
                  }}
                />
              </div>
            </form>
            <div class="striped">
              <span class="striped-line"></span>
              <span class="striped-text">Or</span>
              <span class="striped-line"></span>
            </div>
            <div style={{textAlign:"center"}}
            
                  class="text text-links">
                  Create an account

                </div>

          </section>
        </div>
      </main>
    </div>
  )
}

export default Login
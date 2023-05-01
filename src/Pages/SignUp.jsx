import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import app from '../firebase';

import '../Styles/login.css'

function SignUp() {

  const auth = getAuth(app);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(email,password)

    createUserWithEmailAndPassword(auth, email, password)
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
                <span
                  class="text text-links">
                  Create an account

                </span>
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

            <div className="button" >
              <button>
                <span>Google</span>
              </button>
            </div>

          </section>
        </div>
      </main>
    </div>
  )
}

export default SignUp
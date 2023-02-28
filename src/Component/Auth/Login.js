import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="loginContainer">
          <div className="loginInfo">
            <h4>Welcome</h4>
            <h4>To</h4>
            <div className="welcomPicLogin">
              <div className="Loginpicture"></div>
            </div>
            <div className="userInfo">

              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="text" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email..." />
                  <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control bg-dark text-white" id="exampleInputPassword1" placeholder="Enter Your Password..." />
                </div>
                <div className="logInBtn text-center">

                <button type="submit" className="btn btn-dark">Login</button>
                <p className="py-3">Not Have Account ? go for <span><Link to="/Joinus"> Signup</Link></span></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

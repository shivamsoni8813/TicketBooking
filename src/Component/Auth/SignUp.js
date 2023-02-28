import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div>
            <div className="signup">
            <div className="signupContainer">
            <div className="signupInfo">
            <h4 className='heading'>Welcome</h4>
            <h4 className='heading'>To</h4>
            <div className="welcomPic">
                <div className="picture"></div>
            </div>
            <div className="userInfo">

            <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>

                <input type="text" className="form-control text-white bg-dark"  id="exampleInputEmail1" placeholder='Enter Name' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="text" className="form-control text-white bg-dark" id="exampleInputEmail1" placeholder='enter Email' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">Password</label>
                <input type="password" className="form-control text-white bg-dark" id="exampleInputPassword1" placeholder='Enter Password'/>
            </div>
            <div className="signUpBtn text-center">

            <button type="submit" class="btn btn-dark">SignUp</button>
            <p className='py-3'>Already Have An Account ? <span><Link to="/Login">Login</Link></span></p>
            </div>
            </div>
            </div>
            </div>

            </div>
        </div>
    )
}

export default SignUp

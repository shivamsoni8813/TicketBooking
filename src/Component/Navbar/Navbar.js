import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark bg-body-tertiary navbar-expand-lg"data-bs-theme="dark">
  <div className="container-fluid">
    <div className="logo"></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link to='/Movie' className="nav-link active" >Movie</Link>
        </li>
        
        <li className="nav-item">
          <Link to='/contact' className="nav-link active">Contact</Link>
        </li>
        
        <li className="nav-item">
          <Link to='/Joinus' className="nav-link active" >JoinUs</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

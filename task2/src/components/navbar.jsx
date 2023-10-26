
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand"  to="/">MyProducts</Link>
    <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link" to="/">
            All Products
         
        </Link>
    </li>        
  
    </ul>
    </div>
        </nav>
  )
}

export default Navbar
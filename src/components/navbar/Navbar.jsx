import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <div className="w-100">
    <nav className="navbar navbar-expand-lg bg-primary text-light">
    <div className="container-fluid w-100 justify-content-start" >
        <a className="navbar-brand" href="https://github.com/anthonyharold67" rel="noreferrer noopener" target="_blank">Anthony Harold</a>
        <NavLink className="nav-link" to="/" style={{paddingRight:"15px"}}>Todo App</NavLink>
        <NavLink className="nav-link" to="/counter">Counter App</NavLink>
    </div>
  </nav>
  </div>
  )
}

export default Navbar
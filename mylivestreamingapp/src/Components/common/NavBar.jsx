import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return ( 
      
<nav className="navbar navbar-expand-lg navbar-light bg-light">

     <NavLink className="nav-item nav-link active" to='../form'>forms</NavLink>
     <NavLink to='../user-profile'>Profile Page</NavLink>
     <NavLink to="../videoplayer">Video Player</NavLink>
  
   </nav>
     
     );
}
 
export default NavBar;
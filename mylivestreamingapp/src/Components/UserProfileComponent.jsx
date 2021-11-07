import React from 'react';
import NavBar from './common/NavBar';
import './userProfileComponent.css'
function UserProfileComponent() {
    return ( 
        <div className='fill-window'>
        <NavBar />
           <h1 style={{textAlign: "center"}}>Profile Page</h1>
           </div>

     );
}
 
export default UserProfileComponent;
import React from 'react';
import agent from '../API/ApiRequestAgent';
import NavBar from './common/NavBar';
import './FullWindowComponent.css';
import { useStore } from '../Stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function UserProfileComponent() {
 const {userStore: { logout, user}} = useStore();

    return ( 
     
        <div className='fill-window' >
        <NavBar />
           <h1 style={{textAlign: "center"}}>Profile Page </h1>
              <div> 

           <button  onClick={ () =>  console.log(agent.Users.list())}> list of users</button>
           <button onClick={ () =>  console.log(agent.Users.details(3))}>Get User with id 3</button>
           
               <h3>{user.firstName}</h3>
               <h3>{user.lastName}</h3>
               <h3>{user.image}</h3>
               <h3>{user.token}</h3>
               <h3>{user.email}</h3>
               <h3>{user.userName}</h3>
          
           <button onClick={() => logout()}>Log Out</button>
           <button>4</button>
              </div>
                    
           </div>
       
     );
})
 

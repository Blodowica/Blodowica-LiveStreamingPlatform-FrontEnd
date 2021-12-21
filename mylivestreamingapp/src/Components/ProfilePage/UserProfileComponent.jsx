import React from 'react';
import agent from '../../API/ApiRequestAgent';
import NavBar from '../common/NavBar';
import '../FullWindowComponent.css'
import { useStore } from '../../Stores/store';
import { observer } from 'mobx-react-lite';
import  './UserProfileComponent.css';
import { Button, Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import EditUserProfileComponent from '../Input/EditUserProfileInfoComponent';
import UserInforComponents from '../UserInformatiionComponent/UserInforComponent';
import { Formik } from 'formik';
import { useState } from 'react';

export default observer(function UserProfileComponent( ) {
 const {userStore: { logout, user}} = useStore();
 const [isEditUserProfile, setIsUserProfile] = useState(false);


    return ( 
     <>
    <div className='fill-window background'>
        <NavBar />


   <Container fluid>  
    

      
        
   <div className='grid'>

   <div className='row'>

    <div className='col md-6 xs-12'>
    <Card className='mt-5 sidetab ' style={{ width: '35vh' }}>

<Col className='d-flex justify-content-center mb-5'>
    <img className='profileImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSya5dwz7sppH6NGJVip5KpNHbO6feSmMVJoQ&usqp=CAU' alt="profile image" />
</Col>



<Col className='mb-5 ' >
    <h3 style={{ textAlign: 'center' }}>Username : {user.userName}</h3>
    <h3 style={{ textAlign: 'center' }}>Name : {user.firstName} {user.lastName}  </h3>
    <h3 style={{ textAlign: 'center' }}>Email</h3>
    <h3 style={{ textAlign: 'center' }}>Bio</h3>
    <h3>{user.image}</h3>
    <div style={{ width: '200px' }}>
    </div>
</Col>

<Card className='ml-3 mr-3 mt-2 mb-5 '>

    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="btn mt-1" onClick={() => setIsUserProfile(true)}>Edit Profile</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1 " >Edit Stream</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1">Stream Details</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1" >Settings</Button>
    <button className="mt-3 mb-3" style={{ marginLeft: '30%', marginRight: '30%', marginBottom: '5%' }} onClick={() => logout()}>Log Out</button>
</Card>
</Card>


    </div>
     <div className="col-md-8 s-12 ">  
      <Card className='mt-5 FormInput'>
         
         {isEditUserProfile? <h1>Edit profile page</h1> : <h1>No page</h1>}
     
      </Card>
     </div>
   


     </div>

     

     

   </div>
        </Container>
        </div>
        

        </>
     );
})
 

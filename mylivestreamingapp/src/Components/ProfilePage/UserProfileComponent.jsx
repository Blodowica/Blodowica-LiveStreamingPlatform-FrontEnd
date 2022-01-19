import React from 'react';
import NavBar from '../common/NavBar';
import '../FullWindowComponent.css'
import { useStore } from '../../Stores/store';
import { observer } from 'mobx-react-lite';
import  './UserProfileComponent.css';
import { Button, Card, Col, Container} from 'react-bootstrap';
import { useState } from 'react';
import EditProfileComponent from './ProfileForms/EditProfileComponent';
import EditStreamComponent from './ProfileForms/EditStreamComponent';
import StreamDetailComponent from './ProfileForms/StreamDetailComponent';


export default observer(function UserProfileComponent( ) {
    const {userStore: { logout, user}} = useStore();
    const [isEditUserProfile, setIsUserProfile] = useState(false);
    const [isEditStream, setIsStream] = useState(false);
    const [isEditStreamDetails, setIsStreamDetails] = useState(false);
    

    function openEdituserPageForm()
    {
        if(isEditUserProfile == true)
        {
        window.location.reload();
        <EditProfileComponent />
        }
    }
   return ( 
     <>
 <div className=' background'>
        <NavBar />

<Container fluid>  
         
   <div className='grid '>

   <div className='row'>

    <div className='col md-6 xs-12'>
    <Card className='mt-5 sidetab ml-4' style={{ width: '35vh' }}>

<Col className='d-flex justify-content-center mb-5'>
    <img className='profilePic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSya5dwz7sppH6NGJVip5KpNHbO6feSmMVJoQ&usqp=CAU' alt="profile picture" />
</Col>

<Col className='mb-5 ' >
    {console.log(`userlastname: ${user.lastname}`)}
    <h3 style={{ textAlign: 'center' }}>Username : {user.userName}</h3>
    <h3 style={{ textAlign: 'center' }}>Name : {user.firstName}  {user.lastname}</h3>
  
    {/* <h3 style={{ textAlign: 'center' }}>Bio</h3> */}
    <h3>{user.image}</h3>  
    {console.log(user)} 
    <div style={{ width: '200px' }}>
    </div>
</Col>

<Card className='ml-3 mr-3 mt-2 mb-5 '>

    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="btn mt-1" onClick={() => setIsUserProfile(true)}>Edit Profile</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1 " onClick={() => setIsStream(true)}>Edit Stream</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1" onClick={() => setIsStreamDetails(true)}>Stream Details</Button>
    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1" >Settings</Button>
    <button className="mt-3 mb-3" style={{ marginLeft: '30%', marginRight: '30%', marginBottom: '5%' }} onClick={() => logout()}>Log Out</button>
</Card>
</Card>
 </div>
     <div className="col-md-8 col-xs-12 ">  
      <Card className='mt-5 FormInput'>
         
         {isEditUserProfile?  <EditProfileComponent /> : null}
   
         {isEditStream? <EditStreamComponent /> : null}

         {isEditStreamDetails? <StreamDetailComponent /> : null}
      </Card>
     </div>
     </div>  
   </div>
        </Container>
        </div>
        
        </>
     );
})
 

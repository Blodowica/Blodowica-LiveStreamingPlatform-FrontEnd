import React from "react";
import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useStore } from "../../Stores/store";
import '../ProfilePage/UserProfileComponent.css'

export default function UserInforComponents(changeToEditProfile, changeToStreamDetails, changeToEditStreams) {
    const { userStore: { logout, user } } = useStore();
    return (

        <>
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

                    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="btn mt-1" onClick={() => changeToEditProfile()}>Edit Profile</Button>
                    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1 " onClick={() => changeToEditStreams}>Edit Stream</Button>
                    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1" onClick={() => changeToStreamDetails()}>Stream Details</Button>
                    <Button style={{ borderRadius: '5px', marginLeft: '2vh', marginRight: '2vh' }} className="mt-1" >Settings</Button>
                    <button className="mt-3 mb-3" style={{ marginLeft: '30%', marginRight: '30%', marginBottom: '5%' }} onClick={() => logout()}>Log Out</button>
                </Card>


            </Card>
        </>

    )
} 
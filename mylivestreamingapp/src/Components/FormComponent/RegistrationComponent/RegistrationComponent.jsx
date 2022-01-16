
import React from 'react';

import { MdEmail, MdLock , MdPerson} from "react-icons/md";

import {Form, Card, Button, InputGroup, Col, Row,   } from 'react-bootstrap'
import {GiGamepad} from "react-icons/gi";
import { useState } from 'react';
import { useStore } from '../../../Stores/store';


export function RegistrationComponents({switchToLogin}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userStore} = useStore();
  const [streamKey, setStreamKey] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  

  function handleSubmit(firstName, lastName, userName, email, password, repeatPassword)
  {
    //make sure form not empty
    if(!firstName) return null;
    if(!lastName) return null;
    if(!userName) return null;
    if(!email) return null;
    if(!password) return null;
    if(!repeatPassword) return null;
    // 
    function validateEmail(email) {
      console.log('validate email Fuction');

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    
    function arePasswordsSame() {
      
      if (password && repeatPassword && password === repeatPassword) {
        return true
      }
      return false
    }
    //  STILL NEED TO MAKE IT SO THE STREAMKEY IS A RANDOM STRING/////////////\\\\\\\\\\\////////////////
    function  CreateStreamKey(){
     var skey =  `${userName}?key=supersecret`;
     //console.log(skey);
     return skey;
    }
    //still need to check if userName is already taken !
    if (!validateEmail) return alert("Email is in wrong format");
    if (!arePasswordsSame()) return alert("Passwords aren't same");

    userStore.registerUser(firstName, lastName, userName, email, password, CreateStreamKey() );
  }

        return (
<Card className="m-0 m-lg-5 p-0 p-sm-3 p-lg-4 pb-lg-0 pb-md-0 pb-sm-0" style={{ borderRadius: 10, backgroundColor: "#EDEFFC" }}>
        <Card.Body>
          <Card.Text className="text-center display-3 mb-3">Register</Card.Text>
          <Form>
          <Row className="mb-3   mt-5">
              <Form.Group as={Col} controlId="formGridFirstName" >
                <InputGroup>
                  <InputGroup.Text>
                    <MdPerson size="1.6em" />
                  </InputGroup.Text>

                  <Form.Control type="firstName" placeholder="Firstname" value={firstName} onChange={(firstName) => setFirstName(firstName.target.value)}/>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <InputGroup>
                  <InputGroup.Text style={{color: "white"}}>
                   
                  </InputGroup.Text>
                  <Form.Control type="LastName" placeholder=" Lastname" value={lastName} onChange={(lastName) => setLastName(lastName.target.value)}/>
                </InputGroup>
              </Form.Group>
            </Row>

          <InputGroup className="my-3">
              <InputGroup.Text>
                <GiGamepad size="1.6em" />

              </InputGroup.Text>
              <Form.Control  placeholder="Username" value={userName} maxLength={15} onChange={(userName) => setUserName(userName.target.value)}/>
         
            </InputGroup>


            <InputGroup className="my-3">
              <InputGroup.Text>
                <MdEmail size="1.5em" />

              </InputGroup.Text>
              <Form.Control  placeholder="Email" value={email} onChange={(email) => setEmail(email.target.value)}/>

            </InputGroup>

            <InputGroup className="my-3">
              <InputGroup.Text >
                <MdLock size="1.5em" />

              </InputGroup.Text>
              <Form.Control type="password"  placeholder="Password" onChange={(password) => setPassword(password.target.value)}/>

            </InputGroup>

            <InputGroup className="my-3">
              <InputGroup.Text>
                <MdLock size="1.5em" />

              </InputGroup.Text>
              <Form.Control type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(repeatPassword) => setRepeatPassword(repeatPassword.target.value)}/>
            </InputGroup>


            <Row>
              <Col className="text-center">

                <Button className="rounded" style={{ paddingLeft: "30px", paddingRight: "30px", backgroundColor: "#6933C8", color: "white" }} variant="register" size="lg" onClick={() =>handleSubmit(firstName, lastName, userName, email, password, repeatPassword) }>
                  Register
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">

                <Button className="mt-2" variant="none" size="lg" onClick={() => switchToLogin()} style={{color: 'blue', textDecoration:'underline',fontSize: '100%'}}>
                  Already have an account? Sign in
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    
);

}

export default RegistrationComponents;


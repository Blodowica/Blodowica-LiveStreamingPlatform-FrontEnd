import React, { useState } from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import { Card, Button, InputGroup, Col, Row, Form,    } from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Formik } from 'formik';
import { useStore } from '../../../Stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function LoginComponent({switchToRegistration}) {

  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userStore} = useStore();
 //  const [errorMessage, setErromessage]= useState("");

        return (
          <Card className="m-0 m-lg-5 p-0 p-sm-3 p-lg-4 pb-lg-0 pb-md-0 pb-sm-0" style={{ borderRadius: 10, backgroundColor: "#EDEFFC" }}>
          <Card.Body>
            <Card.Text className="text-center display-3 mb-3">Login</Card.Text>
           
                               
            <Form>
               {/*<h4 style={{textAlign:"center", color: 'red', backgroundColor: 'lightred' }}>{errorMessage}</h4>*/}
              <InputGroup className="my-3">
                <InputGroup.Text>
                  <MdEmail size="1.5em" />
  
                </InputGroup.Text>
                <Form.Control value={email} onChange={(email) => setEmail(email.target.value)} placeholder="Email" />
  
              </InputGroup>
  
              <InputGroup className="my-3">
                <InputGroup.Text >
                  <MdLock size="1.5em" />
  
                </InputGroup.Text>
                <Form.Control value={password} onChange={(password) => setPassword(password.target.value)}  type="password"  placeholder="Password" />
  
              </InputGroup>
  
             
  
              <Row>
                <Col className="text-center">
  
                  <Button className="rounded" style={{ paddingLeft: "30px", paddingRight: "30px", backgroundColor: "#6933C8", color: "white" }} variant="register" size="lg" onClick={() => userStore.login(email, password)}>
                    Login
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
  
                  <Button className="mt-2" variant="none" size="lg" onClick={ () => switchToRegistration()}style={{color: 'blue', textDecoration:'underline', fontSize: '100%'}  } >
                    Don't have an account yet? Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
         
          </Card.Body>
        </Card>
     
        )})

 

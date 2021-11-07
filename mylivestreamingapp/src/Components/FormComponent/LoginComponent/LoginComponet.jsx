import React from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import {Form, Card, Button, InputGroup, Col, Row,   } from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
export function LoginComponent({switchToRegistration}) {
  const navigate = useNavigate();
        return (
          <Card className="m-0 m-lg-5 p-0 p-sm-3 p-lg-4 pb-lg-0 pb-md-0 pb-sm-0" style={{ borderRadius: 10, backgroundColor: "#EDEFFC" }}>
          <Card.Body>
            <Card.Text className="text-center display-3 mb-3">Login</Card.Text>
            <Form>
  
              <InputGroup className="my-3">
                <InputGroup.Text>
                  <MdEmail size="1.5em" />
  
                </InputGroup.Text>
                <Form.Control  placeholder="Email" />
  
              </InputGroup>
  
              <InputGroup className="my-3">
                <InputGroup.Text >
                  <MdLock size="1.5em" />
  
                </InputGroup.Text>
                <Form.Control type="password"  placeholder="Enter Password" />
  
              </InputGroup>
  
             
  
              <Row>
                <Col className="text-center">
  
                  <Button className="rounded" style={{ paddingLeft: "30px", paddingRight: "30px", backgroundColor: "#6933C8", color: "white" }} variant="register" size="lg" onClick={() => navigate('../user-profile')}>
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
     
        )}

 
export default LoginComponent;
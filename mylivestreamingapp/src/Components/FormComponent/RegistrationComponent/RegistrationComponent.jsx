
import React from 'react';

import { MdEmail, MdLock , MdPerson} from "react-icons/md";

import {Form, Card, Button, InputGroup, Col, Row,   } from 'react-bootstrap'
import {GiGamepad} from "react-icons/gi";
import { useNavigate } from 'react-router';

export function RegistrationComponents({switchToLogin}) {
 const navigate = useNavigate();
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

                  <Form.Control type="firstName" placeholder="Enter First name" />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <InputGroup>
                  <InputGroup.Text style={{color: "white"}}>
                   
                  </InputGroup.Text>
                  <Form.Control type="LastName" placeholder="Enter Last name" />
                </InputGroup>
              </Form.Group>
            </Row>

          <InputGroup className="my-3">
              <InputGroup.Text>
                <GiGamepad size="1.6em" />

              </InputGroup.Text>
              <Form.Control  placeholder="Username" />
         
            </InputGroup>


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

            <InputGroup className="my-3">
              <InputGroup.Text>
                <MdLock size="1.5em" />

              </InputGroup.Text>
              <Form.Control type="password" placeholder="Enter Password" />
            </InputGroup>


            <Row>
              <Col className="text-center">

                <Button className="rounded" style={{ paddingLeft: "30px", paddingRight: "30px", backgroundColor: "#6933C8", color: "white" }} variant="register" size="lg" onClick={() => navigate('../user-profile')}>
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


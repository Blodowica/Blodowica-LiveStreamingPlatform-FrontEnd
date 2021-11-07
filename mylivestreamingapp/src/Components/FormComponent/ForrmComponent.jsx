import './FormComponent.css'
import React, {useState} from 'react';
import LoginComponent from './LoginComponent/LoginComponet';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';
import { Container, Row, Col } from 'react-bootstrap';


function FormComponent() {

  const [isRegistrationComponent , setIsRegistrationComponent] = useState(false);
   
   return ( 
      <div className="Full d-flex align-items-center ">
      <div className="Logo" />
        <Container fluid>
          <Row style={{ justifyContent: "begin"}}>
          <Col sm={12} md={8} lg={6} xl={5} xxl={4} >              
         {isRegistrationComponent ? <RegistrationComponent switchToLogin={() => setIsRegistrationComponent(false)} /> : <LoginComponent switchToRegistration={() => setIsRegistrationComponent(true)} />}
       
           </Col>
        </Row>
      </Container>
      </div>
     );
}
 
export default FormComponent;
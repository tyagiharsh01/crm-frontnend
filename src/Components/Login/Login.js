import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = ({handleOnChange,email,pass,handleSubmit,frmtype}) => {
    
    return (
        <Container className='my-4 px-5' >
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
                    <hr />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' name='email' placeholder='Enter Email' required onChange={handleOnChange} value={email}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' placeholder='Enter Password' required onChange={handleOnChange} value = {pass}/>
                        </Form.Group>
                  
                        <Button type='Submit' >Login</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                <a href="#!" onClick={()=>{frmtype('reset')}}>Forgot Password</a>
                </Col>

            </Row>
        </Container>
    );
}

export default LoginForm;

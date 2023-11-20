import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ResetPassowrd = ({handleOnChange,email,handleResetSubmit,frmtype}) => {
    
    return (
        <Container className='my-4 px-5' >
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Reset Password</h1>
                    <hr />
                    <Form onSubmit={handleResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' name='email' placeholder='Enter Email' required onChange={handleOnChange} value={email}/>
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' placeholder='Enter Password' required onChange={handleOnChange}/>
                        </Form.Group> */}
                  
                        <Button type='Submit' >Login</Button>
                    </Form>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                <a href="#!" onClick={()=>{frmtype('login')}}>Login Now</a>
                </Col>

            </Row>
        </Container>
    );
}

export default ResetPassowrd;

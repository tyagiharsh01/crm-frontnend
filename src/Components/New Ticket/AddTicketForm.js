import React from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import './add-ticket-form.style.css';

const AddTicketForm = ({ handleOnChange, handleSubmit, ticketData }) => {
    const { subject, issuedDate, description,issueType,issueStatus,priority } = ticketData

    return (
        <div className='jumbotron mt-3 text Center  bg-light box-form add-new-ticket'>
            <h1 className='text-center text-info mt-4'>Add New Ticket</h1>
            &nbsp;
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm={3} className="font-weight-bold">Subject:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type='subject' name='subject' placeholder='Enter Subject' value={subject} required onChange={handleOnChange} />
                    </Col>
                </Form.Group>
                &nbsp;
                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm={3} className="font-weight-bold">Issued Date:</Form.Label>
                    <Col sm={9}>
                        <Form.Control type='date' name='issuedDate' placeholder='Enter Issued Date' value={issuedDate} onChange={handleOnChange} />
                    </Col>
                </Form.Group>
                &nbsp;
                <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3} className="font-weight-bold">IssueType:</Form.Label>
                    <Col sm={9}>
                <Form.Select name="issueType" value={issueType} onChange={handleOnChange}>
                    <option>Issue Type</option>
                    <option value="1">KYC</option>
                    <option value="2">Registration</option>
                    <option value="3">Wallet Load</option>
                    <option value="3">Transaction Mangment</option>
                </Form.Select>
                </Col>
                </Form.Group>
                &nbsp;
                <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3} className="font-weight-bold">Issue Status:</Form.Label>
                    <Col sm={9}>
                <Form.Select name="issueStatus" value={issueStatus} onChange={handleOnChange}>
                    <option>Issue Status</option>
                    <option value="1">Open</option>
                    <option value="2">InProgress</option>
                    <option value="3">Completed</option>
                    <option value="3">Closed</option>
                </Form.Select>
                </Col>
                </Form.Group>
                &nbsp;
                <Form.Group as={Row} className="mb-2">
                <Form.Label column sm={3} className="font-weight-bold">Priority:</Form.Label>
                    <Col sm={9}>
                <Form.Select name="priority" value={priority} onChange={handleOnChange}>
                    <option>Issue Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </Form.Select>
                </Col>
                </Form.Group>
                &nbsp;
                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm={3} className="font-weight-bold">Description:</Form.Label>
                    <Col sm={9}>
                        <Form.Control as='textarea' name='description' placeholder='Enter Description' required rows='5' onChange={handleOnChange} value={description} />
                    </Col>
                </Form.Group>
                &nbsp;
                <div className='text-center'>
                    <Button type='Submit' block style={{ color: 'whitesmoke' }} variant='info'>
                        Add New Ticket
                    </Button>
                </div>
                &nbsp;
            </Form>
        </div>

    );
}

export default AddTicketForm;

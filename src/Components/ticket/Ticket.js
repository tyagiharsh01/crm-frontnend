import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Pagebreadcrumb from '../breadcrumb/Pagebreadcrumb';
import tickets from "../../assest/dummy-ticket.json";
import MassageHisotry from "../massageHistory/MassageHistory";
import UpdateTicket from '../update-ticket/UpdateTicket';

const ticket = tickets[0];
const Ticket = () => {
    const [massage, setMassage] = useState('');
    useEffect(() => {}, [massage])
    const handleOnChange = (e) => {
        setMassage(e.target.value)
    }
    const handleOnsubmit =(e)=>{
        e.preventDefault();
        alert("Submitted Successfully.")
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Pagebreadcrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject : {ticket.subject}</div>
                    <div className="date">Date : {ticket.addedAt}</div>
                    <div className="status">Status : {ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col >
                    <MassageHisotry msg={ticket.history}></MassageHisotry>
                </Col>
            </Row>
            <hr />
            <Row className='mt-4'>
                <Col >
                    <UpdateTicket msg={massage} handleOnChange={handleOnChange} handleOnsubmit={handleOnsubmit}></UpdateTicket>
                </Col>
            </Row>
        </Container>
    );
}

export default Ticket;

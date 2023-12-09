import  React,{ useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Pagebreadcrumb from '../breadcrumb/Pagebreadcrumb';
import tickets from "../../assest/dummy-ticket.json";
import MassageHisotry from "../massageHistory/MassageHistory";
import UpdateTicket from '../update-ticket/UpdateTicket';
import { useParams } from 'react-router-dom';


const Ticket = () => {
    const {tid} = useParams(); 
    const [massage, setMassage] = useState('');
    const [ticket, setTicket] = useState({});
    useEffect(  ()=>{
        if (tid) {
        const foundTicket = tickets.find((t) => t.id === parseInt(tid, 10));
        if (foundTicket) {
            setTicket(foundTicket);
        }
    }
}, [tid,massage]);
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
                    <div className="subject"><b>Subject</b> : {ticket?.subject}</div>
                    <div className="date"><b>Date</b> : {ticket?.addedAt}</div>
                    <div className="status"><b>Status</b> : {ticket?.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col >
                    <MassageHisotry msg={ticket?.history}></MassageHisotry>
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

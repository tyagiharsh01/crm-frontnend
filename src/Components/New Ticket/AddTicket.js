import React, { useState } from 'react';
import { Row,Col, Container } from "react-bootstrap";
import Pagebreadcrumb from "../breadcrumb/Pagebreadcrumb";
import AddTicketForm from './AddTicketForm';
const ticket = {
  subject:'',
    issuedDate:'',
    issueType:'',
    issueStatus:'',
    priority:'',
    description:''
}

const AddTicket = () => {
  const [TicketData, setTicketData] = useState(ticket);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(TicketData);
    setTicketData(ticket)

  }
  const handleOnChange =(e)=>{
    const{name,value} =e.target;
    setTicketData({...TicketData,[name]:value})
  }
  return (
   <Container>
    <Row>
        <Col>
        <Pagebreadcrumb page ="New Ticket"/>
        </Col>
    </Row>
    <Row>
        <Col>
        <AddTicketForm handleOnChange={handleOnChange} ticketData={TicketData} handleSubmit={handleSubmit}></AddTicketForm>
        </Col>
    </Row>
   </Container>
  );
}

export default AddTicket;

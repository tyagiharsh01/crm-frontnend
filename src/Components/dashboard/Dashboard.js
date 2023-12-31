import React from 'react';
import { Container,Row,Col,Button, } from 'react-bootstrap';
import  TicketTable  from "../ticket-tabel/TicketTable";
import Pagebreadcrumb from '../breadcrumb/Pagebreadcrumb';
import alltickets from "../../assest/dummy-ticket.json"
import{Link} from 'react-router-dom'

const Dashboard = () => {
  return (
   <Container>
    <Row>
        <Col>
           <Pagebreadcrumb page='Dashboard'></Pagebreadcrumb>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-4 mb-2'>
            <Link to='/addTicket'><Button variant='info' style={{'color':'white' ,'font':'2rem',padding:"10px,30px"}}>Add new Ticket</Button></Link>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mb-2'>
        <div>Total tickets : 50</div>
        <div>Pending ticket : 5</div>
        </Col>
    </Row>
    <Row>
        <Col className=' mb-2'>
        Recently added ticket
        </Col>
    </Row>
    
    <Row>
        <Col className='recent-ticket'>
        <TicketTable alltickets={alltickets}></TicketTable>
        </Col>
    </Row>

   </Container>
  );
}

export default Dashboard;

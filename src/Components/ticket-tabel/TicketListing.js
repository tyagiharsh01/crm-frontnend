import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Pagebreadcrumb from "../breadcrumb/Pagebreadcrumb";
import SearchForm from "../Serach Form/SearchForm";
import TicketTable from "./TicketTable";
import tickets from '../../assest/dummy-ticket.json';
import { Link } from "react-router-dom";

const TicketListing = () => {
    const [str, setStr] = useState("");
    const [dispTicket, setDispTicket] = useState(tickets);
    const handleOnChange = (e) => {
        setStr(e.target.value);
        console.log(e.target.value);
        searchStr(e.target.value);
     
    };
    useEffect(() => {
      
    }, [str,dispTicket]);
    const searchStr = (sttr) => {
        const displayTicket = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()));
        setDispTicket(displayTicket);
        console.log(displayTicket);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Pagebreadcrumb page="TicketListing"></Pagebreadcrumb>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Link to ='/addTicket'><Button variant="info">Add New Ticket</Button></Link>
                    
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} str={str}></SearchForm>
                </Col>
            </Row>
            &nbsp;
            <Row className="mt-4"  >
                <Col >
                    <TicketTable alltickets ={dispTicket}/> 
                </Col>
            </Row>
        </Container>
    );
};

export default TicketListing;

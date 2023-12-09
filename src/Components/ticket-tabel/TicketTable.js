import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TicketTable = ({ alltickets }) => {
  console.log(alltickets);
  if (!alltickets) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
      {alltickets.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Subjects</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {alltickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td><Link to={`/ticket/${row.id}`}>{row.subject}</Link></td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>No Ticket Available</div>
      )}
    </div>
  );
};

export default TicketTable;

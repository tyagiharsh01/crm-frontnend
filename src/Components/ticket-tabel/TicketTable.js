import React from 'react';
import {Table} from 'react-bootstrap'

const TicketTable = ({tickets}) => {
  return (
    <div><Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {tickets.length>0?(
            tickets.map((row)=>(            
            <tr key ={row.id}>
               <td>{row.id}</td>
               <td>{row.subject}</td>
               <td>{row.status}</td>
               <td>{row.addedAt}</td>
            </tr>
            ))
          ):"No Ticket Avaliable"
          }
        </tbody>
    </Table>
    </div>
  );
}

export default TicketTable;

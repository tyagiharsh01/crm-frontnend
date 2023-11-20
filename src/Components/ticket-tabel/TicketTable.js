import React from 'react';
import {Table} from 'react-bootstrap'

const TicketTable = () => {
  return (
    <div><Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Opened</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td>1</td>
               <td>Ticket Subject</td>
               <td>Ticket Status</td>
               <td>Yes</td>
            </tr>
        </tbody>
    </Table>
    </div>
  );
}

export default TicketTable;

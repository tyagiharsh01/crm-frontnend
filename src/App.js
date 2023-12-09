import React from 'react'; 
import './App.css';
import Entry from './Components/Entry/Entry';
import DefaultLayout from './layout/partials/DefaultLayout';
import Dashboard from "../src/Components/dashboard/Dashboard";
import AddTicket from './Components/New Ticket/AddTicket';
import TicketListing from './Components/ticket-tabel/TicketListing';
import Ticket from './Components/ticket/Ticket';

function App() {
  return (
    <div className='App'>
      <DefaultLayout>
      {/* <Dashboard></Dashboard> */}
      {/* <AddTicket></AddTicket> */}
      {/* <TicketListing></TicketListing> */}
      <Ticket></Ticket>
      </DefaultLayout>
    </div>
  );
}

export default App;

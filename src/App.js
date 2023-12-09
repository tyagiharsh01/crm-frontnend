import React from 'react';
import './App.css';
import Entry from './Components/Entry/Entry';
import DefaultLayout from './layout/partials/DefaultLayout';
import Dashboard from '../src/Components/dashboard/Dashboard';
import AddTicket from './Components/New Ticket/AddTicket';
import TicketListing from './Components/ticket-tabel/TicketListing';
import Ticket from './Components/ticket/Ticket';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PrivateRoute from './Components/private-route/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/dashboard" element={<DefaultLayout><Dashboard /></DefaultLayout>} />
          <Route path="/addTicket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />
          <Route path="/ticketsList" element={<DefaultLayout><TicketListing /></DefaultLayout>} />
          <Route path="/ticket/:tid" element={<DefaultLayout><Ticket /></DefaultLayout>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

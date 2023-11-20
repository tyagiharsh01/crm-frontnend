import React from 'react'; 
import './App.css';
import Entry from './Components/Entry/Entry';
import DefaultLayout from './layout/partials/DefaultLayout';
import Dashboard from "../src/Components/dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <DefaultLayout>
      <Dashboard></Dashboard>
      </DefaultLayout>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { fetchTickets } from './utils/api';
import DisplayButton from './components/DisplayButton/DisplayButton';
import Board from './components/Board/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTickets();
      if (data) {
        setTickets(data.tickets);
        setUsers(data.users);
      }
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <DisplayButton 
        onGroupingChange={setGrouping}
        onOrderingChange={setOrdering}
      />
      <Board 
        tickets={tickets}
        users={users}
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
}

export default App;
import React, { useState } from 'react';

import NewUserForm from "./Components/Form";
import UserCard from "./Components/UserCard";

import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <NewUserForm setUsers={ user=> setUsers([...users, user])} />
      {users.map(user => (
        <UserCard key={user.email} user={user}/>
      ))}
    </div>
  );
}

export default App;

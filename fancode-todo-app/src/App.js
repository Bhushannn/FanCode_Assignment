import React from 'react';
import UserList from './components/UserList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserList/>
    </div>
  );
}

export default App;

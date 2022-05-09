import React from 'react';
import './App.css';
import Sidebar from './container/sidebar/sidebar';
import Mainbar from './container/mainbar/mainbar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;

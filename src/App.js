import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <body className='app__body'>
        <Sidebar />
      </body>
      {/* Feed */}
      {/* Widget */}
    </div>
  );
}

export default App;

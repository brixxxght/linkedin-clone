import React from 'react';
import './App.css';
import Feed from './Feed';
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
      {/* Feed */}
        <Feed />
      </body>
      {/* Widget */}
    </div>
  );
}

export default App;

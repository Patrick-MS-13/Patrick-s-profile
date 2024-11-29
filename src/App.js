// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard';
import Cursor from './/components/Cursor';


const App = () => {
  return (
    <div className="App">
      <Cursor/>
      <ProfileCard />
    </div>
  );
};

export default App;

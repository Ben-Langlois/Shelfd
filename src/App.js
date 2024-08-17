import './App.scss';
import $, { event } from 'jquery';
import { useState, useEffect } from 'react';
import { Header, Footer } from './limbs.js';
import { Profile } from './profile.js';
import { Landing } from './landing.js';
import { Dashboard } from './dashboard.js';

/* Currently
  - Landing
    - email validation
    - strong password 
    - fix flex row mishap for infinite scroll when window is resized
  - Feed/Dashboard
    - 
*/
function App() {
  return (
    <div className="App font-sans h-screen flex flex-col">
      <Header />
      {/* <Landing /> */}
      {/* <Dashboard /> */}
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
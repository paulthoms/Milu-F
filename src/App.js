import React from 'react';
import './App.css';
import NavBar from './component/Navbar/NavBar';
import SwitchRouter from './SwitchRouter';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;

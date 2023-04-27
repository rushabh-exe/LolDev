import React, { useState } from 'react';
import Home from './components/Home';
import New from './components/New';
import Static from './components/Static';
import Dev from './components/Dev';
import Footer from './components/Footer';
import './App.css';
import Profile from './components/Profile';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'new':
        return <New />;
      case 'dev':
        return <Dev />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Static setActiveComponent={setActiveComponent} />
      <div className="content"><Profile/>{renderComponent()}</div>
      <Footer/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import GlobalStyle from '../src/globalStyles';
import Main from './components/Main'
import { dataSlide } from '../src/data/sliderData'
import Dropdown from './components/Dropdown';
import Info from './components/Info';
import { InfoData } from "./data/InfoData"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Main slides={dataSlide} />
      <Info {...InfoData} />
    </div>
  );
}

export default App;

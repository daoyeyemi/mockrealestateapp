import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import GlobalStyle from '../src/globalStyles';
import Main from './components/Main'
import { dataSlide } from '../src/data/sliderData'
import Dropdown from './components/Dropdown';

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
    </div>
  );
}

export default App;

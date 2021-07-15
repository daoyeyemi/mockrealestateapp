import './App.css';
import Navbar from "./components/Navbar"
import GlobalStyle from '../src/globalStyles';
import Main from './components/Main'
import { dataSlide } from '../src/data/sliderData'
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Main slides={dataSlide} />
    </div>
  );
}

export default App;

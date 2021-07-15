import './App.css';
import Navbar from "./components/Navbar"
import GlobalStyle from '../src/globalStyles';
import Main from './components/Main'
import { dataSlide } from '../src/data/sliderData'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Main slides={dataSlide} />
    </div>
  );
}

export default App;

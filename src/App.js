import './App.css';
import Navbar from "./components/Navbar"
import GlobalStyle from '../src/globalStyles';
import Main from './components/Main'
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      <Main/>
    </div>
  );
}

export default App;

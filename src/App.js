import logo from './logo.svg';
import './App.css';
//import Koders from "./components/Koders"

//components
//import Greet from './components/Greet'
//import Counter from './components/Counter' // no olvidar importar componentes
//import ToogleColor from'./components/ToogleColor'
//import ConditionalRendering from './components/ConditionalRendering'
import MenuActivo from './components/MenuActivo'
//import Form from "./components/Form"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MenuActivo />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import Tick from './Components/tick'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> ABC and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <a>
          <Route path="/Components/Home" component={Home} />
        </a> */}
        {/* <Home name="Sara" />
        <Home name="Cahal" /> */}
        <Home date="Edite" text="YYY" author="123" />
        <Tick />
      </header>
    </div>
  );
}


export default App;

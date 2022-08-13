import logo from './logo.svg';
import './App.css';
import TestDom from "./views/tetsDom";
import RouterIndex from "./router";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*<TestDom></TestDom>*/}
        <RouterIndex></RouterIndex>
    </div>
  );
}

export default App;

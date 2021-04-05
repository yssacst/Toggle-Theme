import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {

  const [darkTheme,setDarkTheme] = React.useState(true);
  
  const toggleTheme = ()=>{
      setDarkTheme(!darkTheme) 
  }

  return (
    <div className="App">
      <header className={`App-header ${darkTheme ? `` : `light-mode`}`}>
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
        <button onClick={toggleTheme}>Light/Dark MODE</button>
      </header>
    </div>
  );
}

export default App;

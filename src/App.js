import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './Components'

function App() {

  const getSomething =  () => {
    return(console.log("sonething"))
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          testing..................
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="button" name="Sawan" varient="raised" onClick= {getSomething}/>
      </header>
    </div>
  );

}

export default App;

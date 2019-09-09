import React, { Component } from 'react'
import './App.css';
import ListPet from './components/ListPet';


export class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>

          <ListPet />

        </header>
      </div>
    );
  }
}

export default App


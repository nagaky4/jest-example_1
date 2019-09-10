import React, { Component } from "react";
import "./App.css";
import ListPet from "./components/ListPet";
import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <ListPet />
      </div>
    );
  }
}

export default App;

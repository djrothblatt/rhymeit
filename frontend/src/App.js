import React, { Component } from 'react';
import './App.css';
import RhymeInput from './RhymeInput';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="header">Rhymeit</header>
          <RhymeInput />
        </div>
    );
  }
}

export default App;

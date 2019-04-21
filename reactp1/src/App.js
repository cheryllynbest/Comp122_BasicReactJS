import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import OddComponent from './components/OddComponent';
import EvenComponent from './components/EvenComponent';

class App extends Component {
  constructor() {
    super();
    this.counter = 0;
    this.state = {
      myState: "TBD"
    };

  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++
    this.setState({
      myState: "now: " + this.counter
    });

  }

  render() {
    const num = this.counter; 
    let stuff = "";
    const even = num % 2;

    if (even === 0) {
      stuff = <EvenComponent/ >;
    } else {
      stuff = <OddComponent/ >;
    };

    return (
      <div className="App">

        <header className="App-header">

          <MyComponent whatToSay="Whatever" onClick={this.onPushMe}/>

           {stuff} 

          <h1>I am in control of this application and my name is Cheryl {this.counter} {this.state.myState} </h1>
          
          <button onClick={this.onPushMe}>
            Push Me 1
          </button>

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
      </div>
    );
  }
}

export default App;





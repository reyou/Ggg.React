
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Projects from './Components/Projects';
import GggExamplesCore from './GggExamples/GggExamplesCore'
// import ToDos from './Components/ToDos';
// import AddProject from './Components/AddProject';
import uuid from 'uuid'
import $ from 'jquery'
class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }
  // native React lifecycle event
  componentDidMount() {
     
  }
  // native React lifecycle event
  componentWillMount() {
   
  }
  // native React lifecycle event
  render() {
    return (
      <div className="App">
        <GggExamplesCore></GggExamplesCore>
      </div>
    );
  }
}



export default App;

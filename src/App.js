import React, { Component } from 'react';
import './App.css';
import Tooltip from  './Tooltip.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="first-tooltip">
        <Tooltip tooltipContent="Hover over me!" tooltipMessage="Tooltips display short messages."/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className='App container p-2 md-2 mb-3'>
        <h1>Test Counter</h1>
        <button className='btn btn-primary mr-1 mb-2' onClick={this.increment}> + </button>
        <button className='btn btn-primary mr-1 mb-2' onClick={this.decrement}> - </button>
        <br />
        <button className='btn btn-outline-success'>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default App;
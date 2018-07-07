import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    textField: 'https://jsonplaceholder.typicode.com/posts/1',
    jsonField: '',
    checkFields: {
      thingOne: true,
      thingTwo: false,
      thingThree: true,
    }
  }

  increment = () => this.setState({ counter: this.state.counter + 1 })

  upsert = e => this.setState({ textField: e.target.value })

  getJsonApi = query => fetch(query || 'https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(value => this.setState({ jsonField: value.body }))

  changeCheckbox = event => this.setState({
    checkFields: {
      ...this.state.checkFields,
      ...{ [event.target.value]: !this.state.checkFields[event.target.value] }
    }
  })

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>{this.state.counter}</p>
        <button onClick={this.increment}>increment counter</button>
        <button onClick={() => this.getJsonApi(this.state.textField)}>fetch URL</button>
        <div />
        <input
          type="text"
          onChange={this.upsert}
          value={this.state.textField}
          style={{ width: 300, marginTop: 40 }}
        />

        <div>{this.state.jsonField}</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>Thing 1</div>
          <input
            type="checkbox"
            value="thingOne"
            checked={this.state.checkFields.thingOne}
            onChange={e => this.changeCheckbox(e)}
          />

          <div>Thing 2</div>
          <input
            type="checkbox"
            value="thingTwo"
            checked={this.state.checkFields.thingTwo}
            onChange={e => this.changeCheckbox(e)}
          />

          <div>Thing 3</div>
          <input
            type="checkbox"
            value="thingThree"
            checked={this.state.checkFields.thingThree}
            onChange={e => this.changeCheckbox(e)}
          />
        </div>
      </div>
    );
  }
}

export default App

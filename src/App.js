import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getJsonApi } from './redux/actions'

const App = props =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>

    <p>{props.counter}</p>

    <button onClick={props.inc}>increment counter</button>

    <button onClick={() => props.getJsonApi(props.text)}>fetch URL</button>
    <div />

    <input
      type="text"
      onChange={props.upsert}
      value={props.text}
      style={{ width: 300, marginTop: 40 }}
    />

    <div>{props.json}</div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>Thing 1</div>
      <input
        type="checkbox"
        value="thingOne"
        checked={props.checkFields.thingOne}
        onChange={(e) => props.changeCheckbox(e)}
      />

      <div>Thing 2</div>
      <input
        type="checkbox"
        value="thingTwo"
        checked={props.checkFields.thingTwo}
        onChange={(e) => props.changeCheckbox(e)}
      />

      <div>Thing 3</div>
      <input
        type="checkbox"
        value="thingThree"
        checked={props.checkFields.thingThree}
        onChange={(e) => props.changeCheckbox(e)}
      />
    </div>
  </div>

export default connect(
  state => ({
    counter: state.counter,
    text: state.textField,
    json: state.jsonField,
    checkFields: state.checkFields
  }),
  { // THIS FUNCTION, mapDispatchToProps, CAN BE AN OBJECT
    inc: () => ({ type: 'COUNTER_INCREMENT' }),
    upsert: event => ({ type: 'TEXTFIELD_UPSERT', value: event.target.value }),
    getJsonApi,
    changeCheckbox: event => ({ type: 'CHECKFIELDS_EDIT', value: event.target.value })
  }
)(App);

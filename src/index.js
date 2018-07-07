import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import StateApp from './StateApp';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/store'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <StateApp />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

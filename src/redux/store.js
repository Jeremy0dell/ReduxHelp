import { combineReducers } from 'redux'

import { counter, textField, jsonField, checkFields } from './reducers'

export default combineReducers({ counter, textField, jsonField, checkFields })

export function counter(state = 0, action) {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      console.log('state', state)
      return state + 1
    case 'COUNTER_DECREMENT':
      return state - 1
    default:
      return state
  }
}

export function textField(state = 'https://jsonplaceholder.typicode.com/posts/1', action) {
  switch (action.type) {
    case 'TEXTFIELD_UPSERT':
      return action.value
    default:
      return state
  }
}

export function jsonField(state = '', action) {
  switch (action.type) {
    case 'JSONFIELD_UPSERT':
      return action.value
    default:
      return state
  }
}

const defaultChecks = {
  thingOne: true,
  thingTwo: false,
  thingThree: true,
}

export function checkFields(state = defaultChecks, action) {
  switch (action.type) {
    case 'CHECKFIELDS_EDIT':
      return { ...state, ...{ [action.value]: !state[action.value] }}
    default:
      return state
  }
}

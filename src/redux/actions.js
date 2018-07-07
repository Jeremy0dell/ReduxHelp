export function getJsonApi(query) {

  query = query || 'https://jsonplaceholder.typicode.com/posts/1'
  console.log(query)

  const response = fetch(query)

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(response => response.json())
  // .then(json => console.log(json))

  // here we have access to the redux dispatcher
  // this is because redux now recognizes if we are dispatching
  // a normal (object) action, or a thunk (function) action
  return function(dispatch) {
    return response
      .then(res => res.json())
      .then(value => dispatch({ type: 'JSONFIELD_UPSERT', value: value.body })) // here is the action we're dispatching!
  }
}

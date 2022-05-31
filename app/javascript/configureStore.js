import { createStore, applyMiddleware } from 'redux'

const initialState = {
  greeting: ''
};

function rootReducer(state, action){
  console.log(action.type);
  switch(action.type) {
    case 'GET_GREETING_SUCCESS':
      return { things: action.json.things };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
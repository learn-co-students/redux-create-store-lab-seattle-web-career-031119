import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  let state

  const dispatch = action => {
    state = reducer(state, action)
    render()
  }

  const getState = () => {
    return state
  }

  const addCandy = (state, action) => {
    switch (action.type) {
      case 'ADD_CANDY':
        return [...state, candy]
      default:
        return state
    }
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
//
// let store = createStore(candyReducer)
// store.dispatch({type: '@@INIT'})

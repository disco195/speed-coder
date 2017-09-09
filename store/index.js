import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialText from '../data/gist'
import { initCharacter } from '../components/character'
import reducer from './reducers'

const exampleInitialState = {
  characters: initialText.map(initCharacter),
  currentIndex: 0,
}

export const initStore = () => {
  return createStore(
    reducer,
    exampleInitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const recordKey = key => dispatch => {
  return dispatch({
    type: 'RECORD',
    key,
  })
}

export const startTimer = startTime => dispatch => {
  return dispatch({
    type: 'START_TIMER',
    startTime,
  })
}

export const endTimer = endTime => dispatch => {
  return dispatch({
    type: 'END_TIMER',
    endTime,
  })
}

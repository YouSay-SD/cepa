import { combineReducers } from 'redux'
import { pokeReducer } from './pokeReducer'

export const rootReducer = combineReducers({
  poke: pokeReducer
})

import { combineReducers } from 'redux'
import { countryReducer } from './countryReducer'
import { generalReducer } from './generalReducer'
import { moduleReducer } from './moduleReducer'

export const rootReducer = combineReducers({
  module: moduleReducer,
  country: countryReducer,
  general: generalReducer
})

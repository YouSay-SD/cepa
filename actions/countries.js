import { types } from '../types/types'

// Set Countries
export const setCountries = (countries) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_COUNTRIES,
      payload: countries
    })
  }
}

// Set Aliquots
export const setAliquots = (countries) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_ALIQUOTS,
      payload: countries
    })
  }
}

// Set Aliquots Categories
export const setAliquotCategories = (countries) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_ALIQUOT_CATEGORIES,
      payload: countries
    })
  }
}
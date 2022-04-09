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
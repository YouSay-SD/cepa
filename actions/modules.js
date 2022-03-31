import { types } from '../types/types'

// Set Modules
export const setModules = (modules) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODULES,
      payload: modules
    })
  }
}
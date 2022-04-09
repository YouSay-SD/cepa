import { types } from '../types/types'

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

// Set Category
export const setCategory = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_CATEGORY,
      payload: idCategory
    })
  }
}

// Filter Aliquots By Category
export const filterAliquotsByCategory = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.FILTER_ALIQUOTS_BY_CATEGORY,
      payload: idCategory
    })
  }
}
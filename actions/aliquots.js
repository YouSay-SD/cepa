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

// Set Aliquots Categories Type
export const setAliquotCategoriesType = (categoriesType) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_ALIQUOT_CATEGORIES_TYPE,
      payload: categoriesType
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

// Set Category Type
export const setCategoryType = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_CATEGORY_TYPE,
      payload: idCategory
    })
  }
}

// Filter Aliquots By Category Country
export const filterAliquotsByCategory = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.FILTER_ALIQUOTS_BY_CATEGORY,
      payload: idCategory
    })
  }
}

// Filter Aliquots By Category Type
export const filterAliquotsByCategoryType = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.FILTER_ALIQUOTS_BY_CATEGORY_TYPE,
      payload: idCategory
    })
  }
}

// Filter Aliquots
export const filterAliquots = ({ idCategoryType, idCategoryCountry }) => {
  return async (dispatch) => {
    await dispatch({
      type: types.FILTER_ALIQUOTS,
      payload: { idCategoryType, idCategoryCountry }
    })
  }
}

// Reset Filter Aliquots
export const resetFilterAliquots = () => {
  return async (dispatch) => {
    await dispatch({
      type: types.RESET_FILTER_ALIQUOTS,
    })
  }
}

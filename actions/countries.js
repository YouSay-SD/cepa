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

// Set Countries Categories Tax Havens
export const setCountryCategoriesTaxHavens = (categoriesTaxHavens) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_COUNTRY_CATEGORIES_TAX_HAVENS,
      payload: categoriesTaxHavens
    })
  }
}

// Set Category Tax Haven
export const setCategoryTaxHaven = (idCategory) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_CATEGORY_TAX_HAVEN,
      payload: idCategory
    })
  }
}

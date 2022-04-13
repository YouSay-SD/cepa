import { types } from "../types/types"

const initState = {
  countries: [],
  countryCategoriesTaxHavens: [],
  selectedCategoryTaxHaven: null,
}

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }

    case types.SET_COUNTRY_CATEGORIES_TAX_HAVENS:
      return {
        ...state,
        countryCategoriesTaxHavens: action.payload
      }

    case types.SET_CATEGORY_TAX_HAVEN:
      return {
        ...state,
        selectedCategoryTaxHaven: action.payload
      }

    default:
      return state
  }
}

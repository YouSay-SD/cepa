import { types } from "../types/types"

const initState = {
  countries: [],
  aliquots: [],
  aliquotCategories: [],
}

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }

    case types.SET_ALIQUOTS:
      return {
        ...state,
        aliquots: action.payload
      }

    case types.SET_ALIQUOT_CATEGORIES:
      return {
        ...state,
        aliquotCategories: action.payload
      }
    
    default:
      return state
  }
}

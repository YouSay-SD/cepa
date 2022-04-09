import { types } from "../types/types"

const initState = {
  countries: [],
}

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
      
    default:
      return state
  }
}

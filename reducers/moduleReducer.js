import { types } from "../types/types"

const initState = {
  modules: [],
}

export const moduleReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_MODULES:
      return {
        ...state,
        modules: action.payload
      }

    default:
      return state
  }
}

import { types } from "../types/types"

const initState = {
  aliquots: [],
  aliquotCategories: [],
  filteredAliquots: [],
  selectedCategory: null
}

export const aliquotReducer = (state = initState, action) => {
  switch (action.type) {
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

    case types.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }
    
    case types.FILTER_ALIQUOTS_BY_CATEGORY: 
      return {
        ...state,
        filteredAliquots: state.aliquots?.filter(({ attributes }) => state.selectedCategory !== 0 ? attributes?.category?.data?.id === state.selectedCategory : attributes?.category.data === null)
      }

    default:
      return state
  }
}

import { types } from "../types/types"

const initState = {
  aliquots: [],
  aliquotCategories: [],
  aliquotCategoriesType: [],
  // aliquotCategoriesTaxHavens: [],
  filteredAliquots: [],
  filteredAliquotsByCategoryType: [],
  selectedCategory: null,
  selectedCategoryType: null,
  // selectedCategoryTaxHaven: null,
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

    case types.SET_ALIQUOT_CATEGORIES_TYPE:
      return {
        ...state,
        aliquotCategoriesType: action.payload
      }

    // case types.SET_ALIQUOT_CATEGORIES_TAX_HAVENS:
    //   return {
    //     ...state,
    //     aliquotCategoriesTaxHavens: action.payload
    //   }

    case types.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }

    case types.SET_CATEGORY_TYPE:
      return {
        ...state,
        selectedCategoryType: action.payload
      }

    // case types.SET_CATEGORY_TAX_HAVEN:
    //   return {
    //     ...state,
    //     selectedCategoryTaxHaven: action.payload
    //   }

    case types.FILTER_ALIQUOTS:

      if(action.payload.idCategoryCountry) {
        const filteredByCategoryType = state.aliquots.filter(({ attributes }) => attributes?.categoryType?.data?.id === action.payload.idCategoryType)
        const filteredByCategoryCountry = filteredByCategoryType.filter(({ attributes }) => attributes?.category?.data?.id === action.payload.idCategoryCountry)

        return {
          ...state,
          filteredAliquots: filteredByCategoryCountry
        }
      } else {
        const filteredByCategoryType = state.aliquots.filter(({ attributes }) => attributes?.categoryType?.data?.id === action.payload.idCategoryType)

        return {
          ...state,
          filteredAliquots: filteredByCategoryType
        }
      }

    case types.RESET_FILTER_ALIQUOTS: 
      return {
        ...state,
        filteredAliquots: state.aliquots
      }

    case types.FILTER_ALIQUOTS_BY_CATEGORY: 
      return {
        ...state,
        filteredAliquots: state.filteredAliquotsByCategoryType?.filter(({ attributes }) => state.selectedCategory !== 0 ? attributes?.category?.data?.id === state.selectedCategory : attributes?.category.data === null)
      }

    case types.FILTER_ALIQUOTS_BY_CATEGORY_TYPE: 
      return {
        ...state,
        filteredAliquotsByCategoryType: state.aliquots?.filter(({ attributes }) => state.selectedCategoryType !== 0 ? attributes?.categoryType?.data?.id === state.selectedCategoryType : attributes?.categoryType.data === null)
      }

    default:
      return state
  }
}

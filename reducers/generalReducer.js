import { types } from "../types/types"

const initState = {
  switchDirection: 'left',

  isOpenModalGraphic: false,
  modalGraphicId: 1,

  isOpenModalBullet: false,
  modalBulletId: 1,

  isOpenModalProposal: false,
  modalProposalId: 1,

  currentPage: 0,
}

export const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SWITCH_DIRECTION:
      return {
        ...state,
        switchDirection: action.payload
      }

    case types.SET_OPEN_MODAL_GRAPHIC:
      return {
        ...state,
        isOpenModalGraphic: !state.isOpenModalGraphic
      }

    case types.SET_MODAL_GRAPHIC:
      return {
        ...state,
        modalGraphicId: action.payload
      }
    
    case types.SET_OPEN_MODAL_BULLET:
      return {
        ...state,
        isOpenModalBullet: !state.isOpenModalBullet
      }

    case types.SET_MODAL_BULLET:
      return {
        ...state,
        modalBulletId: action.payload
      }

    case types.SET_OPEN_MODAL_PROPOSAL:
      return {
        ...state,
        isOpenModalProposal: !state.isOpenModalProposal
      }

    case types.SET_MODAL_PROPOSAL:
      return {
        ...state,
        modalProposalId: action.payload
      }

    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default:
      return state
  }
}

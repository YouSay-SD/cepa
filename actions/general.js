import { types } from '../types/types'

// Set Switch Direction
export const setSwitchDirection = (direction) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_SWITCH_DIRECTION,
      payload: direction
    })
  }
}

// Set Open Modal Big Graphic
export const setOpenModalBigGraphic = (isOpen) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_BIG_GRAPHIC,
      payload: isOpen
    })
  }
}

// Set Modal Big Graphic
export const setModalBigGraphic = (graphic) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_BIG_GRAPHIC,
      payload: graphic
    })
  }
}

// Set Open Modal Graphic
export const setOpenModalGraphic = () => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_GRAPHIC,
    })
  }
}

// Set Modal Graphic
export const setModalGraphic = (id) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_GRAPHIC,
      payload: id
    })
  }
}

// Set Open Modal Bullet
export const setOpenModalBullet = () => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_BULLET,
    })
  }
}

// Set Modal Bullet
export const setModalBullet = (id) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_BULLET,
      payload: id
    })
  }
}

// Set Open Modal Bullet
export const setOpenModalProposal = () => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_PROPOSAL,
    })
  }
}

// Set Modal Proposal
export const setModalProposal = (id) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_PROPOSAL,
      payload: id
    })
  }
}

// Set Open Modal Trivia
export const setOpenModalTrivia = (isOpen) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_TRIVIA,
      payload: isOpen
    })
  }
}

// Set Current Page
export const setCurrentPage = (currentPage) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_CURRENT_PAGE,
      payload: currentPage
    })
  }
}

// Set Section Link
export const setSectionLink = (sectionLink) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_SECTION_LINK,
      payload: sectionLink
    })
  }
}

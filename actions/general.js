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

// Set Open Modal Graphic
export const setOpenModalGraphic = () => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_OPEN_MODAL_GRAPHIC,
    })
  }
}

// Set Modal Graphic
export const setModalGraphic = (content) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_GRAPHIC,
      payload: content
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
export const setModalBullet = (content) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_MODAL_BULLET,
      payload: content
    })
  }
}

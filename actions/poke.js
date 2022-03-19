import { types } from '../types/types'

// Set Pokemons
export const setPokemons = (pokemons) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_POKEMONS,
      payload: pokemons
    })
  }
}

// Set Single Pokemon
export const setSinglePokemon = (pokemon) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_SINGLE_POKEMON,
      payload: pokemon
    })
  }
}

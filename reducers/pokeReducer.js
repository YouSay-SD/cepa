import { types } from "../types/types"

const initState = {
  pokemons: [],
  singlePokemon: null
}

export const pokeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }

    case types.SET_SINGLE_POKEMON:
      return {
        ...state,
        singlePokemon: action.payload
      }

    default:
      return state
  }
}

import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemon: (state /*, action */) => {
      state.isLoading = true;
    },

    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonsSlice.actions;

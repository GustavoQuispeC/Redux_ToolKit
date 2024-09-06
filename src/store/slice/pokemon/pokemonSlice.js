import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons:[],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemon: (state /*, action */) => {
      state.isLoading = true;
    },

    setPokemos: (state, action) => {
        console.log(action);
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment } = pokemonSlice.actions;
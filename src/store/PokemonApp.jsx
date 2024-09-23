import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons=[], page } = useSelector((state) => state.pokemons);
  

  useEffect(() => {
    dispatch(getPokemons( ));
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon App</h1>
      <span>Loading: {isLoading ? `True` : `False` }</span>
      <hr />
      <ul>
      {pokemons.map(({name}) => (
        <li key={name}>{name}</li>
      ))}
      </ul>
     
      <button 
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};

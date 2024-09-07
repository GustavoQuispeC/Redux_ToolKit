import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./slices/pokemon";


export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <ul>
        <li>Pikachu</li>
        <li>Bulbasaur</li>
        <li>Charmander</li>
        <li>Squirtle</li>
      </ul>
    </>
  );
};

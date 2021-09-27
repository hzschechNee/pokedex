import { combineReducers } from "redux";
import PokemonsReducer from './AllPokemonsReducer';
import PokemonListReducer from './PokemonListReducer';

const allReducers = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonsReducer
});

export default allReducers;
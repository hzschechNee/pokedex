import axios from "axios";

//get pokemon list
export const getPokemonList = (url) => async dispatch => {
    try {
        dispatch({
            type: "FETCH_POKEMONS_BEGIN"
        });

        const response = await axios.get(url);

        dispatch({
            type: "FETCH_POKEMONS_SUCCESS",
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: "FETCH_POKEMONS_FAILURE"
        })
    }   
};

//get all pokemon
export const getPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: "POKEMONS_BEGIN"
        });

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: "POKEMONS_SUCCESS",
            payload: response.data,
            pokemonName: pokemon
        })
    } catch (error) {
        dispatch({
            type: "POKEMONS_FAILURE"
        })
    }
}


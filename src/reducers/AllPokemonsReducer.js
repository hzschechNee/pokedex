const initialState = {
    data: [],
    loading: false,
    errorMessage: ""
  }
  
  const PokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "POKEMONS_BEGIN":
            return{
                ...state,
                loading: true,
                errorMessage: ""
            };
        case "POKEMONS_SUCCESS":
            return{
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                },
                errorMessage: ""
            };
        
        case "POKEMONS_FAILURE":
            return{
                ...state,
                loading: false,
                errorMessage: "No Pokemon Found"
            };
        default: return state
    }
  };
  
  export default PokemonsReducer;
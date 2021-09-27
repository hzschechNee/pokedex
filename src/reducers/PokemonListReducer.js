const initialState = {
    data: [],
    loading: false,
    errorMessage: "",
    count: 0,
    nextUrl: null
  }
  
  const PokemonListReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_POKEMONS_BEGIN":
            return{
                ...state,
                loading: true,
                errorMessage: ""
            };
        
        case "FETCH_POKEMONS_SUCCESS":
            return{
                ...state,
                loading: false,
                data: state.data.concat(action.payload.results),
                count: action.payload.count,
                errorMessage: "",
                nextUrl: action.payload.next
            };
  
        case "FETCH_POKEMONS_FAILURE":
            return{
                ...state,
                loading: false,
                errorMessage: "unable to get pokemon",
            };
  
        default: 
            return state;
    }
  };
  
  export default PokemonListReducer;
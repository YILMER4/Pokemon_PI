import {GET_POKEMONS} from "./actions";


const inicialState={ //estado global
    pokemos:[],
};


const rootReducer = (state= inicialState, action)=>{

    switch (action.type) {
        case GET_POKEMONS:
            return{...state, pokemons:action.payload};
    
        default:
            return{...state};
    }

}

export default rootReducer;
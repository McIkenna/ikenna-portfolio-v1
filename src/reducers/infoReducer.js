import {DELETE_INFO, GET_INFO, GET_STOREDINFO, GET_INFO_JSON} from "../actions/types"


const initialState = {
    infos: [],
    info: {},  
    
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_INFO:
        return {
            ...state,
            infos: action.payload
        };

        case GET_INFO_JSON:
        return {
            ...state,
            infos: action.payload
        };

        case GET_STOREDINFO:
            return {
                ...state,
                info: action.payload
            }

        case DELETE_INFO:
            return{
                ...state,
                infos: state.infos.filter(info => info.id !== action.payload )
            }
     
      
        default:
            return state;
    };

        
}
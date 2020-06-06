import { FETCH_ASSETS,  } from '../actions/types';

const initialState = {
  assets: [],
  isLoading: true
}


export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_ASSETS:
      return {
        ...state,
        assets: action.payload,
        isLoading: false
      }
  
    default:
     return state ;
  }
}
import { FETCH_ASSETS,  } from './assets.type';

const initialState = {
  assets: [],
  isLoading: true
}


const assetsReducer = (state = initialState, action) => {
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

export default assetsReducer;
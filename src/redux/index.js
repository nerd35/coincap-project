import { combineReducers } from 'redux';
import assetsReducer from '../redux/assets/assetsReducer';
import marketReducer from '../redux/market/marketReducer';

export default combineReducers({
  assets: assetsReducer,
  markets: marketReducer
});

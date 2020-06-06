import { combineReducers } from 'redux';
import assetsReducer from './assetsReducer';
import marketReducer from './marketReducer';

export default combineReducers({
  assets: assetsReducer,
  markets: marketReducer
});

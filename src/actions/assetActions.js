import { FETCH_ASSETS, IS_LOADING,  } from './types';
import axios from 'axios';
const url = 'https://api.coincap.io/v2';

export const fetchAssetsSuccess = (payload) => ({
  type: FETCH_ASSETS,
  payload
});


export const isLoading = () => ({
  type: IS_LOADING
});

export const fetchAssets  = () => (dispatch) => {
  dispatch(isLoading());
  axios.get(
      `${url}/assets`
    ).then((response) => {
      dispatch(fetchAssetsSuccess(response.data));
    }).catch((error) => {
      console.log(error);
    });
};



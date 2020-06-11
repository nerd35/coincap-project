import { FETCH_MARKET,  } from './market.types';
import axios from 'axios';

const url = 'https://api.coincap.io/v2';

export const fetchMarketHistorySuccess = (payload) => ({
  type: FETCH_MARKET,
  payload
});


export const fetchMarketHistory = marketId => (dispatch) => {
  axios.get(`${url}/assets/${marketId}/history?interval=d1`
  ).then((response) => {
    console.log('resp', response)
    const dayHistory = response.data && response.data.data.reverse().splice(0, 7);
    const dayHistoryReverse = dayHistory.reverse();
    dispatch(fetchMarketHistorySuccess(dayHistoryReverse));
  }).catch((error) => {
  });
};

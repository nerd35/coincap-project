import { FETCH_MARKET } from './market.types';

const initialState = {
	marketHistory: [{
		id: [],
		priceUsd: null,
		date: null
	}],
	 loading: true
 };

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_MARKET:
			return {
				...state,
				marketHistory: action.payload,
				loading: false
			};

		default:
			return state;
	}
}

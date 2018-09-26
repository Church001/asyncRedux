import * as actionTypes from '../actions/actionTypes';

initialState = {
	order: [],
	loading: false
};

const reducer = ( state = initialState, action ) => {
	switch(action.type){
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return {

			};
		case actionTypes.PURCHASE_BURGER_FIALURE:
			return {

			};
		default:
			return state;
	}
};

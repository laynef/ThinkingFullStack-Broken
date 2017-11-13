import { actionTypes } from '../store/actionTypes';


const INITIAL_STATE = {
	mobileSidebar: false,
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {

		case actionTypes.TOGGLE_MOBILE_SIDEBAR:
			return {
				...state,
				mobileSidebar: !state.mobileSidebar,
			};

	}

	return state;

}

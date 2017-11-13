import { actionTypes } from '../store/actionTypes';


export function toggleMobileMenu() {
	return function(dispatch) {
		dispatch({
			type: actionTypes.TOGGLE_MOBILE_SIDEBAR,
		});
	};
}

import { actions } from "./actions";

const Reducer = (state, action) => {
    switch (action.type) {
        case actions.Login_start:
            return {
                user: null,
                isFeching: true,
                error: false
            };
        case actions.Login_success:
            return {
                user: action.payload,
                isFeching: false,
                error: false
            };
        case actions.Login_failur:
            return {
                user: null,
                isFeching: false,
                error: true
            };
        case actions.Log_out:
            return {
                user: null,
                isFeching: false,
                error: false
            };

        default:
            return state
    }
}
export default Reducer
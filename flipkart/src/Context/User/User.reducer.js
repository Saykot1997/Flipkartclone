import Useractions from "./User.actions";

const Reducer = (state, action) => {

    switch (action.type) {

        case Useractions.Feaching:
            return {
                user: null
            };

        case Useractions.Feaching_success:
            return {
                user: action.payload
            };

        case Useractions.Feaching_failur:
            return {
                user: null
            };

        default:
            return state
    }
}
export default Reducer
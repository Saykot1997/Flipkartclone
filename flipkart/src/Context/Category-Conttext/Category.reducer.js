import Categoryactions from "./Category.actions";

const Reducer = (state, action) => {
    switch (action.type) {
        case Categoryactions.Feaching:
            return {
                categories: state.categories
            };
        case Categoryactions.Feaching_success:
            return {
                categories: action.payload
            };
        case Categoryactions.Feaching_failur:
            return {
                categories: state.categories
            };

        default:
            return state
    }
}
export default Reducer
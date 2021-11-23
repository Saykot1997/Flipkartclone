import Pageactions from "./Page.actions";

const Reducer = (state, action) => {
    switch (action.type) {
        case Pageactions.Feaching:
            return {
                pages: state.pages
            };
        case Pageactions.Feaching_success:
            return {
                pages: action.payload
            };
        case Pageactions.Feaching_failur:
            return {
                pages: state.pages
            };

        default:
            return state
    }
}
export default Reducer
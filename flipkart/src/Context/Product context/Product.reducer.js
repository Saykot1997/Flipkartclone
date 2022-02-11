import Productactions from "./Product.actions";

const Reducer = (state, action) => {

    switch (action.type) {

        case Productactions.Feaching_start:
            return {
                products: state.products
            };

        case Productactions.Feaching_success:
            return {
                products: action.payload
            };

        case Productactions.Feaching_failur:
            return {
                products: state.products
            };

        default:
            return state
    }
}
export default Reducer
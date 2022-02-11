import Ordersactions from "./Orders.actions";

const Reducer = (state, action) => {

    switch (action.type) {

        case Ordersactions.Feaching_start:
            return {
                Orders: null
            };

        case Ordersactions.Feaching_success:
            return {
                Orders: action.payload
            };

        case Ordersactions.Feaching_failur:
            return {
                Orders: null
            };

        default:
            return state
    }
}
export default Reducer
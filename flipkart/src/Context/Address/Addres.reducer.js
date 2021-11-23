import Addressactions from "./Address.actions";


const Reducer = (state, action) => {

    switch (action.type) {

        case Addressactions.Feaching:
            return {
                Address: null
            };

        case Addressactions.Feaching_success:

            return {

                Address: action.payload
            }

        case Addressactions.Feaching_failur:

            return {
                Address: null
            };

        default:
            return state
    }
}


export default Reducer
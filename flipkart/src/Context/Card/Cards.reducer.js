import Cardsactions from "./Cards.actions";


const Reducer = (state, action) => {

    switch (action.type) {

        case Cardsactions.Feaching:
            return {
                Cards: [...state.Cards]
            };

        case Cardsactions.Feaching_success:

            const curantItem = state.Cards.find((item) => item._id === action.payload._id);

            if (curantItem) {

                const Cards = state.Cards.map((item) => item === curantItem ? action.payload : item);

                return {

                    Cards: Cards
                }

            } else {

                return {
                    Cards: [
                        ...state.Cards,
                        action.payload
                    ]
                };
            }

        case Cardsactions.Feaching_failur:

            const curantCard = state.Cards.find((item) => item._id === action.payload._id);
            const newCards = state.Cards.filter((item) => (item._id !== curantCard._id));
            return {
                Cards: [...newCards]
            };


        case Cardsactions.Reset:
            return {
                Cards: action.payload
            };

        default:
            return state
    }
}


export default Reducer
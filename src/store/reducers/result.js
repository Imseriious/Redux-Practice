import * as actionType from '../actions'; //We create an Object "actionType"

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId) //Inmutable way of deleting from an array
           return {
                ...state,
                results : updatedArray
            }
    }
    return state;
};

export default reducer;
import * as actionType from '../actions/actionTypes'; //We create an Object "actionType"
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.id) //Inmutable way of deleting from an array
           return updateObject(state, {results : updatedArray})
    }
    return state;
};

export default reducer;
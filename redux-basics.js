const redux = require('redux');
const createstore = redux.createStore; //Creates Store

const initialState = {
    counter: 0
}

//Reducer 
//There is just 1 reducer even if we combine multiple ones 
//Only thing that may update the state
const rootReducer = (state = initialState, action) => { //We asign the initial state
    if (action.type === 'INC_COUNTER') {
        return {
            ...state, //Always copy the state don't mutate
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

//Store // Needs to be initialized with a Reducer
const store = createstore(rootReducer);
console.log(store.getState());

//Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

console.log(store.getState());
//Subscription
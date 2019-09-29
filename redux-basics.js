const redux = require('redux');
const createstore = redux.createStore; //Creates Store

const initialState = { 
    counter: 0
}

//Reducer 
//There is just 1 reducer even if we combine multiple ones 
//Only thing that may update the state
const rootReducer = (state = initialState, action) => { //We asign the initial state
    return state;
};

//Store // Needs to be initialized with a Reducer
const store = createstore(rootReducer); 
console.log(store.getState());

//Displatching Action

//Subscription
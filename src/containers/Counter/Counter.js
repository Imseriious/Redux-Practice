import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    render() {
        return ( //We use the props comming from redux (ctr)
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li onClick={() => this.props.onDeleteResult(strResult.id)} //We pas the id to the action
                            key={strResult.id}>
                            {strResult.value}
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { //We get props from the global state (reducer.js in this case)
    return {
        ctr: state.counter, //ctr is the name we asign the props state.counter is the gloal state name
        storeResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionType.ADD, value: 10 }),
        onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 10 }),
        onStoreResult: () => dispatch({type: actionType.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id}) //We get the ID from the element

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //We connect our component to the global state
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';



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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
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
        ctr: state.counter.counter, //ctr is the name we asign the props state.counter is the gloal state name
        storeResults: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (val) => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)) //We get the ID from the element

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //We connect our component to the global state
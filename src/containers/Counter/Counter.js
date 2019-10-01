import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

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
                        <li onClick={this.props.onDeleteResult}
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
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 10 }),
        onStoreResult: () => dispatch({type: "STORE_RESULT"}),
        onDeleteResult: () => dispatch({type: "DELETE_RESULT"})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //We connect our component to the global state
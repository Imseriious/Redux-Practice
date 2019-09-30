import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return ( //We use the props comming from redux (ctr)
            <div> 
                <CounterOutput value={this.props.ctr} /> 
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> 
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
            </div>
        );
    }
}

const mapStateToProps = state => { //We get props from the global state (reducer.js in this case)
    return {
        ctr: state.counter //ctr is the name we asign the props state.counter is the gloal state name
    };
};

const mapDispatchToProps = dispacth => {
    return {
        onIncrementCounter: () => dispacth({
            type: "INCREMENT"
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //We connect our component to the global state
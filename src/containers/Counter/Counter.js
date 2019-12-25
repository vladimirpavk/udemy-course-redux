import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as ACTIONS from '../../store/actions/actions';

class Counter extends Component {
    constructor(props){
        super(props);
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.props.incCounter();
                break;
            case 'dec':
                this.props.decCounter();
                break;
            case 'add':
                this.props.addCounter(value);
                break;
            case 'sub':
                this.props.subCounter(value);
                break;
            default:
                break;
        }
    }

    onResultValueClicked = (id)=>{
        this.props.removeResult(id);
    }

    render () {
        return (
            <div>               
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
                <hr />
                <button onClick={()=>this.props.addResult(this.props.counterValue)}>Add result</button>
                <ul>
                    {this.props.resultsValue.map((result)=>{
                        return (
                            <li key={result.id} onClick={()=>this.onResultValueClicked(result.id)}>{result.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        counterValue: state.counter.counter,
        resultsValue: state.results.results
    }
}    

const mapDispatchToProps = (dispatch)=>{
    return{
            incCounter: ()=>dispatch(ACTIONS.incCounter()),
            decCounter: ()=>dispatch(ACTIONS.decCounter()),            
            addCounter: (increment)=>dispatch(ACTIONS.asyncAddCounter(increment)),
            subCounter: (decrement)=>dispatch(ACTIONS.subCounter(decrement)),
            addResult: (id)=>dispatch(ACTIONS.addResult(id)),
            removeResult: (id)=>dispatch(ACTIONS.removeResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
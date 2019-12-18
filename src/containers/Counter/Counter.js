import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    constructor(props){
        super(props);

        console.dir(props);
    }

   /*  componentDidUpdate(prevProps, prevState){
        console.log(this.props.counterValue);
    } */

    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                //this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                this.props.incCounter();
                break;
            case 'dec':
                //this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                this.props.decCounter();
                break;
            case 'add':
                //this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                this.props.addCounter(value);
                break;
            case 'sub':
                //this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                this.props.subCounter(value);
                break;
        }
    }

    onResultValueClicked = (id)=>{
        this.props.removeResult(id);
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
                <hr />
                <button onClick={this.props.addResult}>Add result</button>
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
        counterValue: state.counter,
        resultsValue: state.results
    }
}    

const mapDispatchToProps = (dispatch)=>{
    return{
            incCounter: ()=>{
                dispatch({
                    type: 'INC_COUNTER'
                })
            },
            decCounter: ()=>{
                dispatch({
                    type: 'DEC_COUNTER'
                })
            },
            addCounter: (increment)=>{
                dispatch(
                    { 
                        type: 'ADD_COUNTER', 
                        payload: increment
                    }
                )        
            },
            subCounter: (decrement)=>{
                dispatch({
                    type: 'SUB_COUNTER',
                    payload: decrement
                })
            },
            addResult: ()=>dispatch({type:'ADD_RESULT'}),
            removeResult: (id)=>dispatch({type:'REMOVE_RESULT', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
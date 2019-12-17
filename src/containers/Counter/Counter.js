import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    constructor(props){
        super(props);
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
                this.props.addCounter(1);
                break;
            case 'dec':
                //this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                this.props.subCounter(1);
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

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        counterValue: state.counter
    }
}    

const mapDispatchToProps = (dispatch)=>{
    return{
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
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
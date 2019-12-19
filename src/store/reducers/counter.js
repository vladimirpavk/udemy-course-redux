import * as ACTIONS from '../actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action)=>{
    //console.log(action);
    switch(action.type){
        case(ACTIONS.INC_COUNTER) :{
            return{
                ...state,
                counter:state.counter+1
            };
        }
        case(ACTIONS.DEC_COUNTER):{
            return{
                ...state,
                counter:state.counter-1
            }
        }
        case(ACTIONS.ADD_COUNTER):{
            return{
                ...state,
                counter: state.counter+action.payload
            };
        }
        case(ACTIONS.SUB_COUNTER):{
            return{
                ...state,
                counter: state.counter-action.payload
            };
        }      
        default:{
            return state
        }
    }
}

export default reducer;
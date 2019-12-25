import * as ACTIONS from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action)=>{ 
    switch(action.type){       
        case(ACTIONS.ADD_RESULT):{
            return{
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: action.payload
                })
            }
        }
        case(ACTIONS.REMOVE_RESULT):{
            const filteredArray = state.results.filter(
                (result)=>result.id !== action.payload
            );
            return{
                ...state,
                results: filteredArray
            }
        }
        default:{
            return state
        }
    }
}

export default reducer;
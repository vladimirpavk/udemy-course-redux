const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action)=>{
    console.log(action);
    //return state;
    switch(action.type){
        case('INC_COUNTER') :{
            return{
                ...state,
                counter:state.counter+1
            };
        }
        case('DEC_COUNTER'):{
            return{
                ...state,
                counter:state.counter-1
            }
        }
        case('ADD_COUNTER'):{
            return{
                ...state,
                counter: state.counter+action.payload
            };
        }
        case('SUB_COUNTER'):{
            return{
                ...state,
                counter: state.counter-action.payload
            };
        }
        case('ADD_RESULT'):{
            return{
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: state.counter
                })
            }
        }
        case('REMOVE_RESULT'):{
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
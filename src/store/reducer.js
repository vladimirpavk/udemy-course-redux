const initialState = {
    counter: 0
};

const reducer = (state = initialState, action)=>{
    console.log(action);
    //return state;
    switch(action.type){ 
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
        default:{
            return state
        }
    }
}

export default reducer;
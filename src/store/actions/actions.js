export const INC_COUNTER = 'INCREMENT COUNTER';
export const DEC_COUNTER = 'DECREMENT COUNTER';
export const ADD_COUNTER = 'ADD COUNTER';
export const SUB_COUNTER = 'SUBSTRACT COUNTER';
export const ADD_RESULT = 'ADD RESULT';
export const REMOVE_RESULT = 'REMOVE RESULT';

export const incCounter = ()=>{
    return{
        type: INC_COUNTER
    }
}

export const decCounter = ()=>{
    return{
        type: DEC_COUNTER
    }
}

export const addCounter = (payload)=>{
    return{
        type: ADD_COUNTER,
        payload: payload
    }
}

export const subCounter = (payload)=>{
    return{
        type: SUB_COUNTER,
        payload: payload
    }
}

export const addResult = (payload)=>{
    return {
        type: ADD_RESULT,
        payload: payload
    }
}

export const removeResult = (payload)=>{
    return {
        type: REMOVE_RESULT,
        payload: payload
    }
}

export const asyncAddCounter = (payload)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(addResult(payload))
        }, 2000);
    }
}
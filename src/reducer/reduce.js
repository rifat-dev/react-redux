import {increment_value,decrement_value} from '../type'

const initalstate={
    count:0
}

function countReducer(state=initalstate,action){
    switch(action.type){
        case increment_value:
            return{
                ...state,
                count:state.count+1
            }
        case decrement_value:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state

    }
}

export default countReducer
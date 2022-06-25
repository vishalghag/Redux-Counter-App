import actionType from './../action/action.json'

const initalState = {
    counter:0
}

export const counterReducer = (state = initalState,action) =>{
    switch(action.type){
        case actionType.INCREMENT:
            return {counter: state.counter + 1}
        case actionType.DECREMENT:
            return {counter:state.counter - 1}
        case actionType.ADD_COUNTER:
            return {counter:state.counter + action.playload}
        case "RESET":
            return {counter:0}
        default:
            return state
    }
}
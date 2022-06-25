import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addCountAction, decrementAction, incrementAction, resetAction } from "../../action/counter";

const Counter = ()=>{

    // const [counter,setCounter] = useState(0);

    const counter = useSelector(state=> state.counterReducer.counter);
    const dispatch = useDispatch()

    const [num,setNum] = useState(0)

    const increHandler = ()=>{
        dispatch(incrementAction)
    }
    
    const decreHandler = ()=>{
        dispatch(decrementAction)
    }
    const resetHandler = ()=>{
        dispatch(resetAction)
    }

    const inputHandler = (event)=>{
        setNum ( event.target.value ? parseInt(event.target.value): "")
    }

    const addCount = ()=>{
        dispatch({...addCountAction, playload:num})
        setNum(0)
    }

    return(
        <>
            <h3>Counter App</h3>
            <div>
                Count :- {counter}
            </div>
            <div>
                <button onClick={increHandler}>Incerement Counter</button>
            </div>
            <div>
                <button onClick={decreHandler}>Decerement Counter</button>
            </div>
            <div>
                <button onClick={resetHandler}>Reset Counter</button>
            </div>
            <div>
                <input type="number" value={num} onChange={inputHandler}/>
                <button onClick={addCount}>Add Count</button>
            </div>
        </>
    )
}

export default Counter;
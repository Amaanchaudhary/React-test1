import { useReducer } from "react";

const Question2 = () => {

    const InitialState = { count: 0 }

    // console.log(InitialState.count)

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return ({...state, count: state.count + 1 });
            case "Decrement":
                return ({...state, count: state.count - 1})
            case "Reset":
                return ({...state, count: 0})
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, InitialState);

    const Increment = () => {
        dispatch({ type: "Increment" });
    }

    const Decrement = () => {
        dispatch({ type: "Decrement" });
    }
    const Reset = () => {
        dispatch({ type: "Reset" });
    }
    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Question2;
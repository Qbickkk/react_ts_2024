import {useReducer, useState} from "react";
interface IState {
    value: number;
}

function reducer(state:IState, action:{type: string; payload:number}) {


    return null
}

const App = () => {

    const [counter,dispatch ] = useReducer<any>(reducer, {value: 0});

    const increment = () => {
        dispatch({type: 'increment', payload: 1})
    };

    const decrement = () => {
    };

    const reset = () => {
    };

    return (
        <div>
            <h2>{counter.value}</h2>
             <button onClick={increment}>increment</button>
             <button onClick={decrement}>decrement</button>
             <button onClick={reset}>reset</button>
        </div>
    );
};

export default App;
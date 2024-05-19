import {useReducer} from "react";

interface CounterState {
    count: number
}

interface CounterAction {
    type: string,
    payload: number
}

const callBackReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'INCREMENT':
            state.count += action.payload;
            return {...state};
        case 'DECREMENT':
            state.count -= action.payload;
            return {...state};
        case 'RESET':
            state.count = action.payload;
            return {...state};
    }
    return {count: -100500}
}


const App = () => {

    const [state, dispatch] = useReducer(callBackReducer, {count: 0})

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type: 'INCREMENT', payload: 100})}>inc</button>
            <button onClick={()=>dispatch({type: 'DECREMENT', payload: 200})}>dec</button>
            <button onClick={()=>dispatch({type: 'RESET', payload: 1337})}>res</button>
        </div>
    );
};

export default App;
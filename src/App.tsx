import {useState} from "react";
interface IState {
    value: number;
}


const App = () => {

    const [counter, setCounter] = useState<IState>({value: 0});


    const increment = () => {
            setCounter(prev => ({value: prev.value + 1}));
    };

    const decrement = () => {
            setCounter(prev => ({value: prev.value - 1}));
    };

    const reset = () => {
            setCounter({value: 0});
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
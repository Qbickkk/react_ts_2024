import {useEffect, useState} from "react";


const App = () => {

    const [counter, setCounter] = useState<number>(0)
    let [x, setX] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1)
        }, 2000)
    }, [x]);

    console.log('.')

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setX((x) = x + 1)}>click</button>
        </div>
    );
};

export default App;
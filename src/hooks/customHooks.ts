import {useRef, useState} from "react";

// 1. useToggle - custom React hook that allows a component to toggle a value between true and false



// export const useToggle = (defaultValue: boolean) => {
//     const [value, setValue] = useState<boolean>(defaultValue);
//
//     function toggleValue(valueState: boolean) {
//         setValue(previousValue => !valueState);
//     }
//
//     return [value, toggleValue];
// }
//
// const [value, toggleValue] = useToggle(true);
//
// toggleValue(false)

// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

const usePrevious = <T,>(value: T):T => {
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T | undefined>();

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
    }
    return previousRef.current;
}
usePrevious<number>(100)

// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

const useStorage = () => {

}
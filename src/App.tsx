import {useFetch} from "./custom-hooks/useFetch";

const App = () => {

    const data = useFetch<{id:number, title: string}[]>('/posts',[]);


    return (
        <div>
            {data.map((item) => (<div>{item.id} {item.title}</div>))}
        </div>
    );
};

export default App;
import {UsersComponent} from "./components/UsersComponent";
import {useState} from "react";


const App = () => {

        const [userr, setUserr] = useState<{name: string, age:number, status: boolean}>()

    const lift = (user:any) => {
        setUserr(user)
    }

    return (
        <>
            <UsersComponent liftProp={lift}/>
            <hr/>
            {userr?.name}
            <hr/>
        </>
    );
};

export default App;
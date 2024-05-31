import {Users} from "../components/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
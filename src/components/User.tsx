import {FC} from "react";
import {IUser} from "../interfaces/userInterface";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    user: IUser
}


const User:FC<IProps> = ({user}) => {

    const {id,email,name} = user;
    const navigate = useNavigate();

    return (
        <div>
            <li>id: {id}</li>
            <li>email: {email}</li>
            <Link to={user.id.toString()} state={{user: user}}><li>name: {name}</li></Link>
            <button onClick={()=>navigate(id.toString(), {state:{foo:'bar'}})}>show posts</button>
            <br/>
        </div>
    );
};

export {User};
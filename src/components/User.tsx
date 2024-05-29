import {FC} from "react";
import {IUser} from "../interfaces/userInterface";

interface IProps {
    user: IUser
}


const User:FC<IProps> = ({user}) => {

    const {id,email,name} = user;

    return (
        <div>
            <li>id: {id}</li>
            <li>email: {email}</li>
            <li>name: {name}</li>
            <br/>
        </div>
    );
};

export {User};
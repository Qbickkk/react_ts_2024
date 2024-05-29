import {FC} from "react";
import {IUser} from "../../interfaces/userInterface";

interface IProps {
    user: IUser
}


const User: FC<IProps> = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
            <hr/>
        </>
    );
};

export {User};
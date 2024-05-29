import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/userInterface";
import {usersService} from "../../services/usersService";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <>
            {users.map(user => <li key={user.id}>{user.id} - {user.username} - {user.email}</li>)}
        </>
    );
};

export {Users};
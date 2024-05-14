import {FC, useEffect, useState} from "react";

import {IUser} from "../../../interfaces";
import {userService} from "../../../services";
import {User} from "../User/User";

interface IProps {
    lift: (userId:number)=> void
}

const Users:FC<IProps> = ({lift}) => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data.users))
    },[])

    return (
        <>
            {users.map((user) => <User key={user.id} user={user} lift={lift}/>)}
        </>
    );
};

export {Users};
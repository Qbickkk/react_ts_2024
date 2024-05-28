import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../models/userModel";
import {userService} from "../services/userService";
import {useAppLocation} from "../hooks/useAppLocation";

const SingleContactPage = () => {

    const {id} = useParams();

    const {state: {contact: item}} = useAppLocation<{contact: IUser}>();

    const [contact, setContact] = useState<IUser | null>(null);

    useEffect(() => {
        if (item) {
            setContact(item);
        } else if(id){
           userService.getById(id).then(({data}) => setContact(data))
        }else {
            throw new Error('ggggggg2')
        }
    }, [id]);


    return (
        <div>
            {contact && <>{contact.name} - {contact.username}</>}
        </div>
    );
};

export {SingleContactPage};
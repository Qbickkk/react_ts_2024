import {FC, useEffect, useState} from "react";
import {ContactComponent} from "./ContactComponent";
import {userService} from "../services/userService";
import {IUser} from "../models/userModel";

const ContactsComponent:FC = () => {

    const [contacts, setContacts] = useState<IUser[]>([])

    useEffect(() => {
       userService.getAll().then(value=>setContacts(value.data))
    }, []);


    return (
        <div>
            {
                contacts.map((contact,index) => (<ContactComponent contact={contact} key={index} />))
            }
        </div>
    );
};

export {ContactsComponent};
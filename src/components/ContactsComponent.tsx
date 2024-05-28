import {useEffect, useState} from "react";
import {ContactComponent} from "./ContactComponent";

const ContactsComponent = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) => res.json()).then(value => {
            setContacts(value)
        })
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
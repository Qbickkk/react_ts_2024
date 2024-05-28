import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const SingleContactPage = () => {

    const {id} = useParams();

    const {state: {contact: item}} = useLocation();

    const [contact, setContact] = useState<any>({})

    useEffect(() => {
        if (item) {
            setContact(item);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(value => value.json())
                .then(value => {
                    setContact(value)
                })
        }
    }, [id]);


    return (
        <div>
            {contact.name} - {contact.username}
        </div>
    );
};

export {SingleContactPage};
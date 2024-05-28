import {FC} from "react";
import {NavLink, useNavigate} from "react-router-dom";

const ContactComponent:FC<any> = ({contact}) => {

    const {email,id} = contact;

    const navigate = useNavigate();

    const handlerNavigate = () => {
        navigate(`${id}`,{state:{contact}})
    };

    return (
        <div>
            <NavLink to={`${id}`} state={contact}>{email}</NavLink>
            <button onClick={handlerNavigate}>Click</button>
        </div>
    );
};

export {ContactComponent};
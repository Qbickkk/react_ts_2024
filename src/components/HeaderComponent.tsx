import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <h1>
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="about">About</NavLink>
            <br/>
            <NavLink to="contacts">Contacts</NavLink>
            <hr/>
        </h1>
    );
};

export {HeaderComponent};
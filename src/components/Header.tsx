import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
            <hr/>
        </div>
    );
};

export {Header};
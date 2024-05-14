import {FC} from "react";

import {IPost} from "../../../interfaces";

interface IProps {
    post: IPost
}

const Post:FC<IProps> = ({post}) => {


    const {userId,id,title,reactions,body} = post;


    return (
        <div style={{border:'1px solid'}}>
            <h2>Title: {title}</h2>
            <h3>UserId: {userId}</h3>
            <h4>PostId: {id}</h4>
            <p>{body}</p>
            <h5>Reactions: {reactions}</h5>
        </div>
    );
};

export {Post};
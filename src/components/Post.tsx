import {FC} from "react";
import {IPost} from "../interfaces/postInterface";

interface IProps {
    post: IPost;
}

const Post:FC<IProps> = ({post}) => {

    const {userId,body,title,id} = post;

    return (
        <div>
            <div>userId :{userId}</div>
            <div>body :{body}</div>
            <div>title :{title}</div>
            <div>id :{id}</div>
            <br/>
        </div>
    );
};

export {Post};
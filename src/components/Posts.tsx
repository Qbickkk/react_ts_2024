import {FC} from "react";
import {IPost} from "../interfaces/postInterface";
import {Post} from "./Post";

interface IProps {
    posts: IPost[];
}

const Posts:FC<IProps> = ({posts}) => {

    return (
        <>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    );
};

export {Posts};
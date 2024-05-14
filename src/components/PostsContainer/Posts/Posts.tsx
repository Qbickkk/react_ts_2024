import {FC} from "react";

import {IPost} from "../../../interfaces";
import {Post} from "../Post/Post";

interface IProps {
    posts: IPost[]
}

const Posts:FC<IProps> = ({posts}) => {
    return (
        <>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    );
};

export {Posts};
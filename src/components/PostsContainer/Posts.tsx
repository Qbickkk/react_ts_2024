import {useEffect, useState} from "react";
import {IPost} from "../../interfaces/postInterface";
import {postsService} from "../../services/postsService";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <>
            {posts.map(post => <li key={post.id}>{post.id} - {post.title}</li>)}
        </>
    );
};

export {Posts};
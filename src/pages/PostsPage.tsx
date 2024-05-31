import {Posts} from "../components/Posts";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPost} from "../interfaces/postInterface";
import {postService} from "../services/postService";

const PostsPage = () => {

    const {id} = useParams();
    const location = useLocation();
    console.log(location)
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if (id) {
            postService.getPostsByUserId(id).then(({data}) => setPosts(data));
        }
    }, [id]);

    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostsPage};
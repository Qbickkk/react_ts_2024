import React, {FC, useEffect, useState} from "react";
import {PostModel} from "../../models/postModel";
import {PostComponent} from "../post/PostComponent";
import {requests} from "../../services/jsonplaceholder.api.service";

type IPropsType = {lift?: (postId:number)=>void}

const PostsComponent:FC<IPropsType> = ({lift}) => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        requests.posts.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <>
            {posts.map(post=><PostComponent key={post.id} post={post} lift={lift}/>)}
        </>
    );
};

export {PostsComponent};



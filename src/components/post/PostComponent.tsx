import {PostModel} from "../../models/postModel";
import React, {FC} from "react";

interface IProps {
    post: PostModel
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (postId: number) => void };


const PostComponent: FC<IPropsType> = ({post, lift}) => {

    const onClickHandler = () => {
        if (lift) {
            lift(post.id);
        }

    };

    return (
        <>
            {post.id} {post.title}
            <div>
                <button onClick={onClickHandler}>Show comments to post</button>
            </div>
            <hr/>
        </>
    );
};

export {PostComponent};
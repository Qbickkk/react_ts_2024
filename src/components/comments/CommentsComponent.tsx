import {CommentModel} from "../../models/commentModel";
import React, {FC} from "react";

interface IProps {
    comments : CommentModel[]
}


const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <li>{comment.body}</li>)}
        </div>
    );
};

export {CommentsComponent};
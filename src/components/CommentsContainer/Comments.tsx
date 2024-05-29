import {useEffect, useState} from "react";
import {IComment} from "../../interfaces/commentInterface";
import {commentsService} from "../../services/commentsService";

const Comments = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments(data))
    }, []);

    return (
        <>
            {comments.map(comment=><li key={comment.id}><b>{comment.email}</b> - {comment.body}</li>)}
        </>
    );
};

export {Comments};
import {PostsComponent} from "./components/posts/PostsComponent";
import {CommentsComponent} from "./components/comments/CommentsComponent";
import './App.css'
import {requests} from "./services/jsonplaceholder.api.service";
import {useState} from "react";
import {CommentModel} from "./models/commentModel";

const App = () => {

    const [comments, setComments] = useState<CommentModel[]>([])
    
    const lift = (postId: number) => {
        requests.comments.getAllCommentsOfSinglePost(postId).then(({data}) => setComments(data))
    }

    return (
        <div className={'app'}>
            <div className={'posts'}><PostsComponent lift={lift}/></div>
            <div className={'comments'}><CommentsComponent comments={comments}/></div>
        </div>
    );
};

export default App;
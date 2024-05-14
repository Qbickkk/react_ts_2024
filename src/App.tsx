import {useState} from "react";

import "./App.css"
import {Users} from "./components";
import {postService} from "./services";
import {IPost} from "./interfaces";
import {Posts} from "./components/PostsContainer/Posts/Posts";

const App = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    const lift = (userId: number) => {
        postService.getByUserId(userId).then(({data}) => setPosts(data.posts))
    }

    console.log(posts)


    return (
        <div style={{display: "flex"}}>
            <div>
                <Users lift={lift}/>
            </div>
            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export default App;
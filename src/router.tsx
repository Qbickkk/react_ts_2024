import {createBrowserRouter} from "react-router-dom";
import {CommentsPage, PostsPage, UsersPage} from "./pages";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:true,element:<UsersPage/>},
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>},
            {path:'comments',element:<CommentsPage/>}
        ]
    }
]);

export {
    router
}
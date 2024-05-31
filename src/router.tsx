import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {HomePage} from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':id',element:<PostsPage/>}
                ]
            },
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
]);

export {
    router
}
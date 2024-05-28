import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ErrorLayout} from "./layouts/ErrorLayout";
import {ContactsPage} from "./pages/ContactsPage";
import {AboutPage} from "./pages/AboutPage";
import {SingleContactPage} from "./pages/SingleContactPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement:<ErrorLayout/>, children: [
            {index:true, element:<h5>default element</h5>},
            {path:'contacts', element: <ContactsPage/>},
            {path:'contacts/:id', element:<SingleContactPage/>},
            {path: 'about',element:<AboutPage/>}
        ]
    }
]);

export {
    router as default
}
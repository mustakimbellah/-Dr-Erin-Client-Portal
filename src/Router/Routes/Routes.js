import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home';
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
]);

export default router;
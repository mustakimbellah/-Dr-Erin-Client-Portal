import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home';
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PostView from "../../Pages/Review/PostView";
import Review from "../../Pages/Review/Review";
import UpdateView from "../../Pages/Review/UpdateView";
import ViewDb from "../../Pages/ViewDb/ViewDb";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/sericedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://doctor-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/services',
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/review/add',
                element: <Review></Review>
            },
            {
                path: '/postview',
                element: <PostView></PostView>,
                loader: () => fetch('http://localhost:5000/users')

            },
            {
                path: '/update/:id',
                element: <UpdateView></UpdateView>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            {
                path: '/viewdb',
                element: <ViewDb></ViewDb>
            }
        ]
    }
]);

export default router;
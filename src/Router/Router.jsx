import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddTeams from '../pages/AddTeams/AddTeams';
import AddProducts from "../pages/AddProducts/AddProducts";
import AddServices from "../pages/AddServices/AddServices";
import Details from "../pages/Home/Services/Details/Details";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/Cart/CheckOut";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from './../PrivateRoute/PrivateRoute';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:3000/servicesData"),
                element: <Home />
            },
            {
                path: "/addProducts",
                element: <PrivateRoute><AddProducts /></PrivateRoute>
            },
            {
                path: "/addTeams",
                element: <PrivateRoute><AddTeams /></PrivateRoute>
            },
            {
                path: "/addServices",
                element: <PrivateRoute><AddServices /></PrivateRoute>
            },
            {
                path: "/checkOut/:id",
                loader:({params})=>fetch(`http://localhost:3000/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/servicesData/${params.id}`),
                element: <Details />
            },
            {
                path:"/cart",
                element:<PrivateRoute><Cart/></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    }
])
export default Router
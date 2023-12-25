import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Home from "./views/Home/home.js";
import Signup from "./views/Signup/signup.js";
import Login from "./views/Login/login.js";
import Buy from './views/Buy/Buy.js';
import MyOrders from './views/MyOrders/MyOrders.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Home />
  },
  {
    "path": "/signup",
    "element": <Signup />
  },
  {
    "path": "/login",
    "element": <Login />
  },
  {
    "path": "/buy/:id",
    "element": <Buy />
  },
  {
    "path": "/my-orders",
    element: <MyOrders />
  }
])

root.render(<RouterProvider router={router} />);
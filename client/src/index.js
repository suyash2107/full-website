import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./views/Home/Home.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  "path": "/",
  "element":<Home/>
}]);

root.render(<RouterProvider router={router}/> );


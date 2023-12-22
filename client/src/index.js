import ReactDOM from 'react-dom/client';
import {createbBrowserRouter, RouterProvider} from 'react-router-dom';
import home from "./views/Home/home"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createbBrowserRouter([{
  "path": "/",
  "element":<home/>
}])

root.render(<RouterProvider router={router}/> );


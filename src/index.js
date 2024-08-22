//links our app component to our html file
import ReactDOM from 'react-dom/client'
import App from './App'; 
import './index.css'
import Work from "./sections/work/Work";
import About from "./sections/about/About";

import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";
  
const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
    },

    {
        path: "/projects",
        element: <Work/>,
    },

    {
        path: "/about",
        element: <About/>,
    }
]);
//selecting id root from index.html to be rendered
const root = ReactDOM.createRoot(document.querySelector('#root'));
//render app component
root.render(
    <RouterProvider router={router}/>
);
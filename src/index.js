//links our app component to our html file
import ReactDOM from 'react-dom/client'
import App from './App'; 
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
    },
]);
//selecting id root from index.html to be rendered
const root = ReactDOM.createRoot(document.querySelector('#root'));
//render app component
root.render(
    <RouterProvider router={router}/>
);
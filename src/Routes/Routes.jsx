import { createBrowserRouter } from "react-router";
import CategoryNews from "../Components/Home/CategoryNews";
import Root from "../Layouts/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Error from "../Pages/Error";
import Home from "../Pages/Home";

 export const router = createBrowserRouter ([
  {
    path: '/',
    Component: Root,
     errorElement: <Error/>,
     children: [
       {
         path: '/',
         Component:Home,
       },
       {
         path: '/about',
         Component:About,
       },
       {
         path: '/career',
         Component:Career,
       },
       {
         path: '/category/:id',
         Component:CategoryNews
       }
     ]
  }
])
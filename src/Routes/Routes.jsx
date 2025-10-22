import { createBrowserRouter } from 'react-router';
import AuthLayout from '../Layouts/AuthLayout';
import Root from '../Layouts/Root';
import About from '../Pages/About';
import Career from '../Pages/Career';
import CategoriesNews from '../Pages/CategoriesNews';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: 'true',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'category/:id',
        element: <CategoriesNews />,
        loader: () => fetch('/news.json'),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

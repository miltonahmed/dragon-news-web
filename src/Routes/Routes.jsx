import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import About from '../Pages/About';
import Career from '../Pages/Career';
import CategoriesNews from '../Pages/CategoriesNews';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        index: true,
        path: '/home',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/career',
        Component: Career,
      },
      {
        path: '/category/:id',
        Component: CategoriesNews,
        loader:()=> fetch('/news.json'),
      },
    ],
  },
]);

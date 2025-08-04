import { createBrowserRouter } from 'react-router';
import RootPage from './layout/page/RootPage';
import NothingFoundPage from './errors/NotFoundPage';
import ErrorScreen from './errors/ErrorScreen';
import Root from './features/commons/Root';
import HomePage from './features/home/home-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: ':exibitionLabel', element: <Root />, children: [
        // { path: '/', element: <></> },
      ] }
    ]
  },
  {
    path: '*',
    element: <NothingFoundPage />,
    errorElement: <ErrorScreen>paso algo</ErrorScreen>,
  },
]);

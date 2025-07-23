import { createBrowserRouter } from 'react-router';
import RootPage from './layout/page/RootPage';
import NothingFoundPage from './errors/NotFoundPage';
import ErrorScreen from './errors/ErrorScreen';
import HomePage from './home/home-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/', element: <HomePage /> }
    ]
  },
  {
    path: '*',
    element: <NothingFoundPage />,
    errorElement: <ErrorScreen>paso algo</ErrorScreen>,
  },
]);

// function lazyComponent<T>(module: Promise<ModuleWithDefault<T>>) {
//   return async () => {
//     const { default: Component } = await module;
//     return { Component };
//   };
// }

// interface ModuleWithDefault<T> {
//   default: T;
// }

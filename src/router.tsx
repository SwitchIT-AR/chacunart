import { createBrowserRouter } from 'react-router';
import RootPage from './layout/page/RootPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />
    // lazy: lazyComponent(import('./home/home-route')),
  },
]);

function lazyComponent<T>(module: Promise<ModuleWithDefault<T>>) {
  return async () => {
    const { default: Component } = await module;
    return { Component };
  };
}

interface ModuleWithDefault<T> {
  default: T;
}

import { createBrowserRouter } from 'react-router';
import RootPage from './layout/page/RootPage';
import NothingFoundPage from './errors/NotFoundPage';
import ErrorScreen from './errors/ErrorScreen';
import Root from './features/commons/Root';
import HomePage from './features/home/home-route';
import ArtRoot from './features/artSections/page/ArtRoot';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: ':exibitionLabel', element: <Root />, children: [
        { path: '', element: <ArtRoot /> },
        { path: ':exibitionSubLabel', element: <></> },
      ] }
    ],
    errorElement: (
      <ErrorScreen useRouterError>
        Se ha producido un error inesperado, intente nuevamente más tarde. Si el
        problema persiste, contacte al servicio técnico
      </ErrorScreen>
    ),
  },
  {
    path: '*',
    element: <NothingFoundPage />,
    errorElement: <ErrorScreen>paso algo</ErrorScreen>,
  },
]);

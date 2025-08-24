import { createBrowserRouter } from 'react-router';
import RootPage from './layout/page/RootPage';
import NothingFoundPage from './errors/NotFoundPage';
import ErrorScreen from './errors/ErrorScreen';
import Root from './features/commons/Root';
import HomePage from './features/home/HomePage';
import ArtRoot from './features/artSections/page/ArtRoot';
import ArtSubSectionPage from './features/artSections/page/ArtSubSectionPage';
import ContactPage from './features/contact/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: ':exibitionLabel', element: <Root />, children: [
        { path: '', element: <ArtRoot /> },
        { path: ':exibitionSubLabel', element: <ArtSubSectionPage /> },
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

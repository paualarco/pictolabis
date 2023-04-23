import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const PagePlayground = Loadable(lazy(() => import('../pages/PagePlayground')));
export const PageChart = Loadable(lazy(() => import('../pages/PageChart')));
export const PageHistory = Loadable(lazy(() => import('../pages/PageHistory')));
export const PageContact = Loadable(lazy(() => import('../pages/PageContact')));

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

import { Navigate, useRoutes } from 'react-router-dom';
import PageChart from 'src/pages/PageChart';
// layouts
import PageIntro from 'src/pages/PageIntro';
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import { Page404, PagePlayground, PageHistory, PageContact } from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'login',
          element: <DashboardLayout />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'intro', element: <PageIntro /> },
        { path: 'playground', element: <PagePlayground /> },
        { path: 'chart', element: <PageChart /> },
        { path: 'history', element: <PageHistory /> },
        { path: 'contact', element: <PageContact /> },
        // {
        //   path: 'user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/four" replace />, index: true },
        //     { path: 'four', element: <PageFour /> },
        //     { path: 'five', element: <PageFive /> },
        //     { path: 'six', element: <PageSix /> },
        //   ],
        // },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

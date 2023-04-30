// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  welcome: path(ROOTS_DASHBOARD, '/intro'),
  playground: path(ROOTS_DASHBOARD, '/playground'),
  chart: path(ROOTS_DASHBOARD, '/chart'),
  history: path(ROOTS_DASHBOARD, '/history'),
  contact: path(ROOTS_DASHBOARD, '/contact'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    four: path(ROOTS_DASHBOARD, '/user/four'),
    five: path(ROOTS_DASHBOARD, '/user/five'),
    six: path(ROOTS_DASHBOARD, '/user/six'),
  },
};

import HomeRoute from './HomeRoute';
import CountriesRoute from './CoutriesRoute';

const routes = [
  {
    path: '/',
    element: <HomeRoute />,
  },
  {
    path: '/countries',
    element: <CountriesRoute />,
  },
];

export default routes;

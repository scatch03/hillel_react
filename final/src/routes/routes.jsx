import ErrorRoute from './ErrorRoute'
import Layout from '../pages/Layout';
import Loader from '../components/Loader/Loader';
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import AuthGuard from '../HOC/AuthGuard';


const LoginRouteLazy = lazy(() => import('./LoginRoute'))
const FlightsRouteLazy = lazy(() => import('./FlightsRoute'))
const FlightRouteLazy  = lazy(() => import('./FlightRoute'))

const routes = [
  {
    path: '/',
    element: <AuthGuard><Layout /></AuthGuard>,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Loader/>}><FlightsRouteLazy /></Suspense> ,
        HydrateFallback: Loader
      },
      {
        path: '/flight/:id',
        element: <Suspense fallback={<Loader/>}><FlightRouteLazy /></Suspense>,
        HydrateFallback: Loader
      }
    ]
  },
  {
    path: '/login',
    element: <Suspense fallback={<Loader/>}><LoginRouteLazy /></Suspense>,
  }
];

const router = createBrowserRouter(routes)

export default router
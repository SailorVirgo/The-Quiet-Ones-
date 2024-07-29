import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdoptPet from './pages/AdoptPet';
import PetCare from './pages/PetCare';
import PetStatus from './pages/PetStatus';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},    
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/adoptpet', element: <AdoptPet /> },
      { path: '/petcare', element: <PetCare /> },
      { path: '/petstatus', element: <PetStatus /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

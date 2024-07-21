import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StudentProvider } from './contexts/store.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Error from './pages/Error.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Cursos from './pages/Cursos.jsx';
import Teachers from './pages/Teachers.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: 'register',
    element: <Signup />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/cursos',
        element: <Cursos />
      },
      {
        path: '/dashboard/profesores',
        element: <Teachers />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentProvider>
      <RouterProvider router={router} />
    </StudentProvider>
  </React.StrictMode>,
)

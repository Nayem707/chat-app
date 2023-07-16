import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import Chat from './page/Chat';
import Login from './page/Login';
import Sginup from './page/Sginup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sginup',
        element: <Sginup />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import About from './page/About';
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
        path: '/about',
        element: <About />,
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

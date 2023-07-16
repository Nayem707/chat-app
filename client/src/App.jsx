import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
// import Chat from './page/Chat';
// import Home from './page/Home';
// import Login from './page/Login';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

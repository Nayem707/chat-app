import { Outlet } from 'react-router-dom';
import NavStyle from './Components/NavStyle';

function App() {
  return (
    <div>
      <NavStyle />
      <Outlet />
    </div>
  );
}

export default App;

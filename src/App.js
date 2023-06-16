import { NavLink } from 'react-router-dom';
import AppRouting from './Routing/Routing';
function App() {
  return (

    <>
      <div>
        <ul>
          <li><NavLink to={'/users'}>Users</NavLink></li>
          <li><NavLink to={'/badge'}>Badge</NavLink></li>
        </ul>
      </div>

      <AppRouting />
    </>
  );
}

export default App;

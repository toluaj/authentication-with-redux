import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout'
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Logout />
      <ChangeColor />
    </div>
  );
}

export default App;

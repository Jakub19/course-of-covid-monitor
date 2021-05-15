import './App.css';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import UserPageSettings from './pages/UserPageSettings';


function App() {
  return (
    <div className="App">
      <Homepage/>
      <UserPage/>
      <UserPageSettings/>
    </div>
  );
}

export default App;

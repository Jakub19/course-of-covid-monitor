import './App.css';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import Register from './pages/Register';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import useFindUser from './services/useFindUser'
import { UserContext } from './services/UserContext';
import PrivateRoute from './services/PrivateRoute';

function App() {
  const { user, setUser, isLoading } = useFindUser();
  const API_URL = "http://localhost:8080"
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, isLoading, API_URL }}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <PrivateRoute path="/profile" component={UserPage} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

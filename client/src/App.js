import './App.css';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import Register from './pages/Register';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">  
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/profile" component={UserPage} />
          <Route path="/register" component={Register} />
        </Switch>
    </div>
  );
}

export default App;

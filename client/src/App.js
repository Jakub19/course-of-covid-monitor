import './App.css';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">  
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/profile" component={UserPage} />
        </Switch>
    </div>
  );
}

export default App;

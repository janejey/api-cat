import './App.css';
import CatImages from './components/CatImages/CatImages';
import SideBar from './components/SideBar/sideBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <SideBar />
        <CatImages />
        <Switch>
          <Route path="/category/{id}">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
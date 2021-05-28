import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header"
import DogDetail from './containers/DogDetail';
import DogList from './containers/DogList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={DogList} />
          <Route path="/dog/:dogId" exact component={DogDetail} />
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

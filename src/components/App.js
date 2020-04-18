import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

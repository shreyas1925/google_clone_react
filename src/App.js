import React from "react";
import "./App.css";
import Home from "./Components/Home";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/searchpage">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

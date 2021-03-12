import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            This is the home page
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

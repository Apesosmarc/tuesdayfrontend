import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register, PrivateRoute, Dashboard, Home } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

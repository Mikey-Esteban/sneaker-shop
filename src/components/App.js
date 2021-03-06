import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/app.css";

import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

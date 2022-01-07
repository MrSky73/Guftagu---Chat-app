import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../Contexts/AuthContext";

import Chats from "./Chats.js";
import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
            <div>hello</div>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

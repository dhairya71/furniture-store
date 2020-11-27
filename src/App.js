import React from "react";
import "./App.css";
import Navbar from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardGrid from "./CardGrid";
import LeftDrawer from "./Drawer";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Contact />
        <Switch>
          <Route path="/products" exact component={CardGrid} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

      {/* <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;

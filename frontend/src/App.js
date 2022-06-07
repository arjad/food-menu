import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from "./pages/BODY/Body";
import Admin from "./pages/admin/Admin";
import React from "react";

let mycontext = React.createContext();

function App() 
{
   return (<>
    <Router>
      <Switch>

        <Route path="/food" exact component={Body}/>
        <Route path="/food/admin" exact component={Admin}/>
    
      </Switch>
    </Router>

  </>);
}

export default App;
export {mycontext};


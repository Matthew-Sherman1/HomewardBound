import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'
import './App.css';
import { Dashboard } from './views/Dashboard';
function App() {
  
  const [loggedInUser, setLoggedInUser] = useState(
Cookies.get("user_id")  ? jwt_decode(Cookies.get("user_id")) : "no user"
  )
  return (
    <BrowserRouter >
    <Switch>
      <Route exact path='/'>
        <Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      </Route>
      <Route exact path='/hello'>
        <Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

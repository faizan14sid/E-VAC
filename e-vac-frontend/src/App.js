import "./App.css";
import React, { createContext, useReducer, useContext } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Help from "./Components/Help";
import OtpBox from "./Components/OtpBox";
import Nearby from "./Components/Hospitals/Nearby";
import Login from "./Components/Login";
import Search from "./Components/Hospitals/Search";
import Emergency from "./Components/Emergency";
import Payment from "./Components/Payment";
import Logout from './Components/Logout'
import Error from './Components/Error'
import { initialState, reducer } from "./reducer/UseReducer";


export const UserContext = createContext();

export const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  if (state) {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/nearby">
          <Nearby />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route exact path="/user/ambulance">
          <Emergency />
        </Route>
        <Route path="/user/ambulance/booked">
          <Payment />
        </Route>
        <Route path="/login/sendotp">
          <OtpBox />
        </Route>
      </Switch>
    )
  }
  else {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/nearby">
          <Nearby />
        </Route>
        <Route exact path="/user/ambulance">
          <Error />
        </Route>
        <Route path="/login/sendotp">
          <OtpBox />
        </Route>
      </Switch>
    )

  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Routing />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
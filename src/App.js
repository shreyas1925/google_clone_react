import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectUser } from "./features/UserSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUserLogin, setSignOut } from "./features/UserSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("yes");
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Now to push again ou result into the store we gonna use dispatch
        console.log(authUser);
        dispatch(
          setUserLogin({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(setSignOut());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          {user ? (
            <>
              <Route path="/searchpage">
                <SearchPage />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </>
          ) : (
            <Route path="/login">
              <Login />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;

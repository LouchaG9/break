//React Stuff
import React, { useEffect, useState, createContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Pages / views
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import NewBreak from "./components/NewBreak";
import Content from "./components/Content";
import LearnOptions from "./components/LearnOptions";
import LaughOptions from "./components/LaughOptions";
import Mindfullness from "./components/Mindfulness";
import Profile from "./components/Profile";

//Utils / services
import auth from "./services/authService";
import ProtectedRoute from "./components/common/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//Styles stuff
import "./styles/master.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/form/form.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

// Set the base path to the folder you copied Shoelace's assets to
setBasePath("/dist/shoelace");

const UserContext = createContext({});

//   render()
const App = () => {
  const [user, setUser] = useState({});
  const [timer, setTimer] = useState("300000");

  useEffect(() => {
    const newUser = auth.getCurrentUser();
    setUser(newUser);
  }, []);

  console.log(user);

  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/landing">
                    <Landing />
                  </Route>
                  <Route path="/login">
                    <LoginForm />
                  </Route>
                  <Route path="/register">
                    <RegisterForm />
                  </Route>
                  <ProtectedRoute path="/content">
                    <Content timer={timer} />
                  </ProtectedRoute>
                  <ProtectedRoute path="/newBreak">
                    <NewBreak timer={timer} setTimer={setTimer} />
                  </ProtectedRoute>
                  <ProtectedRoute
                    path="/learnOptions"
                    component={LearnOptions}
                  />
                  <ProtectedRoute
                    path="/laughOptions"
                    component={LaughOptions}
                  />
                  <Route path="/mindfullness" component={Mindfullness} />
                  <ProtectedRoute path="/profile">
                    <Profile user={user} />
                  </ProtectedRoute>
                  <ProtectedRoute path="/home">
                    <Home user={user} />
                  </ProtectedRoute>
                  <Redirect path="/" to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </main>
    </React.Fragment>
  );
};

export default App;

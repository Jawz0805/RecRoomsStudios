import React, { useEffect } from "react";
import HomePage from "../../Pages/HomePage";
import { Switch, Route, useLocation } from "react-router-dom";


const PageRouter = () => {

  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default PageRouter;

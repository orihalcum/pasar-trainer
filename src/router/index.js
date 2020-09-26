import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { MENU } from '../config';

import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";

import PrivateRouter from './private-router';
import Page404 from '../pages/404';
import PageHome from '../pages/home';
import PageDashboard from '../pages/dashboard';
import PageCourse from '../pages/course';

const AppRouter = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser)
    }
  }, [currentUser]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ PageHome } />
        <PrivateRouter exact path={ MENU.DASHBOARD } component={ PageDashboard } />
        <PrivateRouter exact path={ MENU.COURSE } component={ PageCourse } />
        <PrivateRouter exact path={ `${MENU.COURSE}/:company` } component={ PageCourse } />
        <Route component={ Page404 } />
      </Switch>
    </Router>
  );
};

export default AppRouter;
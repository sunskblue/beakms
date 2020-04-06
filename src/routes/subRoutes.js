import React from 'react';
import { Route, Switch } from 'react-router-dom';
import la from './loadableComponent';

const Demo = () => import('views/Demo/Rematch');
const Activity = () => import('views/Activity/loadable');
const Home = () => import('views/Home');

const SubRoute = () => {
  return (
    <Switch>
      <Route path="/app/activity" component={la(Activity)} key="activity" exact />
      <Route path="/app/demo" component={la(Demo)} key="demo" exact />
      <Route path="/app/home" component={la(Home)} key="demo" exact />
    </Switch>
  );
};

export default SubRoute;

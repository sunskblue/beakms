import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazy from './LazyComponent';

const Demo = () => import('views/Demo/Rematch');
const Activity = () => import('views/Activity/loadable');
const Home = () => import('views/Home');

const SubRoute = () => {
  return (
    <Switch>
      <Route path="/app/activity" component={lazy(Activity)} key="activity" exact />
      <Route path="/app/demo" component={lazy(Demo)} key="demo" exact />
      <Route path="/app/home" component={lazy(Home)} key="demo" exact />
    </Switch>
  );
};

export default SubRoute;

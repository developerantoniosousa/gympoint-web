import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students/list';
import AddStudent from '../pages/Students/add';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/students/add" component={AddStudent} isPrivate />
    </Switch>
  );
}

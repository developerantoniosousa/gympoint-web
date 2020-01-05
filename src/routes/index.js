import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students/list';
import AddStudent from '../pages/Students/add';
import UpdateStudent from '../pages/Students/update';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/students/add" component={AddStudent} isPrivate />
      <Route path="/students/update/:id" component={UpdateStudent} isPrivate />
    </Switch>
  );
}

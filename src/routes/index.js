import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students/list';
import AddStudent from '../pages/Students/add';
import UpdateStudent from '../pages/Students/update';
import Plans from '../pages/Plans/list';
import AddPlan from '../pages/Plans/add';
import UpdatePlan from '../pages/Plans/update';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/students/add" component={AddStudent} isPrivate />
      <Route path="/students/update/:id" component={UpdateStudent} isPrivate />

      <Route exact path="/plans" component={Plans} isPrivate />
      <Route path="/plans/add" component={AddPlan} isPrivate />
      <Route path="/plans/update/:id" component={UpdatePlan} isPrivate />
    </Switch>
  );
}

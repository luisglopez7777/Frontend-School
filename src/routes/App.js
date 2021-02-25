import React from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Teachers from '../pages/Teachers'
import Courses from '../pages/Courses'
import Teacher from '../pages/Teacher'
import Course from '../pages/Course'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/teachers/:teacherId" component={Teacher} />
        <Route exact path="/courses/:courseId" component={Course} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

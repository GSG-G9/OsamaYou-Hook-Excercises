import {Switch, Route, Link } from "react-router-dom";

import './App.css';
import ExerciseOne from "./component/ExerciseOne";
// import ExerciseTwo from "./component/ExerciseTwo";
// import ExerciseThree from "./component/ExerciseThree";
// import ExerciseFour from "./component/ExerciseFour";

function App() {
  return (
      <div>
      <Switch>
          <Route exact path="/">
            <Link to='/ExerciseOne'>ExerciseOne</Link><br/>
            {/* <Link to='/ExerciseTwo'>ExerciseTwo</Link><br/>
            <Link to='/ExerciseThree'>ExerciseThree</Link><br/>
            <Link to='/ExerciseFour'>ExerciseFour</Link><br/> */}
          </Route>
          <Route exact path="/ExerciseOne">
            <ExerciseOne />
          </Route>
         {/* <Route exact path="/ExerciseTwo">
            <ExerciseTwo />
          </Route>
          <Route exact path="/ExerciseThree">
            <ExerciseThree />
          </Route>
          <Route exact path="/ExerciseFour">
            <ExerciseFour />
          </Route> */}
        </Switch>
      </div>
  );
}

export default App;

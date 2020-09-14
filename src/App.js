import React from "react";
import SignIn from "./components/SignIn/SigIn";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.outer}>
      <SignIn />
    </div>
  );
}

export default App;

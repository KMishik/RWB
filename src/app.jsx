import React from "react";
import { hot } from "react-hot-loader";

import style from "./app.css";

const App = () => {
  return <div className={style.app}>React Starter 🚀 </div>;
};

export default hot(module)(App);

/*
"@babel/plugin-proposal-class-properties",
"@babel/plugin-propasal-object-rest-spread"

className={style.app}
*/

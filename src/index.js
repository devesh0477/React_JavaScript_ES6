import React from "react";
import ReactDOM from "react-dom";

// -----------------------------------------------------------------------------------
//                          METHOD: 1
// -----------------------------------------------------------------------------------

// import abc, { doublePi, triplePi } from "./math.js";

// ReactDOM.render(
//   <ul>
//     <li>{abc}</li>
//     <li>{doublePi()}</li>
//     <li>{triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );

// -----------------------------------------------------------------------------------
//                          METHOD:2
// -----------------------------------------------------------------------------------

import * as abc from "./math.js";

ReactDOM.render(
  <ul>
    <li>{abc.default}</li>
    <li>{abc.doublePi()}</li>
    <li>{abc.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

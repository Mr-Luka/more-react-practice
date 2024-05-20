import React from 'react';
import ReactDOM from 'react-dom/client';
import NameTag from "./nameTag.js";

import "./index.css";


const App = () => (
  <div className = "App">
    <h1>
      <NameTag/>
    </h1>
  </div>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
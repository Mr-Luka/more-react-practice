import React from 'react';
import ReactDOM from 'react-dom/client';
import NameTag from "./nameTag.js";

import "./index.css";



const App = () => {
  const whatever = "Marko"
  return (
  <div className = "App">
    <h1>
      <NameTag name = "Luka"/>
      <NameTag name = {whatever}/>
      <NameTag name = "Slavica"/>
      <NameTag name = "Proki"/>
    </h1>
  </div>
)
  }

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
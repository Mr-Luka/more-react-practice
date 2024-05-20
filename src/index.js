import React from 'react';
import ReactDOM from 'react-dom/client';
import NameTag from "./nameTag.js";

import "./index.css";

const renderItem = charge => (
  <p key={charge.id}>
    <span> {charge.name}</span>
    <span> {charge.price}</span>
  </p>
)

const Receipt = props => {
  const receiptItems = props.charges.map(renderItem);
  return <div>{receiptItems}</div>
}

const App = () => {
  const whatever = "Marko"
  return (
  <div className = "App">
    <h1>
      <NameTag name = "Luka"/>
      <NameTag name = {whatever}/>
      <NameTag name = "Slavica"/>
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import NameTag from "./nameTag.js";
import chargesData from "./charges.js";

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
    <Receipt charges={chargesData}/>
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

const Receipt = props =>{
  const receiptItems = props.charges.map(renderItem);
  return <div>{receiptItems}</div>
}

const renderItem = charge => (
  <div key={charge.id}>
    <p>{charge.name}</p>
    <p>${charge.price}</p>
  </div>
);


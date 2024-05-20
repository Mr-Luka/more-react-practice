import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Greeting} from "./App.js";


const GreetGuests = () => {
  const weCanUseWhateverName = "Luka";
  return (
    <div>
      <Greeting name = "Slavica"/>
      <Greeting name = "Marko"/>
      <Greeting name = "Bojana"/>
      <Greeting name = {weCanUseWhateverName}/>
    </div>
  )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<GreetGuests/>, rootElement);
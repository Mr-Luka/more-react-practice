import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from "./greeting.js";



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
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <GreetGuests/>
  </React.StrictMode>
)


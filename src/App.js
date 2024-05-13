import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabPersons from "./components/TabPersons";
import Listing from "./components/Listing";
import FizzBuzz from "./components/FizzBuzz";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="App">
      <TabPersons />
      <Listing />
      <FizzBuzz />
      <Inputs/>
    </div>
  );
}

export default App;

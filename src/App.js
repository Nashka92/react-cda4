import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabPersons from "./components/TabPersons";
import Listing from "./components/Listing";
import FizzBuzz from "./components/FizzBuzz";

function App() {
  return (
    <div className="App">
      <TabPersons />
      <Listing />
      <FizzBuzz />
    </div>
  );
}

export default App;

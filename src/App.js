import React from "react";
import "./App.css";
import TabPersons from "./components/TabPersons";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./components/Listing";

function App() {
  return (
    <div className="App">
      <TabPersons />
      <Listing />
    </div>
  );
}

export default App;

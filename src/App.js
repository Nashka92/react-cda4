import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabPersons from "./components/TabPersons";
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

import React from "react";
import "./App.css";
import TabPersons from "./components/TabPersons";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./components/Listing";

function App() {
  return (
    <div className="App">
      <Title />
      <TabPersons />
      <Listing />
    </div>
  );
}

export default App;

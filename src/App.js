import React from "react";
import "./App.css";
import TabPersons from "./components/TabPersons";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Title />
      <TabPersons />
    </div>
  );
}

export default App;

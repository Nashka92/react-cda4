import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabPersons from "./components/exercice_1/TabPersons";
import Listing from "./components/exercice_2/Listing";
import FizzBuzz from "./components/exercice_3/FizzBuzz";
import Inputs from "./components/exercice_4/Inputs";
import UseEffectExo from "./components/exercice_5/UseEffectExo";
import ContactContainer from "./components/ContactContainer"

function App() {
  return (
    <div className="App">
      <TabPersons />
      <Listing />
      <FizzBuzz />
      <Inputs />
      <UseEffectExo valueNum={20} />
      <ContactContainer/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabPersons from "./components/exercice_1/TabPersons";
import Listing from "./components/exercice_2/Listing";
import FizzBuzz from "./components/exercice_3/FizzBuzz";
import Inputs from "./components/exercice_4/Inputs";
import UseEffectExo from "./components/exercice_5/UseEffectExo";
import DisplayContact from "./components/exercice_6/DisplayContact";
import Form from "./components/exercice_6/Form";

function App() {
  return (
    <div className="App">
      <TabPersons />
      <Listing />
      <FizzBuzz />
      <Inputs />
      <UseEffectExo valueNum={20} />
      <Form ajouterContact={ajouterContact} />
      <DisplayContact contacts={contacts} />
    </div>
  );
}

export default App;

import React from "react";
import LoginForm from "./components/exercice_7/LoginForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import TabPersons from "./components/exercice_1/TabPersons";
// import Listing from "./components/exercice_2/Listing";
// import FizzBuzz from "./components/exercice_3/FizzBuzz";
// import Inputs from "./components/exercice_4/Inputs";
// import UseEffectExo from "./components/exercice_5/UseEffectExo";
// import ContactContainer from "./components/ContactContainer"
// import BookApp from "./components/exercice_6bis/BookApp";

function App() {

  const handleLogin = (user, pass) => {
    console.log(`Les infos de l'utilisateur: ${user} - ${pass}`);
  }

  return (
    <div className="App">
      {/* <TabPersons />
      <Listing />
      <FizzBuzz />
      <Inputs />
      <UseEffectExo valueNum={20} />
      <ContactContainer/> */}
      {/* <BookApp/> */}
      <LoginForm loginProps={handleLogin} />
    </div>
  );
}

export default App;

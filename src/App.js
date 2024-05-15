import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookProvider } from "./components/exercice_9/BookContext";
import  Card  from "./components/exercice_9/Card";
import  Form  from "./components/exercice_9/Form";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Form />
        <Card />
      </BookProvider>
    </div>
  );
}

export default App;

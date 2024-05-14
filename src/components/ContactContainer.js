import React, { useState } from "react";
import DisplayContact from "./exercice_6/DisplayContact";
import Form from "./exercice_6/Form";

const ContactContainer = () => {
  const [contacts, setContacts] = useState([]);

  const ajouterContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <>
      <Form ajouterContact={ajouterContact}></Form>
      <DisplayContact contacts={contacts}></DisplayContact>
    </>
  );
};

export default ContactContainer;

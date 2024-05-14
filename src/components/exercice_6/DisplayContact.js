import React from 'react';

const DisplayContact = ({ contacts }) => {
  if (contacts.length === 0) {
    return <div>Aucun contact disponible.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.nom}</td>
            <td>{contact.prenom}</td>
            <td>{contact.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayContact;

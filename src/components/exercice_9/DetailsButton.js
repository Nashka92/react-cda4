import React from "react";

const DetailsButton = ({ book }) => {
    return <button className="btn btn-primary" 
    onClick={() => console.log(book)}>Détails</button>;
};

export default DetailsButton;

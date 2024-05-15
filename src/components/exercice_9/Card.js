import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import DetailsButton from "./DetailsButton";

const Card = () => {
  const { books } = useContext(BookContext);

  return (
    <>
    < div className="flex flex-wrap justify-center gap-4">
      {books.map((book, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <div className="card-body">
            <label>Titre</label>
            <p className="card-title">{book.title}</p>
            <label>Auteur</label>
            <p className="card-text">{book.author}</p>
            <DetailsButton book={book} />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Card;

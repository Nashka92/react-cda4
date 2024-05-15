import React, { useState } from "react";
import useBookList from "../share/hooks/useBookList";

const BookApp = () => {
  const url = "http://localhost:3010/livres";
  const { books, loading, addBook } = useBookList(url);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const handleAddBook = () => {
    addBook({ titre: newBookTitle, auteur: newAuthor });
    setNewBookTitle("");
    setNewAuthor("");
  };

  return (
    <>
      <h1>Book List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Auteur</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.titre}</td>
                <td>{book.auteur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <form>
        <div class="form-group">
          <input
            type="text"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            placeholder="Nouveau titre"
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            placeholder="Nouveau auteur"
          />

        <button class="btn btn-primary" onClick={handleAddBook}>
          Ajouter
        </button>
        </div>
      </form>
    </>
  );
};

export default BookApp;

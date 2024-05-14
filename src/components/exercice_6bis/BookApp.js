import React from "react";
import useBookList from "../share/hooks/useBookList";


const BookApp = () => {
  const url = "http://localhost:3010/livres";
  const { books, loading } = useBookList(url);

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
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.titre}</td>
                        <td>{book.auteur}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      )}
    </>
  );
};

export default BookApp;

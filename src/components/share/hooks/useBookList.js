import { useState, useEffect } from "react";

const useBookList = (url) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [url]);

  const addBook = async (newBook) => {
    try {
      const response = await fetch(`http://localhost:3010/ajout-livre`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
      });
      const addedBook = await response.json();
  
      setBooks([...books, addedBook]);
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre", error);
    }
  };
  

  return { books, loading, addBook };
};

export default useBookList;

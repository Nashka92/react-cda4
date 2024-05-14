import { useState, useEffect } from 'react';

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

  return { books, loading };
};

export default useBookList;


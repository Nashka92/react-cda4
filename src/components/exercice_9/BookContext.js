import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks(currentBooks => [...currentBooks, book]);
    };

    return (
        <BookContext.Provider value={{ books, addBook }}>
            {children}
        </BookContext.Provider>
    );
};

import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';

const Form = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Titre du livre" 
            />
            <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Auteur du livre" 
            />
            <button type='submit' disabled={!title || !author}>Ajouter</button>
        </form>
    );
}

export default Form;

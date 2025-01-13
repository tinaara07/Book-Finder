import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations'; // Make sure this mutation is imported

const SearchBooks = () => {
  const [bookState, setBookState] = useState([]);
  const [saveBook] = useMutation(SAVE_BOOK);

  const handleSaveBook = async (book) => {
    try {
      const { data } = await saveBook({
        variables: { bookInput: { ...book } },
      });

      console.log('Book saved:', data.saveBook);
      // Update state or UI here as needed
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <div>
      {/* Render book search results, replace this with actual data rendering */}
      <button onClick={() => handleSaveBook(someBook)}>Save Book</button>
    </div>
  );
};

export default SearchBooks;

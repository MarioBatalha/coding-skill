import React from 'react'
import { Book } from '../book/index';
import { books } from '../../books';

const BookList = () => {
  const handleGetBook = id => {
    const book = books.find(book => book.id === id)
    console.log(book)
  }
  return (
    <div className="book-list">
      <h1>React course -John Smilga</h1>
        {
          books.map((book) => (
            <Book key={book.id} {...book} handleGetBook={handleGetBook} />
          ))
        }
    </div>
  )
}

export default BookList;
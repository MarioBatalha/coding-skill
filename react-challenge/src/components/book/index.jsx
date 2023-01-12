import React from 'react';

export const Book = (props) => {
    const { id, title, author, img, handleGetBook } = props;
    return (
        <div className='container'>
           <div className='container-card'>
            <img src={img} alt={title} className='container-card-img' />
           <h2>Title: {title}</h2>
           <button onClick={() => handleGetBook(id)}>click me</button>
            <p>Author: {author}</p>
           </div>
        </div>
    )
}
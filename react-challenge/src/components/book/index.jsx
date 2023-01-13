import React from 'react';

export const Book = (props) => {
    const { id, title, author, img, number } = props;
    return (
        <div className='container'>
           <div className='container-card'>
            <img src={img} alt={title} className='container-card-img' />
           <h2>Title: {title}</h2>
            <p>Author: {author}</p>
            <span className='number'>#{number + 1}</span>
           </div>
        </div>
    )
}
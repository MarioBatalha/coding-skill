import React from 'react';

export const Book = (props) => {
    const { title, author, img } = props;
    return (
        <div className='container'>
           <div className='container-card'>
            <img src={img} alt={title} className='container-card-img' />
           <h2>Title: {title}</h2>
            <p>Author: {author}</p>
           </div>
        </div>
    )
}
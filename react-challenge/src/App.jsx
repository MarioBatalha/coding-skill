import React from 'react'
import { Book } from './components/book/index';


const books = [ {
  id: 1,
  title: 'O teorema de Katherire',
  author: 'John Green',
  img: 'https://img.wook.pt/images/o-teorema-de-katherine-john-green/MXwxNTcyNDIyNnwxMTIxOTMyM3wxMzk4ODc0ODIwMDAw/500x'
},
{
  id: 2,
  title: 'Gestao da emocao',
  author: 'Augusto Cury',
  img: 'https://www.ncrangola.com/loja/particulares/30210/livro-gestao-da-emocao.jpg'
}]

const App = () => {
  const handleGetBook = id => {
    const book = books.find(book => book.id === id)
    console.log(book)
  }
  return (
    <div className="App">
      <h1>React course -John Smilga</h1>
        {
          books.map((book) => (
            <Book key={book.id} {...book} handleGetBook={handleGetBook} />
          ))
        }
    </div>
  )
}

export default App

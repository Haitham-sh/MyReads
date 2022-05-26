import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

function Home() {
  const shelfs = [
    {
      name: "Currently Reading",
      value: "currentlyReading",
    },
    {
      name: "Want to Read",
      value: "wantToRead",
    },
    {
      name: "Read",
      value: "read",
    },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const updateShelf = (book, Shelf) => {
    BooksAPI.update(book, Shelf).then(() => {
      book.shelf = Shelf;
      const bookChang = books
        .filter((bookCh) => bookCh.id !== book.id)
        .concat([book]);
      setBooks([...bookChang]);
    });
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map((shelfB) => (
              <div key={shelfB.name}>
                <BookShelf
                  books={books}
                  shelfB={shelfB}
                  updateShelf={updateShelf}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

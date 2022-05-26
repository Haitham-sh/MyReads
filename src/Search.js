import React from "react";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.trim().length !== 0) {
      BooksAPI.search(query.trim()).then((books) => {
        if (books.error !== "empty query") {
          setBooks(books);
        } else {
          setBooks([]);
          alert("Empty try something else");
        }
      });
    } else {
      setBooks([]);
    }
  }, [query]);

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
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookDetails books={books} shelfB="none" updateShelf={updateShelf} />
      </div>
    </div>
  );
}

export default Search;

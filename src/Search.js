import React from "react";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function Search({ updateShelf, shelfedOrNot, booksx }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim().length !== 0) {
        BooksAPI.search(query.trim()).then((books) => {
          if (books.error !== "empty query") {
            let sorte = [];
            books.map((book) => {
              return (book.shelf = "none");
            });

            booksx.map((bookx) => {
              sorte[books.findIndex((book) => book.id === bookx.id)] = {
                id: bookx.id,
                shelf: bookx.shelf,
              };
              return sorte;
            });

            books.map((book) => {
              sorte.map((s) => {
                if (book.id === s.id) {
                  book.shelf = s.shelf;
                }
                return book;
              });
              return books;
            });

            setBooks([...books]);
          } else {
            setBooks([]);
            alert("Empty try something else");
          }
        });
      } else {
        setBooks([]);
      }
    }, 350);
    return () => clearTimeout(delay);
  }, [query, booksx]);

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
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookDetails
                book={book}
                updateShelf={updateShelf}
                shelfedOrNot={shelfedOrNot}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;

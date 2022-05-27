import React from "react";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function Search({ updateShelf, shelfedOrNot }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

    useEffect(() => {
        const delay = setTimeout(() => {
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
          }},50);
        return () => clearTimeout(delay);
  }, [query]);

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
        <BookDetails
          books={books}
          shelfB="none"
          updateShelf={updateShelf}
          shelfedOrNot={shelfedOrNot}
        />
      </div>
    </div>
  );
}

export default Search;

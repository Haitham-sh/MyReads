import React from "react";
import BookDetails from "./BookDetails";

function BookShelf({ books, shelf, updateShelf, shelfedOrNot }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.value}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf.name)
            .map((book) => (
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

export default BookShelf;

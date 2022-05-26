import React from "react";
import BookDetails from "./BookDetails";

function BookShelf({ books, shelfB, updateShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfB.name}</h2>
      <div className="bookshelf-books">
        <BookDetails books={books} shelfB={shelfB} updateShelf={updateShelf} />
      </div>
    </div>
  );
}

export default BookShelf;

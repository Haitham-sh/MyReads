import React from "react";

function BookDetails({ book, updateShelf, shelfedOrNot }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail}), linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelfedOrNot(book)}
            onChange={(event) => {
              updateShelf(book, event.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors?.map((author) => (
          <span key={author}>{author},</span>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;

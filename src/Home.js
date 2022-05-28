import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

function Home({ updateShelf, shelfedOrNot, books }) {
  const shelfs = [
    {
      value: "Currently Reading",
      name: "currentlyReading",
    },
    {
      value: "Want to Read",
      name: "wantToRead",
    },
    {
      value: "Read",
      name: "read",
    },
  ];

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map((shelf) => (
              <div key={shelf.name}>
                <BookShelf
                  books={books}
                  shelf={shelf}
                  updateShelf={updateShelf}
                  shelfedOrNot={shelfedOrNot}
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

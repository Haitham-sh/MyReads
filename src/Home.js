import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

function Home({ updateShelf, shelfedOrNot, books }) {
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

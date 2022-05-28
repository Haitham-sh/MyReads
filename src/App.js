import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
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

  const shelfedOrNot = (book) => {
    const test = books.filter((b) => b.id === book.id);
    if (test.length > 0) {
      return test[0].shelf;
    } else {
      return "none";
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            shelfedOrNot={shelfedOrNot}
            updateShelf={updateShelf}
            books={books}
          />
        }
      ></Route>
      <Route
        exact
        path="/search"
        element={
          <Search
            shelfedOrNot={shelfedOrNot}
            updateShelf={updateShelf}
            booksx={books}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;

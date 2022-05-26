import React from 'react'

function BookDetails({ books, shelfB, updateShelf}) {


  return (
      <ol className="books-grid">
          {books.filter((book)=>(
              book.shelf=== shelfB.value
          )).map((book) => (
            <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:  `url(${book.imageLinks?.thumbnail}), linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)`
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                      value={shelfB.value}
                      onChange={(event) => updateShelf(book, event.target.value)}>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
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
          </li>
       ))}
      </ol>
  )
}

export default BookDetails
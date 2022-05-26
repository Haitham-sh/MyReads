# MyReads Project

This is the template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to add interactivity to the app by refactoring the static code in this template of the CSS and HTML markup given by Udacity but without any of the React code that is needed to complete the project. The project emphasizes using React to build the application and Udacity provides an API server and client library that we will use to persist information as we interact with the application.

## Project Overview
In the MyReads project, a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 

## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
Currently Reading
Want to Read
Read
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is always the current shelf the book is in.
The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent.

## How to use

To get started right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## the project structure

```bash

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains static HTML.
    ├── BookDetails.js # This is the Component of the details of one book
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js # This is the Component of the details of one shelf.
    ├── Home.js # This is the Component of the home page.
    ├── index.css # Global styles.
    ├── It is used to DOM rendering only.
    └── Search.js # This is the Component of the search page.
```

## Backend Server

To simplify, Udacity provided a backend server to develop. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results, but if no result the user will see an alert.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## By
### Haitham Elsherbiny

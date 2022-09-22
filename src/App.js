import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import StoreSearch from "./views/Search";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => setAllBooks(books))
  }, [])

  const changeShelf = (book, shelf) => {
    book.shelf = shelf;
    update(book, shelf).then(() => {
      setAllBooks([...allBooks.filter((book_arg) => book_arg.id !== book.id), book]);
    });
  }

  const selectShelf = (id) => {
    const shelf = allBooks.find((book) => book.id === id)?.shelf
    if (shelf) return shelf;
    return 'none';
  }
  

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home setAllBooks={setAllBooks} allBooks={allBooks} changeShelf={changeShelf} />} />
        <Route path="/search" element={<StoreSearch selectShelf={selectShelf} changeShelf={changeShelf} setAllBooks={setAllBooks} />} />
      </Routes>
    </div>
  );
}

export default App;

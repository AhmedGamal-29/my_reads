import React from 'react'
import { search } from '../BooksAPI';
import { useState } from "react";
import Book from '../components/Book';

const StoreSearch = ({ changeShelf, selectShelf }) => {
    const [searchResult, setSearchResult] = useState([]);

    const getResults = (query) => {
        search(query)
            .then((response) => {
                if (Array.isArray(response)) {
                    setSearchResult(response)
                }
                else {
                    setSearchResult([])
                }
            })
            .catch((error) => {
                console.log(error)
                setSearchResult([])
            })
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    href='/'
                    className="close-search"
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => {
                            getResults(event.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResult?.map((book) => (
                        <li key={book.id}>
                            <Book changeShelf={changeShelf} shelf={selectShelf(book.id)} book={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default StoreSearch;
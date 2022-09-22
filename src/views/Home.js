import React from 'react';
import Shelf from '../components/Shelf';
import { selectShelf } from '../shelf_selection';

const Home = ({ allBooks, changeShelf }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf changeShelf={changeShelf} allBooks={selectShelf(allBooks, 'Currently Reading')} shelfName={'Currently Reading'} />
                    <Shelf changeShelf={changeShelf} allBooks={selectShelf(allBooks, 'Want To Read')} shelfName={'Want To Read'} />
                    <Shelf changeShelf={changeShelf} allBooks={selectShelf(allBooks, 'Read')} shelfName={'Read'} />
                </div>
            </div>
            <div className="open-search">
                <a href='/search'>Add a book</a>
            </div>
        </div>
    )
}

export default Home

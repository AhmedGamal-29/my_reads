import Book from "./Book";

const Shelf = ({ allBooks, shelfName, changeShelf }) => {

    return (
        <div className="shelf">
            <h2 className="shelf-title">{shelfName}</h2>
            <div className="shelf-books">
                <ol className="books-grid">
                    {allBooks?.map(book => {
                        return (
                            <li key={book.id}>
                                <Book changeShelf={changeShelf} shelf={book.shelf} allBooks={allBooks} book={book} />
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default Shelf;
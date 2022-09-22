//filtering allbooks according to its shelf
export const selectShelf = (allBooks, shelf) => {
    switch (shelf) {
        case 'Currently Reading':
            return allBooks?.filter((book) => book?.shelf === 'currentlyReading')
        case 'Want To Read':
            return allBooks?.filter((book) => book?.shelf === 'wantToRead')
        case 'Read':
            return allBooks?.filter((book) => book?.shelf === 'read')
        default:
            return allBooks
    }
}
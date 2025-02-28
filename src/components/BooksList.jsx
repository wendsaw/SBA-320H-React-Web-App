





const Bookslist = ({books}) => {



    return (
        <>
      {/* Display fetched book data */}
      {books && books.items && (
        <ul>
          {books.items.map((book, index) => (
            <div className="books" key={index}>
            <li className="books">Title:{book.volumeInfo.title}</li>
            <p className="books">Author:{book.volumeInfo.authors}</p>
            
            </div>
          ))}
        </ul>
      )}
        </>
      );
}
 
export default Bookslist;
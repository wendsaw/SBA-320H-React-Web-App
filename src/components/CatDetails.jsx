import { NavLink, useParams } from "react-router-dom";
import useFetch from "../useFetch";


const CatDetails = () => {

    const { id } = useParams()

    const { data: book, error, isPending } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

    return (
        <>
            <div className="book-details">

                {isPending && <div>Loading.....</div>}
                {error && !error.includes("<!DOCTYPE") && <div style={{ color: "red" }}>{error}</div>}
                {book && (
                    <article>

                        <p>Title:</p><h2>{book.volumeInfo.title}</h2>
                        <p>Witten by:{book.volumeInfo.authors.join(", ")}</p>
                        <p>Publisher:{book.volumeInfo.publisher}</p>
                        <p>Published date:{book.volumeInfo.publishedDate}</p>
                        <p>description:{book.volumeInfo.description}</p>
                        <img className="image-details" src={book.volumeInfo.imageLinks?.thumbnail || "data:image/png;base64,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"} alt="Book Thumbnail" />

                    </article>

                )}


            </div>

           

        </>
    );
}

export default CatDetails;
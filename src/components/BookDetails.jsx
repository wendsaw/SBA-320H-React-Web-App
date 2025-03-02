import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


const BookDetails = () => {

    const {id}=useParams()

    const { data: book, error, isPending } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);



    return ( 

        <div className="book-details">
            

            {isPending&& <div>Loadind.....</div>}
            {error && !error.includes("<!DOCTYPE") && <div style={{ color: "red" }}>{error}</div>}
            {book&& (
                <article>
                    
                    <h2>{book.volumeInfo.title}</h2>
                    <p>Witten by:{book.volumeInfo.authors}</p>

                </article>
            )}


        </div>
     );
}
 
export default BookDetails;
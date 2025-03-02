import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import HomeLayout from "../layouts/HomeLayout";


const BookDetails = () => {

    const {id}=useParams()

    const { data: book, error, isPending } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);



    return ( 
        <>

        <div className="book-details">
            

            {isPending&& <div>Loadind.....</div>}
            {error && !error.includes("<!DOCTYPE") && <div style={{ color: "red" }}>{error}</div>}
            {book&& (
                <article>
                    
                    <p>Title:<h2>{book.volumeInfo.title}</h2></p>
                    <p>description:{book.volumeInfo.description}</p>
                    <p>Witten by:{book.volumeInfo.authors}</p>
                    <p>Publisher:{book.volumeInfo.publisher}</p>
                    <p>Published date:{book.volumeInfo.publishedDate}</p>

                </article>


            )}


        </div>
        <HomeLayout/>
        </>
     );
}
 
export default BookDetails;
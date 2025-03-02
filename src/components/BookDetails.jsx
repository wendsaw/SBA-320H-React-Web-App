import { useParams } from "react-router-dom";


const BookDetails = () => {

    const {id}=useParams()


    return ( 

        <div className="book-details">

            <h1>book details {id}</h1>


        </div>
     );
}
 
export default BookDetails;
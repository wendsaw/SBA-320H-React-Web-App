import { useState} from "react";
import Bookslist from "./BooksList";
import useFetch from "../useFetch";



const SearBar = () => {
    const [key, setKey] = useState('');
    const [word, setWord] = useState('');
    const [url, setUrl] = useState('');
    
    const { data: books, error } = useFetch(url);
    



    const handleClick = () => {

        const newUrl = `https://www.googleapis.com/books/v1/volumes?q=${word}+${key}&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM`;
        
        setUrl(newUrl);
        

    };


    return (
        <>
        
        <div className="sear-bar">
            <select
                onChange={(e) => setKey(e.target.value)}
                style={{ width: "250px", height: "50px" }}
            >
                <option value="">Key word</option>
                <option value="intitle">Title</option>
                <option value="inauthor">Author</option>
                <option value="inpublisher">Publisher</option>
                <option value="subject">Subject</option>
                <option value="isbn">ISBN Number</option>
                <option value="lccn">LCCN Number</option>
                <option value="oclc">OCLC Number</option>
            </select>

            <input className="sear-input"
                onChange={(e) => setWord(e.target.value)}
                style={{ width: "1000px" }}
                placeholder="Find a book based on a keyword"
                value={word}
            />

            <button onClick={handleClick} 
            style={{ color: "red" }} >
             <span>Search</span>
            </button>
            </div>
            {error && !error.includes("<!DOCTYPE") && <div style={{ color: "red" }}>{error}</div>}
            {books && <Bookslist books={books} />}
            
        </>
    );

}

export default SearBar;
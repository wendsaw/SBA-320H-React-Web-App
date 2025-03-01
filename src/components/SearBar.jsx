import { useState } from "react";

import Bookslist from "./BooksList";
import useFetch from "../useFetch";


const SearBar = () => {

    const [key, setKey] = useState('');
    const [word, setWord] = useState('');
    const [url, setUrl] = useState('');
    const { data: books, isPending, error } = useFetch(url);

    const handleClick = () => {
        const newUrl = `https://www.googleapis.com/books/v1/volumes?q=${word}+${key}&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM`;
        setUrl(newUrl);
    };


    return (
        <>
            <select
                onChange={(e) => setKey(e.target.value)}
                style={{ width: "250px", height: "30px", marginLeft: "30px" }}
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

            <input
                onChange={(e) => setWord(e.target.value)}
                style={{ width: "1000px" }}
                placeholder="Find a book based on a keyword"
                value={word}
            />

            <button onClick={handleClick} style={{ color: "red" }} >
                Search
            </button>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {books && <Bookslist books={books} />}
        </>
    );

}

export default SearBar;
import { useState, useEffect } from "react";

import Bookslist from "./BooksList";


const SearBar = () => {

    const [key, setKey] = useState('');
    const [word, setWord] = useState('');
    const [url, setUrl] = useState('');
    const [isPending, setIsPending] = useState(true)
    const [error, SetError]=useState(null)

    const handleClick = () => {

        isPending && <div> Loading.....</div>
        const newUrl = `https://www.googleapis.com/books/v1/volumes?q=flowers+${key}:${word}&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM`;
        setUrl(newUrl);
    };

    const [books, setBooks] = useState(null);


    useEffect(() => {

        fetch(url)
            .then(res =>{
                if(!res.ok){

                    throw Error ('could not make connection')
                }

                return  res.json()

            } )
            
            .then(data => {
                setBooks(data);
                setIsPending(false)
                console.log(data);
                SetError(null)
            })
            .catch(err=>{

                console.log(err.message);
                SetError(err.message)
                console.log(error);
                
                setIsPending(false)
                
            })

    }, [url,error]);


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

            {/* {error&&<div>{error}</div>} */}
            {books && <Bookslist books={books} />}
        </>
    );

}

export default SearBar;
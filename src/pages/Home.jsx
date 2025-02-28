import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState(null);
  const [key, setKey] = useState('');
  const [word, setWord] = useState('');
  const [url, setUrl] = useState('');

  const handleClick = () => {
    
    const newUrl = `https://www.googleapis.com/books/v1/volumes?q=flowers+${key}:${word}&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM`;
    setUrl(newUrl);
  };

  useEffect(() => {
    

    fetch(url)
      .then(res => res.json())  // Corrected fetch response handling
      .then(data => {
        setBooks(data);
        console.log(data); // Log books for debugging
      })
      .catch(error => console.error("Error fetching books:", error));
  }, [url]); // Now fetch triggers when `url` changes

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

      <button onClick={handleClick} style={{ color: "red" }}>
        Search
      </button>

      {/* Display fetched book data */}
      {books && books.items && (
        <ul>
          {books.items.map((book, index) => (
            <li key={index}>{book.volumeInfo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

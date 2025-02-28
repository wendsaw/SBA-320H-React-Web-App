import { useEffect,useState } from "react";





const Home = () => {

  const [key ,setKey]=useState('')
  const [word ,setWord]=useState(null)
  let [url, setUrl ]=useState('')
const handleClick=()=>{

  // console.log(key);

setUrl=""


  
}

  const [books, setBooks]=useState(null)

  
  
  

  useEffect(()=>{

    console.log(url);
    
      fetch("www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM")

      .then(res=>{

          return res.json()
      })
      .then(data=>{

          // console.log(data.items[0].id);
          setBooks(data.items)
          console.log(books);
          
          

      })


  },[])


console.log(key);
console.log(word);


    return (

<>
      <select  onChange={(e)=>{
        setKey(e.target.value)
      }}name="" id="" style={{width:"250px", height:"30px", marginLeft:"30px"}}>
        <option > key word</option>
        <option value="intitle">title</option>
        <option value="inauthor">author</option>
        <option value="inpublisher">publisher</option>
        <option value="subject">subject</option>
        <option value="isbn">sbn number</option>
        <option value="lccn">iccn number</option>
        <option value="oclc">clc number</option>

      </select>
      <input onChange={(e)=>{
        setWord(e.target.value)
      }}style={{width:"1000px"}} placeholder="find a book base on key word"></input>
      <button  onClick={handleClick}syle={{color:"red"}}>search</button>

      </>
        


       
      );
}
 
export default Home;
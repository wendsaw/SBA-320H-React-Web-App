import { useEffect,useState,useRef } from "react";





const Home = () => {

  const [books, setBooks]=useState(null)

  useEffect(()=>{

      console.log(books);
      
      fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:keyes&key=AIzaSyDbtpGw-GtR2PpYNLS2krrR0G8Yk2JTmAM")

      .then(res=>{

          return res.json()
      })
      .then(data=>{

          // console.log(data.items[0].id);
          setBooks(data.items)
          

      })


  },[books])



    return (

<>
      <select name="" id="" style={{width:"250px", height:"30px", marginLeft:"30px"}}>
        <option selected>select key word</option>
        <option value="1">title</option>
        <option value="2">author</option>
        <option value="3">publisher</option>
        <option value="3">subject</option>
        <option value="3">sbn number</option>
        <option value="3">iccn number</option>
        <option value="3">clc number</option>

      </select>
      <input style={{width:"1000px"}} placeholder="find a book base on key word"></input>
      <button syle={{color:"red"}}>search</button>

      </>
        


       
      );
}
 
export default Home;
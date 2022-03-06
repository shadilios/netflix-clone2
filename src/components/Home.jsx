import React from "react";

import {useState, useEffect} from "react";

import MovieList from "./MovieList";


export default function Home(){

const [movies, setMovies] = useState([]);


async function getData(){

  //  what await does basically is telling the code not to jump to another line until it finished the current one

  let respone = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
  let data = await respone.json();



  setMovies(data);

}
  


//  *****  use effect *****

  useEffect(() => {

    getData();

  },[])

  console.log(movies);


  return(
    <>
    <h1>Hello from Home page</h1>
    
    

    <div>
      {movies && <MovieList movies ={movies} />}
    </div>


    </>


    
  )
}



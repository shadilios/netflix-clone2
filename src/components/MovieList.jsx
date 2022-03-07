import React from "react";

import Movie from "./Movie";



export default function MovieList({movies}){


  return (
    <>
    {

    movies.map(element => {
      

      return(
        <div key={element.id} >
        
        <Movie dataOfMovie={element}/>

        </div>
      )


    })

    
    } 
    </>
    
  )
  
};


import React from "react";


let MovieList = ({movies}) => {
  
  return (
    <>
    {

    movies.map(movie => {
      

      return(
        <h1>{movie.title}</h1>
      )


    })

    
    } 
    </>
    
  )
  
};

export default MovieList;
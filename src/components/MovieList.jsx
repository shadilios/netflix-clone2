import React from "react";

import Movie from "./Movie";



export default function MovieList(props){

  return (
    <>
    {

    props.movie.map(element => {
      

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


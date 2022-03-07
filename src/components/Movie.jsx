import React from "react";
import ModalMovie from "./ModalMovie";


import { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Movie(props){


  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  

  //  this function is important so it wont render the cards  of all the items in my map
  function handleChosenMovie(data){
    
    handleShow();
    
    setChosenMovie(data);
        
  }





  return (
    <>
    
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.dataOfMovie.poster_path}`} />
        <Card.Body>
          <Card.Title> Title: {props.dataOfMovie.title}</Card.Title>
          <Card.Title>Release date: {props.dataOfMovie.release_date}</Card.Title>
          <Card.Text>
            Overview: 
            {props.dataOfMovie.overview}
          </Card.Text>
          <Button variant="primary" onClick={() => handleChosenMovie(props.dataOfMovie)}>Add to Fav</Button>
        </Card.Body>
        </Card>

        {chosenMovie && <ModalMovie show={show} 
        movie={props.dataOfMovie}
        chosenMovie={chosenMovie}  handleClose={handleClose} />}

        
     
    </>
    
  )
  
};


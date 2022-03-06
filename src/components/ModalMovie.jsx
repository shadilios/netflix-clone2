import React from "react";
import { useState } from "react";


import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



export default function ModalMovie({props}){


  const data = props.movieData;



  return(
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title: {props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Poster: {`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
  
}


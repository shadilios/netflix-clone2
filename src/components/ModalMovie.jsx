import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import swal from 'sweetalert';


export default function ModalMovie({ movie, show, handleClose, addToFavList }) {

  // Getting the required inf from the form
  function handelFormSubmit(e){
    e.preventDefault();
    let comment = e.target.comment.value;
    // To send a POST request to save the recipe in our database as favorite recipe
    addToFavList(movie, comment);
  }

  async function addToFavList(movie, comment){
    const url = `${process.env.REACT_APP_SERVER}/addMovie`
    // This should match the required data in the server
    const data = {
      title : movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: comment

    }
    // Use Fetch to send POST request
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    swal("Favorite Movie", "You added a new movie", "success");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{movie.overview}</Modal.Body>
      <Form onSubmit={handelFormSubmit} style={{margin: "0 10px"}}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control name="comment" type="text" placeholder="Enter Comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      <Modal.Footer>
        
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
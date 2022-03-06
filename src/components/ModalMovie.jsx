import React from "react";
import { Form } from "react-bootstrap";


import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



export default function ModalMovie(props){


  return(
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title: {props.chosenMovie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Poster:
        <br/>
        <img style={{width:"200px"}} src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`}/>
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter Comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
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


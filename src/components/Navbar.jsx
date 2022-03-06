import React from "react";

import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Navbar(){

  return(
    <Nav>

      <Nav.Item>
        <Nav.Link href="/">Trending</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/getMovies">My Favorite movies</Nav.Link>
      </Nav.Item>
      
      
    </Nav>
  )


}
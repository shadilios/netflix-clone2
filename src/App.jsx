import React from "react";

import Button from "react-bootstrap/Button";

import {Routes, Route} from "react-router-dom";

//  pages import
//test



import FavList from "./components/FavList";
import Home from "./components/Home";
import ModalMovie from "./components/ModalMovie";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";


export default function App(){
  return(
    <Routes>

      <Route path="/trending" element={<Home/>}/>
      
      


    </Routes>
  )
}
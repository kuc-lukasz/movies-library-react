import React from "react";
import Filter from "./Components/filter";
import SingleFilm from "./SingleFilm";
import "./Styles/MoviesLibrary.css";

const MoviesLibrary = () => {
  return (
    <>
      <div className="movieslibrary">
        <SingleFilm />
      </div>
    </>
  );
};

export default MoviesLibrary;

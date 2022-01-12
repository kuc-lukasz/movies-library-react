import React from "react";
import { MoviesList } from "./Movies-Data/moviesData";

const MoviesLibrary = () => {
  const filmsList = MoviesList();
  console.log(filmsList);

  return (
    <div>
      <p>działa</p>
    </div>
  );
};

export default MoviesLibrary;

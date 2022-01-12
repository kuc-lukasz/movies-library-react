import React from "react";
import DescriptionFields from "./Components/DescriptionFields";
import { MoviesList } from "./Movies-Data/moviesData";

const MoviesLibrary = () => {
  const filmsList = MoviesList();
  console.log(filmsList);

  return (
    <div>
      {filmsList.map((film) => (
        <div>
          <h3>{film.Title}</h3>
          <DescriptionFields label="Genre" value={film.Genre} />
        </div>
      ))}
    </div>
  );
};

export default MoviesLibrary;

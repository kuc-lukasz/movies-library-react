import React from "react";
import DescriptionFields from "./Components/DescriptionFields";
import Poster from "./Components/Poster";
import { MoviesList } from "./Movies-Data/moviesData";

const MoviesLibrary = () => {
  const filmsList = MoviesList();
  console.log(filmsList);

  return (
    <div>
      {filmsList.map((film) => (
        <div>
          <h3>
            {film.Title} {film.Year}
          </h3>
          <Poster posterSrc={film.Poster} />
          <DescriptionFields label="Genre" value={film.Genre} />
          <DescriptionFields label="Awards" value={film.Awards} />
          <DescriptionFields label="Director" value={film.Director} />
          <DescriptionFields label="Plot" value={film.Plot} />
        </div>
      ))}
    </div>
  );
};

export default MoviesLibrary;

import React from "react";
import DescriptionFields from "./Components/DescriptionFields";
import Poster from "./Components/Poster";
import "./Styles/SingleFilm.css";
import { MoviesList } from "./Movies-Data/moviesData";

const SingleFilm = () => {
  const filmsList = MoviesList();
  return (
    <div>
      {filmsList.map((film) => (
        <div className="singleFilm">
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

export default SingleFilm;

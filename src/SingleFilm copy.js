import React from "react";
import { useState } from "react";
import DescriptionFields from "./Components/DescriptionFields";
import Poster from "./Components/Poster";
import "./Styles/SingleFilm.css";
import "./Styles/moviesList.css";
import { MoviesList } from "./Movies-Data/moviesData";

const SingleFilm = () => {
  const filmsList = MoviesList();

  const [filter, setFilter] = useState("");
  const [ascending, setAscending] = useState("");
  const [alphabetically, setAlphabetically] = useState("");

  const filteredAscending = filmsList.filter((e) => {
    const filmsTitle = e.Title;
    return filmsTitle.toLowerCase().includes(filter.toLowerCase());
  });

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const handleClick = () => {
    setAscending(!ascending);
  };

  const handleOnChangeAlph = () => {
    setAlphabetically(!alphabetically);
  };

  return (
    <>
      <div className="nav-container">
        <form>
          <label>Find a movie!</label>
          <input
            name="search"
            value={filter}
            onChange={handleOnChange}
            placeholder="Write title ..."
          ></input>
        </form>
        <div className="buttons">
          <button onClick={handleClick}>
            {ascending ? "Sort The Oldest" : "Sort The Newest"}
          </button>
          <button onClick={handleOnChangeAlph}>
            {alphabetically ? "Sorting A -> " : "Sorting Z -> "}
          </button>
        </div>
      </div>
      <div className="moviesList">
        {filteredAscending
          //   .sort((film, nextFilm) =>
          //     ascending ? nextFilm.Year - film.Year : film.Year - nextFilm.Year
          //   )
          //   .sort((film, nextFilm) =>
          //     alphabetically
          //       ? nextFilm.Title > film.Title
          //         ? 1
          //         : -1
          //       : film.Title > nextFilm.Title
          //       ? 1
          //       : -1
          // )
          .sort((film, nextFilm) =>
            (ascending ? nextFilm.Year - film.Year : film.Year)(
              alphabetically
                ? nextFilm.Title > film.Title
                  ? 1
                  : -1
                : film.Title > nextFilm.Title
                ? 1
                : -1
            )
          )

          .map((film) => (
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
    </>
  );
};

export default SingleFilm;

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

  const filteredList = filmsList.filter((e) => {
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

  return (
    <>
      <div>
        <button onClick={handleClick}>
          {ascending ? "Sort Ascending" : "Sort Descending"}
        </button>
        <form>
          <label>
            Find
            <input
              name="search"
              value={filter}
              onChange={handleOnChange}
              placeholder="Movie title ..."
            ></input>
          </label>
        </form>
      </div>
      <div className="moviesList">
        {filteredList
          .sort((film, nextFilm) =>
            ascending ? nextFilm.Year - film.Year : film.Year - nextFilm.Year
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

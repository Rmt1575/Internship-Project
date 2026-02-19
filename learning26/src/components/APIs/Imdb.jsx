import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Imdb = () => {
  //movie state
  const [movies, setmovies] = useState([]);

  //search param
  const [searchParam, setsearchParam] = useState("");
  const searchParamHandler = (event) => {
    console.log(event.target.value);
    setsearchParam(event.target.value);
  };

  //get data from API and store in state
  const searchmovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=bb6a5234&s=${searchParam}`,
      );

      if (response.data.Response === "True") {
        setmovies(response.data.Search);
      } else {
        setmovies([]);
        console.log(response.data.Error);
      }
    } catch (error) {
      console.log(error.message);
      setmovies([]);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1 style={{ color: "red" }}>
        {" "}
        <b>Movie Search</b>
      </h1>

      {/* Search */}
      <div style={{ marginBottom: "20px" }}>
        <label>Search </label>
        <input
          type="text"
          value={searchParam}
          onChange={searchParamHandler}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <br />
        <button
          onClick={searchmovies}
          style={{ color: "red", marginBottom: "20px" }}
        >
          Search
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              background: "#1e1e1e",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <h4>
              <Link
                to={`/moviedetails/${movie.imdbID}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {movie.Title}
              </Link>
            </h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

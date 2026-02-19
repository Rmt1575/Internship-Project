import axios from "axios";
import React, { useState } from "react";

export const Omdb = () => {
  //movies state
  const [movies, setmovies] = useState([]);

  //serch param
  const [searchParam, setsearchParam] = useState("");
  const searchParamHandler = (event) => {
    console.log(event.target.value);
    setsearchParam(event.target.value);
  };

  //get data from API and store in state
  const searchmovie = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=740978aa&s=${searchParam}`,
    );
    console.log(response);
    console.log(response.data);
    setmovies(response.data.Search);
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>
        <b>OMDB API</b>
      </h1>

      <div>
        <label>Search : </label>{" "}
        <input
          type="text"
          value={searchParam}
          onChange={searchParamHandler}
          placeholder="MovieName"
        />
        <br />
        <button style={{ color: "red" }} onClick={searchmovie}>
          Search
        </button>
      </div>

      {/* Display Table of Searched Movies */}
      {movies.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>YEAR</th>
              <th>IMDB ID</th>
              <th>TYPE</th>
              <th>POSTER</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                  <td>{movie.imdbID}</td>
                  <td>{movie.Type}</td>
                  <td>
                    <img
                      src={movie.Poster}
                      style={{
                        height: "100px",
                        width: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

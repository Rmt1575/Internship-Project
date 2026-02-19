import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  //Get Movie ID from URL
  const { id } = useParams();

  //Navigate Function
  const navigate = useNavigate();

  //Movie State
  const [movie, setMovie] = useState(null);

  //Loading and Error State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //Fetch Movie Details from API
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=bb6a5234&i=${id}`,
        );

        //Check if response is successful
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError(response.data.Error); //string only
        }
      } catch (error) {
        setError(error.message); //store only message
      } finally {
        setLoading(false); //Stop Loading in both success and error cases
      }
    };
    getMovieDetails();
  }, [id]); //Run useEffect whenever Movie ID changes

  //Loading State
  if (loading) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }

  //Error State
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h2>{error}</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  //Safety Check
  if (!movie) return null;
  return (
    <div style={{ color: "whitesmoke", padding: "20px", textAlign: "center" }}>
      <button onClick={() => navigate(-1)} style={{ color:"red",marginBottom: "20px" }}>
        Back
      </button>
      <h1 style={{color:"red"}}><b>{movie.Title}</b></h1>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ height: "auto", width: "300px", borderRadius: "10px" }}
      />
      <p>
        <b>Year : </b> {movie.Year} || <b>Rated : </b> {movie.Rated}
      </p>
      <p>
        <b>Released : </b> {movie.Released} || <b>Runtime : </b> {movie.Runtime}
      </p>
      <p>
        <b>Genre : </b> {movie.Genre}
      </p>
      <p>
        <b>Director : </b> {movie.Director} || <b>IMDb Rating : </b>{" "}
        {movie.imdbRating}
      </p>
      <p>
        <b>Actors : </b> {movie.Actors}
      </p>
      <p>
        <b>Plot : </b> {movie.Plot}
      </p>
    </div>
  );
};

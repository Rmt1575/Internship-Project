import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
  var movies = [
    {
      movieId: 1,
      movieName: "Iron Man (May 2, 2008)",
    },
    {
      movieId: 2,
      movieName: "The Incredible Hulk (June 13, 2008)",
    },
    {
      movieId: 3,
      movieName: "Iron Man 2 (May 7, 2010)",
    },
    {
      movieId: 4,
      movieName: "Thor (May 6, 2011)",
    },
    {
      movieId: 5,
      movieName: "Captain America : The First Avenger (July 22, 2011)",
    },
    {
      movieId: 6,
      movieName: "Marvel’s The First Avengers (May 4, 2012)",
    },
    {
      movieId: 7,
      movieName: "Iron Man 3 (May 3, 2013)",
    },
    {
      movieId: 8,
      movieName: "Thor : The Dark World (November 8, 2013)",
    },
    {
      movieId: 9,
      movieName: "Captain America: The Winter Soldier (April 4, 2014)",
    },
    {
      movieId: 10,
      movieName: "Guardians of the Galaxy (August 1, 2014)",
    },
    {
      movieId: 11,
      movieName: "Avengers: Age of Ultron (May 1, 2015)",
    },
    {
      movieId: 12,
      movieName: "Ant-Man (July 17, 2015)",
    },
    {
      movieId: 13,
      movieName: "Captain America: Civil War (May 6, 2016)",
    },
    {
      movieId: 14,
      movieName: "Doctor Strange (November 4, 2016)",
    },
    {
      movieId: 15,
      movieName: "Guardians of the Galaxy Vol. 2 (May 5, 2017)",
    },
    {
      movieId: 16,
      movieName: "Spider-Man: Homecoming (July 7, 2017)",
    },
    {
      movieId: 17,
      movieName: "Thor: Ragnarok (November 3, 2017)",
    },
    {
      movieId: 18,
      movieName: "Black Panther (February 16, 2018)",
    },
    {
      movieId: 19,
      movieName: "Avengers: Infinity War (April 27, 2018)",
    },
    {
      movieId: 20,
      movieName: "Ant-Man and the Wasp (July 6, 2018)",
    },
    {
      movieId: 21,
      movieName: "Captain Marvel (March 8, 2019)",
    },
    {
      movieId: 22,
      movieName: "Avengers: Endgame (April 26, 2019)",
    },
    {
      movieId: 23,
      movieName: "Spider-Man: Far From Home (July 2, 2019)",
    },
    {
      movieId: 24,
      movieName: "Black Widow (July 9, 2021)",
    },
    {
      movieId: 25,
      movieName:
        "Shang-Chi and the Legend of the Ten Rings (September 3, 2021)",
    },
    {
      movieId: 26,
      movieName: "Eternals (November 5, 2021)",
    },
    {
      movieId: 27,
      movieName: "Spider-Man: No Way Home (December 17, 2021)",
    },
    {
      movieId: 28,
      movieName: "Doctor Strange in the Multiverse of Madness (May 6, 2021)",
    },
    {
      movieId: 29,
      movieName: "Thor: Love and Thunder (July 8, 2022)",
    },
    {
      movieId: 30,
      movieName: "Black Panther: Wakanda Forever (November 11, 2022)",
    },
    {
      movieId: 31,
      movieName: "Ant-Man and the Wasp: Quantumania (February 17, 2023)",
    },
    {
      movieId: 32,
      movieName: "Guardians of the Galaxy Vol. 3 (May 5, 2023)",
    },
    {
      movieId: 33,
      movieName: "The Marvels (November 11, 2023)",
    },
    {
      movieId: 34,
      movieName: "Deadpool & Wolverine (July 26, 2024)",
    },
    {
      movieId: 35,
      movieName: "Captain America: Brave New World (February 14, 2025)",
    },
    {
      movieId: 36,
      movieName: "Thunderbolts (May 2, 2025)",
    },
    {
      movieId: 37,
      movieName: "The Fantastic Four: First Steps (July 25, 2025)",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Netflix Movies</h1>
      {movies.map((movie) => {
        return (
          <li>
            <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
          </li>
        );
      })}
    </div>
  );
};

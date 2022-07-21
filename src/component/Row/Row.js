import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchDataa() {
      const request = await axios.get(fetchUrl);
      request.data.results && setMovies(request.data.results);
    }

    fetchDataa();
  }, [fetchUrl]);

  const opts = {
    width: "100%",
    height: "490",
    playerVars: {
      autoplay: 1,
    },
  };

  const handelClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="row">
      <h3 className="title">{title}</h3>
      {movies.length !== 0 ? (
        <div className="posters_row">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="poster_row"
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => {
                handelClick(movie);
              }}
            />
          ))}
        </div>
      ) : (
        <SpinnerLoader />
      )}

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
export default Row;

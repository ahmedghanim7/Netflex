import React, { useState, useEffect } from "react";
import "./Banner.css";
const Banner = () => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=b4ec6b3f8b6f06c3d13467cf2e97ec39&with_networks=213";

  const baseURL = "https://image.tmdb.org/t/p/original/";

  // src={`${baseURL}${movie.poster_path}`}

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          data &&
            setMovie(
              data.results[Math.floor(Math.random() * data.results.length)]
            );
        });
    }
    getData();
  }, []);

  return (
    <header
      style={{
        background: ` url(${baseURL}${movie.poster_path}) no-repeat center center/cover`,
      }}
      className="banner"
    >
      <div className="inner_Banner">
        <div className="banner_content">
          <h3>{movie.name}</h3>
          <div className="btn">
            <button>Play</button>
            <button>My list</button>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;

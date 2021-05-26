import React from 'react';
import requests from '../requests';
import Row from './Row/Row';
const Rows = () => {

    return (
        <div>
            <Row title='Originals Movies' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title='Trending' fetchUrl={requests.fetchTrending}  />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}  />
            <Row title='Acion Movies' fetchUrl={requests.fetchActionMovies}  />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}  />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}  />
            <Row title='Romanc Movies' fetchUrl={requests.fetchRomanceMovies}  />
            <Row title='Documntaries Movies' fetchUrl={requests.fetchDocumentaries}   />
        </div>
    )
};

export default Rows;
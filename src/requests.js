// Api key => b4ec6b3f8b6f06c3d13467cf2e97ec39
// Example API Request => https://api.themoviedb.org/3/movie/550?api_key=b4ec6b3f8b6f06c3d13467cf2e97ec39 
// API Read Access Token (v4 auth) => eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGVjNmIzZjhiNmYwNmMzZDEzNDY3Y2YyZTk3ZWMzOSIsInN1YiI6IjYwNDg1MzgwYzRhZDU5MDA1OGZkYzFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2CMXHgnUE9tRTGwkbImg5kmMXfWYtPcoGxJzFTrH-o

/*
firebase 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.3.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/

const API_KEY= 'b4ec6b3f8b6f06c3d13467cf2e97ec39';

const requests= {
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchTopRated: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}
export default requests;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
function Movie() {
  const [movie, setMovie]= useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(movieData => setMovie(movieData))
  },[movieId])
  
  if(!movie.title) return <h1>Loading ...</h1>

  const displayMovies = movie.genres.map(genre => <span key={genre}>{genre}</span>)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} mins</p>
       <p> Genre: {displayMovies}</p>
      </main>
    </>
  );
};

export default Movie;

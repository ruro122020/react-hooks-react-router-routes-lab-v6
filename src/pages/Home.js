import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then(res => res.json())
    .then(moviesData => setMovies(moviesData))
  }, [])
const displayMovies = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
        {displayMovies}
        
      </main>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState({})

  useEffect(()=>{
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(actorsData => setActors(actorsData))
  }, [])

  if(!actors.length) return <h1>Loading ...</h1>

  const displayActors = actors.map(actor => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </article>
    )
  })
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
        {/* Actor info here! */}
        {displayActors}
      </main>
    </>
  );
};

export default Actors;

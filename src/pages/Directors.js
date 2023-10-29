import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState({})

  useEffect(()=>{
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(directorsData => {
      console.log(directorsData)
      setDirectors(directorsData)
    })
  },[])

 if(!directors.length) return <h1>Loading...</h1>

const displayDirectors = directors.map(director =>{
   return (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
       {director.movies.map(movie => <li key={movie}>{movie}</li>)}
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
        <h1>Directors Page</h1>
        {/* Director info here! */}
        {displayDirectors}
      </main>
    </>
  );
};

export default Directors;

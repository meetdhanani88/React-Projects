import React, { useEffect, useState } from 'react';
import "./App.css";
import MovieCard from './component/MovieCard';
import Searcicon from "./search.svg"

function App() {
  const [movie, setmovie] = useState([]);
  const [searched, setsearched] = useState("");
  const [isloading, setisloading] = useState(true)

  const API_URL = "https://www.omdbapi.com/?apikey=ef46c516";

  async function searchmovie(title) {
    setisloading(true);

    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()

    setmovie(data.Search)
    console.log(data);

    setisloading(false)

  }

  useEffect(() => {

    searchmovie("batman");

  }, [])

  // const movie1 = {
  //   "Title": "Spider-Man 3",
  //   "Year": "2007",
  //   "imdbID": "tt0413300",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  // }



  return (
    <div className='app'>
      <h1>MovieVilla</h1>

      <div className='search'>
        <input type="text" placeholder='Search Movie' value={searched} onChange={(e) => { setsearched(e.target.value) }} />
        <img src={Searcicon} alt="searchicon" onClick={() => { searchmovie(searched) }} />
      </div>

      {isloading && <h3 style={{ color: "white" }}>Loading...</h3>}

      {
        movie?.length > 0 ?
          (
            <div className="container">
              {movie.map((movie) => { return <MovieCard key={movie.imdbID} movie1={movie}></MovieCard> })}
            </div>
          )
          :
          (
            <div className='empty'>
              {!isloading && <h3>No Movie Found</h3>}
            </div>
          )
      }

    </div>
  )
}

export default App;
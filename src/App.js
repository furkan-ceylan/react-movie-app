import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () =>
    await fetch(
      'https://api.themoviedb.org/discover/movie?sort_by=popularity.desc?api_key=09a80f289e2586f012a2f37a412e256a'
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((error) => console.log(error))

  return (
    //map movies from useState
    <div className="App">
      <div>
        <h1>Movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieSingle from './MovieSingle'

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(
      'http://api.themoviedb.org/3/movie/upcoming?api_key=09a80f289e2586f012a2f37a412e256a'
    )
    setMovies(data.results)
    console.log(data)
  }

  return (
    <div>
      <div className="container">
        <div className="movies-all">
          <h2 className="movies-title">Upcoming Movies</h2>
          <div className="movies">
            {movies.map((movie) => (
              <MovieSingle movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingMovies

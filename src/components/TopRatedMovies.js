import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieSingle from './MovieSingle'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&vote_count.gte=10000&api_key=09a80f289e2586f012a2f37a412e256a'
    )
    setMovies(data.results)
    console.log(data)
  }

  return (
    <div>
      <div className="container">
        <div className="search-bar">
          <input className="search" type="text" placeholder="Search a movie" />
        </div>
        <div className="movies-all">
          <h2 className="movies-title">Top Rated Movies</h2>
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

export default TopRatedMovies

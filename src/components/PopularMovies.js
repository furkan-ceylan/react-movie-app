import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieSingle from './MovieSingle'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09a80f289e2586f012a2f37a412e256a'
    )
    setMovies(data.results)
    setLoading(false)
    console.log(data)
  }

  return (
    <div>
      <div className="container">
        <div className="movies-all">
          <h2 className="movies-title">Popular Movies</h2>
          <div className="movies">
            {loading === true ? (
              <Loader type="Bars" color="#fff" height={100} width={100} />
            ) : (
              movies.map((movie) => (
                <MovieSingle movie={movie} key={movie.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularMovies

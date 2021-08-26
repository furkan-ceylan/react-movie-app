import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Movie = ({ match }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    getMovie()
  }, [])

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=09a80f289e2586f012a2f37a412e256a&language=en-US`
    )
    setMovie(data)
    console.log(data)
  }
  return (
    <div className="movie-single">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title ? movie.title : movie.name}</p>
    </div>
  )
}

export default Movie

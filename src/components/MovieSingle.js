import React from 'react'
import { Link } from 'react-router-dom'

const MovieSingle = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.title ? movie.title : movie.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default MovieSingle

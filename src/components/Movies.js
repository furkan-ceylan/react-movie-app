import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
  return (
    <div>
      <h2 className="movies-title">Popular Movies</h2>
      <div className="movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title ? movie.title : movie.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Movies

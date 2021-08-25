import React from 'react'

const Movies = ({ movies }) => {
  return (
    <div>
      <h3 className="movies-title">Popular Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title ? movie.title : movie.name}
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies

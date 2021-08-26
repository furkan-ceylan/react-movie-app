import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import AlbumIcon from '@material-ui/icons/Album'

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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-detail">
        <p className="movie-title">{movie.title ? movie.title : movie.name}</p>
        <p className="movie-tagline">{movie.tagline}</p>
        <div className="movie-info">
          <div className="movie-rating">
            {movie.vote_average > 0 ? (
              <>
                {movie.vote_average >= 2 ? <StarIcon /> : <StarBorderIcon />}
                {movie.vote_average >= 4 ? <StarIcon /> : <StarBorderIcon />}
                {movie.vote_average >= 6 ? <StarIcon /> : <StarBorderIcon />}
                {movie.vote_average >= 8 ? <StarIcon /> : <StarBorderIcon />}
                {movie.vote_average >= 10 ? <StarIcon /> : <StarBorderIcon />}
              </>
            ) : (
              <StarBorderIcon />
            )}
            <p>{movie.vote_average}</p>
          </div>
          <div className="movie-lang">
            {movie.original_language === 'en' ? (
              <div>
                English / {movie.runtime} min /{' '}
                {movie.release_date.substring(0, 4)}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="movie-genres">
          <p>Genres</p>
          <div className="movie-genre">
            {movie.genres
              ? movie.genres.map((genre) => (
                  <div className="genre">
                    <AlbumIcon fontSize="small" />
                    <p>{genre.name}</p>
                  </div>
                ))
              : ''}
          </div>
        </div>
        <div className="movie-overviews">
          <p>Overview</p>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie

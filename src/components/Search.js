import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieSingle from './MovieSingle'
import { useLocation } from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Search = () => {
  const location = useLocation()

  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scroll(0, 0)
    fetchSearch()
  }, [])

  const fetchSearch = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=09a80f289e2586f012a2f37a412e256a&language=en-US&query=${searchText}&include_adult=false`
      )
      setResults(data.results)
      setLoading(false)
      setSearchText('')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="Search a movie"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Link to="/search-results">
            <button className="search-button" onClick={fetchSearch}>
              <SearchIcon />
            </button>
          </Link>
        </div>
        {results.length > 0 && loading === true ? (
          <Loader type="Bars" color="#fff" height={100} width={100} />
        ) : results.length > 0 && location.pathname === '/search-results' ? (
          <div className="movies-all">
            <h2 className="movies-title">Search Results</h2>
            <div className="movies">
              {results.map((result) => (
                <MovieSingle movie={result} key={result.id} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Search

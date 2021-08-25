import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Movies from './components/Movies'
import Sidebar from './components/Sidebar'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=09a80f289e2586f012a2f37a412e256a'
    )
    setMovies(data.results)
    console.log(data)
  }
  return (
    //map movies from useState
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="search-bar">
          <input className="search" type="text" placeholder="Search a movie" />
        </div>
        <div className="container">
          <div className="movies">
            <Movies movies={movies} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

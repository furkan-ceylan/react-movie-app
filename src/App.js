import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Sidebar />
        </div>
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
          </div>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09a80f289e2586f012a2f37a412e256a'
    )
    setMovies(data.results)
    console.log(data)
  }

  return (
    <div>
      <div className="search-bar">
        <input className="search" type="text" placeholder="Search a movie" />
      </div>
      <div className="movies-all">
        <Movies movies={movies} />
      </div>
    </div>
  )
}

export default App

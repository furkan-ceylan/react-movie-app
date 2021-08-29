import './index.css'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import Movie from './components/Movie'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div>
          <Search />
          <Switch>
            <Route exact path="/" component={PopularMovies} />
            <Route exact path="/top-rated" component={TopRatedMovies} />
            <Route exact path="/upcoming" component={UpcomingMovies} />
            <Route exact path="/search-results" component={Search} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

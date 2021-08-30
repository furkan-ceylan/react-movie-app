import React from 'react'
import logo from '../logo.png'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h3>Discover</h3>
      <Link to="/">
        <div
          className={
            location.pathname === '/' ? 'sidebar-item on-route' : 'sidebar-item'
          }
        >
          <FavoriteRoundedIcon />
          <p>Popular</p>
        </div>
      </Link>
      <Link to="/top-rated">
        <div
          className={
            location.pathname === '/top-rated'
              ? 'sidebar-item on-route'
              : 'sidebar-item'
          }
        >
          <GradeRoundedIcon />
          <p>Top Rated</p>
        </div>
      </Link>
      <Link to="/upcoming">
        <div
          className={
            location.pathname === '/upcoming'
              ? 'sidebar-item on-route'
              : 'sidebar-item'
          }
        >
          <DateRangeRoundedIcon />
          <p>Upcoming</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar

import React from 'react'
import logo from '../logo.png'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h3>Discover</h3>
      <Link to="/">
        <div className="sidebar-item on-route">
          <FavoriteRoundedIcon />
          <p>Popular</p>
        </div>
      </Link>
      <Link to="/top-rated">
        <div className="sidebar-item">
          <GradeRoundedIcon />
          <p>Top Rated</p>
        </div>
      </Link>
      <div className="sidebar-item">
        <DateRangeRoundedIcon />
        <p>Upcoming</p>
      </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import logo from '../logo.png'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h3>Discover</h3>
      <div className="sidebar-item on-route">
        <FavoriteRoundedIcon />
        <a href="#">Popular</a>
      </div>
      <div className="sidebar-item">
        <GradeRoundedIcon />
        <a href="#">Top Rated</a>
      </div>
      <div className="sidebar-item">
        <DateRangeRoundedIcon />
        <a href="#">Upcoming</a>
      </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import clearIcon from "../images/Icons/close.svg"
import searchIcon from "../images/Icons/search_icon.svg"
import style from "../styles/header.module.css";

const Search = () => {
  return (
    <div className={style.search} >
        <img className={style.searchIcon} src={searchIcon} />
        <input className={style.input} type="search" placeholder="What would you like to find?" />
        <img className={style.clearIcon} src={clearIcon}/>
    </div>
  )
}

export default Search
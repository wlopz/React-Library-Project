// rfce

import React from 'react'
import UndrawBook from '../assets/Undraw_Books.svg'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>Find your dream book with <span className="purple">Library</span></h2>
            <Link to="#features">
              <button className='btn'>Browse Books</button>
            </Link>
            <figure className='header__img--wrapper'>
              <img src={UndrawBook} alt="" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Landing
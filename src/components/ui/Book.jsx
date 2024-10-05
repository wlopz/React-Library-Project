// rfce

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import Rating from "./Rating"
import Price from './Price'

function Book({ book }) {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className='book__img--wrapper'>
          <img src={book.url} alt="" className='book__img'/>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className='book__title--link'>
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
    </div>
  )
}

export default Book
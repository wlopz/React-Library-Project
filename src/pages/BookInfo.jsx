import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price';
import Book from '../components/ui/Book';

// BookInfo Component: Displays details of a selected book and handles adding it to the cart
const BookInfo = ({ books, cart, addToCart }) => {
  
  // Extracting the 'id' param from the URL to identify which book to display
  const { id } = useParams()
  
  // Find the book in the 'books' array that matches the ID from the URL
  // The '+' operator is used to convert both 'id' and 'book.id' to numbers for comparison
  const book = books.find(book => +book.id === +id)

  // Function to handle adding the book to the cart by calling the addToCart function passed in as a prop
  function addBookToCart(book) {
    addToCart(book)
  }

  // Function to check if the book is already present in the cart
  // If it is, we will show a "Checkout" button instead of "Add to Cart"
  function bookExistsOnCart() {
    return cart.find(book => book.id === +id)
  }

  // JSX return block for rendering the BookInfo component
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books_container">
          <div className="row">
            {/* Top section with navigation back to the books listing */}
            <div className="book__selected--top">
              {/* Link back to the books page */}
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon='arrow-left' /> {/* Icon for back arrow */}
              </Link>
              {/* Another Link to the books page with the "Books" title */}
              <Link to="/books" className="book__link">
                <h2 className="book_selected--title--top">
                  Books
                </h2>
              </Link>
            </div>
            
            {/* Main section for displaying selected book details */}
            <div className="book__selected">
              {/* Image section for displaying the selected book cover */}
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" /> {/* Book cover image */}
              </figure>
              
              {/* Section for the book's details like title, rating, price, and summary */}
              <div className="book__selected--description">
                {/* Book title */}
                <h2 className="book__selected--title">{book.title}</h2>
                
                {/* Book rating component */}
                <div className="book__ratings">
                  <Rating rating={book.rating}/> {/* Rendering the rating of the book */}
                </div>
                
                {/* Book price section with sale and original price */}
                <div className="book__selected--price">
                  <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/> {/* Rendering the price using the Price component */}
                </div>
                
                {/* Book summary section */}
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi culpa totam. Laudantium iusto praesentium tempora consequatur repellat aperiam, minima nulla, omnis ex ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi culpa totam. Laudantium iusto praesentium tempora consequatur repellat aperiam, minima nulla, omnis ex ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
                </div>

                {/* Conditional rendering: If the book is already in the cart, show "Checkout" button; otherwise, show "Add to Cart" */}
                {
                  bookExistsOnCart() ? (
                    <Link to={`/cart`} className="book__link">
                      <button className="btn">Checkout</button> {/* Button to navigate to the cart if the book is already there */}
                    </Link>
                  ) : (
                    <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button> 
                  ) 
                }
                {/* Button to add the book to the cart if it's not already added */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Section for displaying recommended books */}
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2> {/* Title for the recommended books section */}
            </div>
            <div className="books">
              {/* Filtering and displaying recommended books: show only books with a 5-star rating and exclude the current book */}
              {
                books
                .filter((book) => book.rating === 5 && +book.id !== +id) // Filter out books with 5-star rating and exclude the current book
                .slice(0, 4) // Show only the top 4 recommended books
                .map((book) => <Book book={book} key={book.id}/>) // Rendering each recommended book using the Book component
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookInfo
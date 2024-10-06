// rfce

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import BookInfo from './pages/BookInfo.jsx';
import Footer from './components/Footer.jsx';
import { books } from "./data.js"
import Cart from './pages/Cart.jsx';

function App() {
  // State to store the list of books in the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add a book to the cart
  function addToCart(book) {
    // Adding a new book object to the cart, initializing the quantity to 1
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  // Function to update the quantity of a specific book in the cart
  function changeQuantity(book, quantity) {
    // Mapping over the current cart items to find the book by its ID and update its quantity
    setCart(
      cart.map(item =>
        item.id === book.id
          ? {
              ...item, // Keep all other book properties the same
              quantity: +quantity, // Update the quantity (ensure it's treated as a number by using +)
            }
          : item // Return other cart items unchanged
      )
    );
  }

  // Function to remove a book from the cart
  function removeItem(item) {
    // Filter out the book with the matching ID to remove it from the cart
    setCart(cart.filter(book => book.id !== item.id));
  }

  // useEffect to log the current state of the cart whenever it changes
  useEffect(() => {
    console.log(cart); // This will log the cart to the console every time it is updated
  }, [cart]); // Dependency array to trigger the effect only when 'cart' changes

  // Function to calculate the total number of items in the cart
  function numberOfItems() {
    let counter = 0;
    // Iterate over each item in the cart and sum up the quantities
    cart.forEach(item => {
      counter += item.quantity; // Add the quantity of each item to the counter
    });
    return counter; // Return the total count of items in the cart
  }

  // JSX to render the application with routing logic
  return (
    <Router>
      <div className="App">
        {/* Navigation bar component with the total number of items passed as a prop */}
        <Nav numberOfItems={numberOfItems()} />
        
        {/* Route definitions for different pages in the app */}
        <Routes>
          {/* Home page route */}
          <Route path='/' exact element={<Home />} />
          
          {/* Books listing page route */}
          <Route path='/books' element={<Books books={books} />} />
          
          {/* Book details page route, passing down the book data, addToCart function, and cart */}
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          
          {/* Cart page route, passing down the cart, changeQuantity, and removeItem functions */}
          <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
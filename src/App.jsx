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
  const [cart, setCart] = useState([])

  function addToCart(book) {
    // console.log('Book added to cart', book)
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/books' element={<Books books={books} />} />
            <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart books={books} />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

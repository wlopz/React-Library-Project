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
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    // console.log(book, quantity)
    setCart(
      cart.map(item => 
      item.id === book.id ?
        {
          ...item,
          quantity: +quantity,
        } : item
      )  
    )
  }

  function removeItem(item) {
    // console.log(removeItem, item)
    setCart(cart.filter(book => book.id !== item.id))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/books' element={<Books books={books} />} />
            <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart}  cart={cart} />} />
            <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

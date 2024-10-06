import React, { useEffect, useState } from 'react'
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity, removeItem }) => {
  
  // State to store the total price of items in the cart. Commented out for now because it's not being used.
  // const [total, setTotal] = useState()

  // useEffect hook can be used to calculate the total price whenever the cart changes.
  // Currently, this block calculates the total price directly within the function, without using state.
  // useEffect(() => {
    let price = 0;
    // Loop through each item in the cart to calculate the total price based on the salePrice or originalPrice and quantity.
    cart.forEach((item) => {
      // Add the price of each item to the total price.
      price += +((item.salePrice || item.originalPrice) * item.quantity)
      // Return the total price after each iteration.
      return price
    })
    // Optionally, set the total price in the state (if using state to store the total).
    // setTotal(price)
  // }, [cart]) // Dependencies: Re-run the effect whenever the cart changes.

  return (
    <div className="books_body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              {/* Display Cart title */}
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              {/* Header section for the cart: shows labels for Book, Quantity, and Price */}
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              {/* Body of the cart that dynamically displays each item in the cart */}
              <div className="cart__body">
                {
                  // Map through each book in the cart and create a row for each item.
                  cart.map(book => {
                    return (
                      <div className="cart__item" key={book.id}>
                        {/* Display book information including image, title, price, and a remove button */}
                        <div className="cart__book">
                          <img src={book.url} alt={book.title} className="cart__book--img" />
                          <div className="cart__book--info">
                            {/* Book title */}
                            <span className="cart__book--title">{book.title}</span>
                            {/* Show sale price if available, otherwise show original price */}
                            <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                            {/* Button to remove an item from the cart */}
                            <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                          </div>
                        </div>

                        {/* Input for changing the quantity of each book in the cart */}
                        <div className="cart__quantity">
                          <input type="number" min={0} max={99} className="cart__input"
                          value={book.quantity}
                          // When quantity changes, trigger the changeQuantity function
                          onChange={(event) => changeQuantity(book, event.target.value)}
                          />
                        </div>

                        {/* Show the total price for this specific book (price * quantity) */}
                        <div className="cart__total">${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}</div>
                      </div>
                    )
                  })
                }
              </div>

              {/* Conditional rendering: If the cart is empty, display an empty cart message with a link to browse books */}
              {
                cart.length === 0 && (
                  <div className="cart__empty">
                    <img src={EmptyCart} alt="Empty cart" className="cart__empty--img" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse Books</button>
                    </Link>
                  </div>
                )}
            </div>

            {/* Conditional rendering: If the cart has items, show the subtotal, tax, and total price summary */}
            {
              cart.length > 0 && (
              <div className="total">
                {/* Subtotal calculated as 90% of the total price (excluding tax) */}
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(price * 0.9).toFixed(2)}</span>
                </div>

                {/* Tax calculated as 10% of the total price */}
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(price * 0.1).toFixed(2)}</span>
                </div>

                {/* Total price (subtotal + tax) */}
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${price.toFixed(2)}</span>
                </div>

                {/* Checkout button: Currently disabled with an alert message */}
                <button className="btn btn__checkout no-cursor" onClick={() => alert('Feature is disabled at the moment')}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart

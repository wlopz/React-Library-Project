// rfce

import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import Rating from "./Rating"
import Price from './Price'

function Book({ book }) {
  
  // function imageLoaded() {
  //   console.log(imageLoaded)
  // }

  // The `book` prop contains the data for the specific book, such as its ID, title, image URL, rating, etc.

  // Local component state `img` will store the image once it is loaded.
  const [img, setImg] = useState()

  // `mountedRef` is a mutable reference initialized to `true` to help manage component unmounting.
  // This ensures that state is only updated if the component is still mounted.
  const mountedRef = useRef(true)

  // `useEffect` is used to manage the image loading process when the component renders or the `book` prop changes.
  // It asynchronously loads the book image and handles the cleanup on component unmounting.
  useEffect(() => {
    // Creating a new Image instance to load the book's image from its URL.
    const image = new Image()
    image.src = book.url

    // `onload` event is triggered when the image has successfully loaded.
    // We use `setTimeout` to simulate a slight delay in displaying the image (300ms here), which could be for a loading animation effect.
    image.onload = () => {
      setTimeout(() => {
        // Check if the component is still mounted before updating the state to avoid memory leaks or errors.
        if (mountedRef.current) {
          setImg(image)  // Once the image is loaded, update the `img` state to render the image.
        }
      }, 300)
    }

    // Cleanup function: runs when the component is about to unmount.
    // It sets `mountedRef.current` to `false` to prevent further state updates when the component is unmounted.
    return () => {
      mountedRef.current = false
    }
  }, [book.url])  // The effect depends on the `book.url`, meaning it will re-run if this prop changes.

  // JSX returned by the component. This determines what will be rendered on the screen.
  return (
    <div className="book">
      {/* Conditional rendering: If the image has loaded (`img` exists), render the actual book data.
          Otherwise, display skeleton loading placeholders. */}
      {
        img ? (
        <>
        {/* `Link` is used to wrap the book image and title, making them clickable and directing the user to a detailed book page (`/books/:id`). */}
        <Link to={`/books/${book.id}`}>
          <figure className='book__img--wrapper'>
            {/* Rendering the actual book image that was loaded and stored in the `img` state. */}
            <img src={img.src} alt={book.title} className='book__img' />
          </figure>
        </Link>

        {/* The book title is displayed, and it's also wrapped inside a `Link` for navigation purposes. */}
        <div className="book__title">
          <Link to={`/books/${book.id}`} className='book__title--link'>
            {book.title}  {/* Display the book title from the `book` prop. */}
          </Link>
        </div>

        {/* Rendering the `Rating` component, passing the book's rating value as a prop. */}
        <Rating rating={book.rating} />

        {/* Rendering the `Price` component, passing the sale price and original price as props to display pricing information. */}
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
        </>
        ) : (
        <>
          {/* If the image hasn't loaded yet, render skeleton components to indicate loading states.
              This gives the user a visual indication that data is being loaded. */}
          <div className="book__img--skeleton"></div>  {/* Placeholder for the book image. */}
          <div className="skeleton book__title--skeleton"></div>  {/* Placeholder for the book title. */}
          <div className="skeleton book__rating--skeleton"></div>  {/* Placeholder for the book rating. */}
          <div className="skeleton book__price--skeleton"></div>  {/* Placeholder for the book price. */}
        </>
        )
      }
    </div>
  )
}

// Exporting the `Book` component as the default export of this module, allowing it to be imported and used in other files.
export default Book

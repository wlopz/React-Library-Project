// rafc

import React, { useState } from 'react'
import Book from '../components/ui/Book'

const Books = ({ books: initialBooks }) => {
  // State variable 'books' stores the list of books to display. It is initialized with 'initialBooks'.
  // setBooks is the state updater function.
  const [books, setBooks] = useState(initialBooks);

  /**
   * filterBooks function
   * @param {string} filter - A string representing the type of sorting to apply.
   * 
   * This function sorts the books array based on the selected filter:
   * 1. 'LOW_TO_HIGH': Sorts books by price (low to high), prioritizing salePrice, and falling back to originalPrice.
   * 2. 'HIGH_TO_LOW': Sorts books by price (high to low), using the same pricing logic as above.
   * 3. 'RATING': Sorts books by their rating from highest to lowest.
   */
  function filterBooks(filter) {
    // Checking which filter is selected and performing the corresponding sort operation on the books array.
    // Using slice() to create a new copy of the array, to avoid mutating the original state directly.

    if (filter === 'LOW_TO_HIGH') {
      // Sorts books by price in ascending order, using salePrice if available, otherwise originalPrice.
      setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
    }
    
    else if (filter === 'HIGH_TO_LOW') {
      // Sorts books by price in descending order, using salePrice if available, otherwise originalPrice.
      setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
    }
    
    else if (filter === 'RATING') {
      // Sorts books by rating in descending order (higher ratings come first).
      setBooks(books.slice().sort((a, b) => b.rating - a.rating))
    }
  }

  // JSX structure of the component
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              {/* Header section containing title and filter dropdown */}
              <div className="books__header">
                {/* Section title */}
                <h2 className='section__title books__header--title'>All Books</h2>
                
                {/* Dropdown for selecting a sorting filter */}
                <select 
                  name="" 
                  id="filter" 
                  defaultValue="DEFAULT" 
                  // Call the filterBooks function when the dropdown selection changes
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  {/* Default disabled option prompting user to choose a sort type */}
                  <option value="DEFAULT" disabled>Sort</option>
                  {/* Sorting options */}
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              
              {/* Container for rendering the list of books */}
              <div className="books">
                {/* Mapping over the books array to render each book using the Book component */}
                {books.map((book) => (
                  // Pass each book object as a prop to the Book component, using book id as the key
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Export the Books component as the default export
export default Books;
// Import React from the 'react' library to use React's features (like JSX).
import React from 'react'

// Import the list of books from a local data file. This file should export an array of book objects.
// Each book object is expected to have properties like 'id', 'salePrice', etc.
import { books } from '../data'

// Import the Book component, likely a reusable UI component that renders individual book details.
// This will be used inside the map function to display each discounted book.
import Book from "./ui/Book"

// Define the Discounted functional component, which will display a list of discounted books.
// Functional components are a simpler way to create components using plain JavaScript functions.
function Discounted() {
  return (
    // Return a JSX structure that represents the section of the webpage.
    // This <section> is meant to hold the list of books that are on discount.
    <section id="recent">
      
      {/* Container div: Provides a structural wrapper for the contents of this section, 
          typically used for layout purposes. */}
      <div className="container">
        
        {/* Row div: A common Bootstrap (or similar framework) class used for grid-based layouts, 
            likely to organize content in a row within the container. */}
        <div className="row">
          
          {/* Section Title: Displays the main heading of this section, "Discount Books", with
              a styled 'Books' text using a class for the color purple. */}
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
          
          {/* Books container: This div wraps the list of book components that will be displayed. */}
          <div className="books">
            
            {/* JavaScript expression inside JSX to render a list of books.
                First, we filter the books to only include ones with a salePrice greater than 0, 
                meaning they are on discount. */}
            {
              books
              .filter(book => book.salePrice > 0)
              
              // Then, we slice the filtered books to display only the first 8 discounted books.
              .slice(0, 8)
              
              // Finally, we map over the sliced list of books to create a Book component for each book.
              // The Book component takes a 'book' prop with the current book object and a 'key' prop 
              // for performance reasons (React uses keys to efficiently update the UI).
              .map(book => (
              <Book book={book} key={book.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Export the Discounted component so it can be imported and used in other parts of the application.
export default Discounted

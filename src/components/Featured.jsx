// rfce

import React from 'react' 
// Importing the React library which allows us to use JSX and React components.

import Book from './ui/Book' 
// Importing the 'Book' component from the 'ui' folder. This component will be used to render individual book details.

import { books } from '../data' 
// Importing the 'books' array from a data file. This array contains a list of book objects that will be displayed in the Featured section.

function Featured() {
  // Defining a functional component called 'Featured'.
  
  console.log(books)
  // Logging the full 'books' array to the console for debugging purposes. This helps in verifying the data structure.

  console.log()
  // Intentionally empty console log. Likely added for debugging, but should be removed or given a purpose.

  return (
    <section id="features">
      {/* 'section' element with an ID of 'features', wrapping the whole section related to featured books. This ID can be used for styling or anchor linking. */}
      
      <div className="container">
        {/* 'container' div to group all the content of the section and potentially apply layout-related CSS (like max-width, padding, etc.). */}
        
        <div className="row">
          {/* 'row' div to structure the content, likely for applying a flexbox or grid-based layout. */}
          
          <h2 className="section__title">
            {/* Heading for the section that will display "Featured Books". */}
            Featured <span className="purple">Books</span>
            {/* Wrapping the word "Books" in a 'span' with a class of 'purple' to allow it to be styled differently (e.g., colored purple). */}
          </h2>

          <div className="books">
            {/* 'books' div that contains the list of featured book components. */}
            
            {books
              .filter(book => book.rating == 5)
              // Filtering the 'books' array to only include books that have a rating of 5 (top-rated books).

              .slice(0, 4)
              // After filtering, we take the first 4 books to be displayed, ensuring we don't show too many books at once.

              .map((book) => (
              // Using the map function to loop through each of the filtered books and return a 'Book' component for each.
              
              <Book book={book} key={book.id}/>
              // Rendering the 'Book' component for each book in the array. Passing the book object as a prop and using 'book.id' as a unique key for efficient rendering.
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
// Exporting the 'Featured' component as the default export so that it can be imported and used in other parts of the app.

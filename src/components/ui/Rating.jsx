// Import the 'FontAwesomeIcon' component from '@fortawesome/react-fontawesome'
// This will allow us to use Font Awesome icons as React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import React to define and export our React component
import React from 'react'

// Define a functional component named 'Rating' that takes a 'rating' prop
const Rating = ({rating}) => {
  return (
    // Wrapper div to hold the star icons, with a class for styling
    <div className="book__ratings">
      {
        // Create a new array of the size equal to the integer part of 'rating'
        // Math.floor(rating) rounds down the rating to the nearest whole number
        // The array is filled with zeros and mapped over to render filled star icons
        // The underscore (_) is used as a placeholder because we don't need the element itself, only the index
        new Array(Math.floor(rating)).fill(0).map((_, index) => 
          // Render a filled star (FontAwesome 'star' icon) for each element in the array
          // The 'key' prop ensures each icon has a unique identifier (required by React when rendering lists)
          <FontAwesomeIcon icon="star" key={index} />
        )
      }
      {
        // If the rating is not an integer (i.e., has a decimal part), render a half-star icon
        // !Number.isInteger(rating) checks whether the rating is a decimal (e.g., 4.5)
        // If true, it renders a half-filled star (FontAwesome 'star-half-alt' icon)
        !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
      }
    </div>
  )
}

// Export the 'Rating' component as the default export of the file, 
// so it can be imported and used in other parts of the application
export default Rating

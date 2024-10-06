// Importing the React library, which is necessary to create and use React components.
import React from 'react';

// Defining a functional component called "Highlight" which takes in three props: 'icon', 'title', and 'para'.
// This component is designed to display a highlight section with an icon, a title, and a paragraph.
function Highlight({ icon, title, para }) {
  
  // Returning the JSX structure that defines how the component will be rendered in the UI.
  return (
    // Main wrapper div for the highlight section with a class for styling.
    <div className="highlight">

      {/* Container for the icon. The icon prop is expected to be a React element, such as an image or an SVG. */}
      <div className="highlight__img">
        { icon } {/* Rendering the passed icon prop. */}
      </div>

      {/* The subtitle for the highlight section. The title prop will be displayed here as an h3 element. */}
      <h3 className="highlight__subtitle">
        {title} {/* Rendering the passed title prop. */}
      </h3>

      {/* Paragraph element for additional description or information. The para prop is displayed as text content. */}
      <p className="highlight__para">
        {para} {/* Rendering the passed para prop. */}
      </p>

    </div>
  );
}

// Exporting the Highlight component as the default export from this module, 
// so it can be imported and used in other parts of the application.
export default Highlight;

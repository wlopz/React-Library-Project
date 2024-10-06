import React from 'react';

/**
 * The Price component displays the price of a book, and if a sale price is provided, 
 * it shows both the original price and the sale price. If no sale price is present, 
 * only the original price is displayed.
 * 
 */
const Price = ({ originalPrice, salePrice }) => {
  return (
    <div className="book__price">
      {/* If a salePrice exists, display both the original price (with a class for styling) 
          and the sale price. The original price is styled differently, typically crossed out or grayed out */}
      {salePrice ? (
        <>
          {/* Display the original price with a class that would likely apply some styles like strikethrough */}
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}  {/* Format the original price to two decimal places */}
          </span>
          {/* Display the sale price (formatted to two decimal places), which is typically more prominent */}
          ${salePrice.toFixed(2)}
        </>
      ) : (
        // If no salePrice is provided, only display the original price, formatted to two decimal places
        <>
          ${originalPrice.toFixed(2)}
        </>
      )}
    </div>
  );
};

export default Price;
